import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeapMentor",
  description: "Leap to clarity - find your right career path!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
