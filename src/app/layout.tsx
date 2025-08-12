import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima | Web Developer Portfolio",
  description:
    "Personal portfolio of Fatima — showcasing web development, design, and creative projects built with Next.js and Tailwind CSS.",
  keywords: ["Fatima", "portfolio", "web developer", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Fatima" }],
  openGraph: {
    title: "Fatima | Web Developer Portfolio",
    description:
      "Showcasing my web development projects, UI/UX skills, and creative works.",
    url: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/", 
    siteName: "Fatima Portfolio",
    images: ["https://portfolio-gray-six-i0ldk2z83x.vercel.app/Images/preview.png"], 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima | Web Developer Portfolio",
    description:
      "Showcasing my web development projects, UI/UX skills, and creative works.",
    images: ["https://portfolio-gray-six-i0ldk2z83x.vercel.app/Images/preview.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fatima",
              url: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/",
              image:
                "https://portfolio-gray-six-i0ldk2z83x.vercel.app/Images/preview.png",
              sameAs: [
                "https://github.com/FatimaBilal110",
              ],
              jobTitle: "Web Developer",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
