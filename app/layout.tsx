import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Ndubuisi | Backend Engineer & AI Developer",
    template: "%s | Ndubuisi",
  },
  description:
    "I build real-time systems, AI-powered apps, and scalable backend solutions.",
  keywords: [
    "Backend Engineer",
    "AI Developer",
    "Node.js",
    "Python",
    "Machine Learning",
    "API Development",
    "Real-time Systems",
  ],
  authors: [{ name: "Ndubuisi" }],
  creator: "Ndubuisi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Ndubuisi Portfolio",
    title: "Ndubuisi | Backend Engineer & AI Developer",
    description: "I build real-time systems, AI-powered apps, and scalable backend solutions.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ndubuisi - Backend Engineer & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndubuisi | Backend Engineer & AI Developer",
    description: "I build real-time systems, AI-powered apps, and scalable backend solutions.",
    creator: "@ndubuisi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-XXXXXXXXXX", // Replace with your actual Google Search Console verification code
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ndubuisi",
  jobTitle: "Backend Engineer & AI Developer",
  description: "I build real-time systems, AI-powered apps, and scalable backend solutions.",
  url: baseUrl,
  sameAs: [
    "https://github.com/ndubuisi",
    "https://linkedin.com/in/ndubuisi",
    "https://twitter.com/ndubuisi",
    "mailto:hello@ndubuisi.dev",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Available for hire",
  },
  skills: [
    "Node.js",
    "Python",
    "Express",
    "Supabase",
    "PostgreSQL",
    "OpenAI",
    "AI Integration",
    "Real-time Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
