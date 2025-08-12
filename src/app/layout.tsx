// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatima | Web Developer Portfolio",
  description: "Personal portfolio of Fatima — showcasing web development, design, and creative projects built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fatima",
    url: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/",
    image: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/Images/profile.jpg",
    jobTitle: "Web Developer",
    description: "Personal portfolio of Fatima — showcasing web development, design, and creative projects built with Next.js and Tailwind CSS.",
    sameAs: ["https://github.com/FatimaBilal110"],
    knowsAbout: ["Web Development", "UI/UX Design", "Next.js", "Tailwind CSS", "JavaScript"]
  };

  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
