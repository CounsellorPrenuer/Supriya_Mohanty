import {Check, X} from "lucide-react";
import {client} from "@/sanity/lib/client";
import groq from "groq";
import {createImageUrlBuilder} from "@sanity/image-url";

const query = groq`*[_type == "siteContent"][0]`;

const navItems = [
  {label: "Home", href: "#home"},
  {label: "About Founder", href: "#about-founder"},
  {label: "Services", href: "#services"},
  {label: "Packages", href: "#packages"},
  {label: "Testimonials", href: "#testimonials"},
  {label: "Contact Us", href: "#contact-us"},
];

const builder = createImageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).fit("crop").url();

export default async function Home() {
  const data = await client.fetch<any>(query);

  if (!data) {
    return <main style={{padding: 48}}>No Sanity content found. Add content in /studio.</main>;
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <nav className="nav-wrap">
          <div className="brand">
            {data.logo?.asset ? <img src={urlFor(data.logo)} alt={data.brandName} /> : null}
            <strong>{data.brandName}</strong>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="section hero">
        <h1>{data.brandName}</h1>
        <h2>{data.tagline}</h2>
        <p>{data.homeIntro}</p>
      </section>

      <section id="about-founder" className="section">
        <h3>About Founder</h3>
        <div className="card about-grid">
          <div>
            {data.founderPhoto?.asset ? (
              <img src={urlFor(data.founderPhoto)} alt={data.founderName} className="founder-photo" />
            ) : (
              <div className="photo-placeholder">Founder Photo</div>
            )}
          </div>
          <div>
            <h4 style={{fontSize: 24, margin: "0 0 14px", color: "var(--primary)"}}>{data.founderName}</h4>
            <p className="body-text" style={{whiteSpace: "pre-line", margin: 0}}>{data.founderBio}</p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h3>Services</h3>
        <div className="service-grid">
          {data.services?.map((service: any) => (
            <article key={service.name} className="card service-card">
              <h4 style={{fontSize: 22}}>{service.name}</h4>
              <p className="body-text">{service.description}</p>
              <p><strong>Who it is for:</strong> {service.audience}</p>
              <p><strong>Mode:</strong> {service.mode}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="section" style={{maxWidth: 1280}}>
        <h3>Packages</h3>
        <p className="body-text" style={{marginTop: 0}}>{data.packagesTitle}</p>

        {data.packageAudienceGroups?.map((group: any) => (
          <div key={group.label} style={{marginBottom: 26}}>
            <h4 className="package-group-label">{group.label}</h4>
            <div className="package-grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"}}>
              {[{tier: "STANDARD", name: group.standardName, price: group.standardPrice, features: group.standardFeatures}, {tier: "PREMIUM", name: group.premiumName, price: group.premiumPrice, features: group.premiumFeatures}].map((card: any) => (
                <article key={card.tier + card.name} className="card package-card">
                  <p className="tier">{card.tier}</p>
                  <h5 style={{fontSize: "clamp(2rem, 4.5vw, 3rem)", margin: "8px 0"}}>{card.name}</h5>
                  <p className="price">&#8377; {card.price}</p>
                  <ul className="feature-list">
                    {card.features?.map((feature: any, index: number) => (
                      <li key={feature.text + index} className={`feature-item ${feature.included ? "" : "excluded"}`}>
                        {feature.included ? <Check size={18} color="#2f4be0" /> : <X size={18} color="#8a90b8" />}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary" style={{marginTop: 20}}>BUY NOW</button>
                </article>
              ))}
            </div>
          </div>
        ))}

        <h4 style={{fontSize: 28, color: "var(--deep)", marginTop: 38}}>{data.customPackagesTitle}</h4>
        <p className="body-text" style={{maxWidth: 900}}>{data.customPackagesSubtitle}</p>
        <div className="custom-grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"}}>
          {data.customPackages?.map((item: any) => (
            <article key={item.title} className="card custom-card">
              <h5 style={{fontSize: 20}}>{item.title}</h5>
              <strong style={{color: "var(--deep)"}}>&#8377; {item.price}</strong>
              <p className="body-text">{item.description}</p>
              <button className="btn-primary" style={{borderRadius: 10}}>BUY NOW</button>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section">
        <h3>Testimonials</h3>
        <div style={{display: "grid", gap: 16}}>
          {data.testimonials?.map((item: any, index: number) => (
            <article key={index} className="card testimonial-card">
              <p style={{fontSize: 18, lineHeight: 1.8, marginTop: 0}}>"{item.quote}"</p>
              <strong style={{color: "var(--primary)"}}>{item.author}</strong>
              <p className="body-text" style={{marginBottom: 0}}>{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact-us" className="section" style={{paddingBottom: 68}}>
        <h3>Contact Us</h3>
        <div className="contact-grid">
          <div className="card contact-card">
            <h4 style={{marginTop: 0, color: "var(--primary)"}}>Get In Touch</h4>
            <p><strong>Phone / WhatsApp:</strong> {data.phone}</p>
            <p><strong>Email:</strong> {data.email}</p>
            {data.office && data.office.trim().toLowerCase() !== "na" ? <p><strong>Office:</strong> {data.office}</p> : null}
            <p><strong>Instagram:</strong> <a style={{color: "var(--primary)"}} href={data.instagram} target="_blank">{data.instagram}</a></p>
            <p><strong>LinkedIn:</strong> <a style={{color: "var(--primary)"}} href={data.linkedin} target="_blank">{data.linkedin}</a></p>
            <p style={{marginBottom: 0}}><strong>Facebook:</strong> <a style={{color: "var(--primary)"}} href={data.facebook} target="_blank">{data.facebook}</a></p>
          </div>
          <div className="card contact-card">
            <h4 style={{marginTop: 0, color: "var(--primary)"}}>Send A Message</h4>
            <p className="body-text">Reach out for counselling, admission guidance, and mentorship plan details.</p>
            <form action={`mailto:${data.email}`} method="post" encType="text/plain" className="contact-form">
              <input name="name" required placeholder="Your name" />
              <input name="email" type="email" required placeholder="Your email" />
              <input name="phone" placeholder="Phone number" />
              <textarea name="message" required placeholder="Your message" rows={4} />
              <button type="submit" className="btn-primary">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
