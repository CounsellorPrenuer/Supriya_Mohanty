"use client";

import {useEffect, useState} from "react";
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

const fallbackData = {
  brandName: "LeapMentor",
  tagline: "Leap to clarity - find your right career path!",
  homeIntro:
    "We guide students, parents and professionals to make informed career choices through scientific assessments and expert counselling. Our mission is to make young minds aware about the importance of making informed education and career decisions in order to work towards a satisfying career journey. Our services include psychometric assessment evaluation, one-on-one career counselling, guidance for higher education tailored to your needs, bridge the gap between education, skills and opportunities and parental guidance.",
  founderName: "Supriya Mohanty",
  founderBio:
    "An astute education professional with over 25 years of experience in the domestic as well as overseas education sector with expertise in training, counselling and guidance. Working with students in diverse capacities has been a defining aspect of my professional journey.",
  services: [
    {
      name: "Career Guidance & Counselling",
      description:
        "We offer specialized career guidance to help students, college graduates, and working professionals make informed decisions about their education and career paths.",
      audience: "Class 8 to 12 students, College graduates",
      mode: "Online and Offline",
    },
    {
      name: "Admission Guidance",
      description:
        "We recommend education streams and pathways by offering personalized guidance for college and university admissions, including career counselling and entrance exam guidance.",
      audience: "Class 8 to 12 students, College graduates",
      mode: "Online and Offline",
    },
  ],
  packagesTitle: "Mentoria's Plans",
  packageAudienceGroups: [
    {
      label: "8-9 STUDENTS",
      standardName: "Discover",
      standardPrice: "5,500",
      premiumName: "Discover plus+",
      premiumPrice: "15,000",
      standardFeatures: [
        {text: "Psychometric assessment to measure your interests", included: true},
        {text: "1 career counselling session with expert career coaches", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Invites to live webinars by industry experts", included: true},
        {text: "Customised reports after each session with education pathways", included: false},
        {text: "Guidance on studying abroad", included: false},
        {text: "CV building during internships/graduation", included: false},
      ],
      premiumFeatures: [
        {text: "Psychometric assessments to measure your interests, personality and abilities", included: true},
        {text: "8 career counselling sessions (1 every year) until graduation", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Invites to live webinars by industry experts", included: true},
        {text: "Customised reports after each session with education pathways", included: true},
        {text: "Guidance on studying abroad", included: true},
        {text: "CV building during internships/graduation", included: true},
      ],
    },
    {
      label: "10-12 STUDENTS",
      standardName: "Achieve Online",
      standardPrice: "5,999",
      premiumName: "Achieve Plus+",
      premiumPrice: "10,599",
      standardFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "1 career counselling session", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Pre-recorded webinars by industry experts", included: true},
        {text: "Customised reports after each session with education pathways", included: false},
        {text: "Guidance on studying abroad", included: false},
        {text: "CV reviews during internships/graduation", included: false},
      ],
      premiumFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "4 career counselling sessions", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Attend live webinars by industry experts", included: true},
        {text: "Customised reports after each session with education pathways", included: true},
        {text: "Guidance on studying abroad", included: true},
        {text: "CV reviews during internships/graduation", included: true},
      ],
    },
    {
      label: "COLLEGE GRADUATES",
      standardName: "Ascend Online",
      standardPrice: "6,499",
      premiumName: "Ascend Plus+",
      premiumPrice: "10,599",
      standardFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "1 career counselling session", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Pre-recorded webinars by industry experts", included: true},
        {text: "Customised reports after each session with information on certificate/online courses", included: false},
        {text: "Guidance on studying abroad", included: false},
        {text: "CV reviews for job application", included: false},
      ],
      premiumFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "3 career counselling sessions", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Attend live webinars by industry experts", included: true},
        {text: "Customised reports after each session with information on certificate/online courses", included: true},
        {text: "Guidance on studying abroad", included: true},
        {text: "CV reviews for job application", included: true},
      ],
    },
    {
      label: "WORKING PROFESSIONALS",
      standardName: "Ascend Online",
      standardPrice: "6,499",
      premiumName: "Ascend Plus+",
      premiumPrice: "10,599",
      standardFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "1 career counselling session", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Pre-recorded webinars by industry experts", included: true},
        {text: "Customised reports after each session with information on certificate/online courses", included: false},
        {text: "Guidance on studying abroad", included: false},
        {text: "CV reviews for job application", included: false},
      ],
      premiumFeatures: [
        {text: "Psychometric assessment to measure your interests, personality and abilities", included: true},
        {text: "3 career counselling sessions", included: true},
        {text: "Lifetime access to Knowledge Gateway", included: true},
        {text: "Attend live webinars by industry experts", included: true},
        {text: "Customised reports after each session with information on certificate/online courses", included: true},
        {text: "Guidance on studying abroad", included: true},
        {text: "CV reviews for job application", included: true},
      ],
    },
  ],
  customPackagesTitle: "Customise Your Mentorship Plan",
  customPackagesSubtitle:
    "If you want to subscribe to specific services that resolve your career challenges, you can choose one or more of the following.",
  customPackages: [
    {title: "CV Building", price: "2000", description: "Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls."},
    {title: "LinkedIn Profile Building", price: "2000", description: "Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls."},
    {title: "LinkedIn Profile + CV Building", price: "3500", description: "Build a profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts."},
    {title: "Job Application Strategy", price: "4000", description: "Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job."},
    {title: "Career Report", price: "2500", description: "Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider."},
    {title: "Career Report + Career Counselling", price: "4000", description: "Connect with India's top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you're most likely to enjoy and excel at."},
    {title: "Knowledge Gateway + Career Helpline Access", price: "250/month", description: "Unlock holistic information on your career paths and get direct access to experts who resolve your career-related queries through our dedicated Career Helpline."},
    {title: "One-to-One Session with a Career Expert", price: "3500 per interaction for 1 hour", description: "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field."},
    {title: "Overseas Admission Planner", price: "3000 for a planner with top 10 colleges in India OR any 1 country abroad", description: "Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner."},
    {title: "Overseas Admission: SOP Brainstorm", price: "3000 for a one hour session", description: "Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert."},
    {title: "Overseas Admission: SOP Review", price: "2500", description: "Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut."},
    {title: "Interview Prep Session", price: "2000", description: "Ace your upcoming interviews with guidance from India's top HR experts and increase your chances of landing your dream job."},
  ],
  testimonials: [
    {
      quote:
        "The session with Supriya Ma'am gave me a clear understanding of career options best suited for me. She also helped me by suggesting a clear education path to achieve my career goals. Besides, I was given an understanding of my strengths, weaknesses and areas of development. Overall, the session was very useful as it gave me clarity about my future career options.",
      author: "Satvik Kure",
      role: "School Student",
    },
  ],
  phone: "7829736276",
  email: "mohanty.supriya65@gmail.com",
  office: "NA",
  instagram: "https://www.instagram.com/supriyam196/",
  linkedin: "https://www.linkedin.com/in/supriya-mohanty-5b5145185/",
  facebook: "https://www.facebook.com/profile.php?id=100074170277954",
};

export default function Home() {
  const [data, setData] = useState<any>(fallbackData);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    client
      .fetch(query, {}, {signal: controller.signal})
      .then((res) => {
        if (res) setData({...fallbackData, ...res});
      })
      .catch(() => {});

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

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
