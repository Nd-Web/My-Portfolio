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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ndubusiekeh.com";

export const metadata: Metadata = {
  title: {
    default: "Ekeh Ndubuisi | Fullstack AI & Backend Engineer — Lagos, Nigeria",
    template: "%s | Ekeh Ndubuisi",
  },
  description:
    "Ekeh Paul Ndubuisi is a Lagos-based Fullstack AI & Backend Engineer with 5+ years experience. Founder of Iroko AI — 4th place at TeKnowledge × Microsoft 2026 Agentic AI Hackathon. Expert in Python, FastAPI, Node.js, Azure OpenAI, Semantic Kernel, React, and Next.js.",
  keywords: [
    "Ekeh Ndubuisi",
    "Ndubuisi Ekeh",
    "Paul Ndubuisi",
    "Backend Engineer Lagos",
    "AI Developer Nigeria",
    "Fullstack Engineer Lagos",
    "FastAPI developer Nigeria",
    "Python developer Lagos",
    "Azure OpenAI developer",
    "Semantic Kernel developer",
    "Multi-agent AI systems",
    "Iroko AI",
    "Jwebly",
    "Next.js developer Lagos",
    "React developer Nigeria",
    "Agentic AI engineer",
    "Claude API developer",
    "Fintech developer Nigeria",
    "Microsoft Azure developer Lagos",
    "3MTT Fellow Nigeria",
    "Microsoft Student Ambassador Nigeria",
  ],
  authors: [{ name: "Ekeh Paul Ndubuisi", url: baseUrl }],
  creator: "Ekeh Paul Ndubuisi",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: baseUrl,
    siteName: "Ekeh Ndubuisi — Portfolio",
    title: "Ekeh Ndubuisi | Fullstack AI & Backend Engineer — Lagos, Nigeria",
    description:
      "Lagos-based Fullstack AI & Backend Engineer. Founder of Iroko AI — placed 4th at TeKnowledge × Microsoft 2026 Agentic AI Hackathon. 60+ client projects, AZ-204 certified, 3MTT Fellow.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ekeh Ndubuisi - Fullstack AI & Backend Engineer Lagos Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekeh Ndubuisi | Fullstack AI & Backend Engineer — Lagos, Nigeria",
    description:
      "Lagos-based Fullstack AI & Backend Engineer. Founder of Iroko AI. Python, FastAPI, Azure OpenAI, Semantic Kernel, React, Next.js.",
    creator: "@ndubuisiekeh",
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
    google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ekeh Paul Ndubuisi",
  alternateName: ["Ndubuisi Ekeh", "Paul Ndubuisi"],
  jobTitle: "Fullstack AI & Backend Engineer",
  description:
    "Lagos-based Fullstack AI & Backend Engineer with 5+ years experience. Founder of Iroko AI — autonomous compliance intelligence platform. 4th place at TeKnowledge × Microsoft 2026 Agentic AI Hackathon. 3MTT Fellow, Microsoft Student Ambassador.",
  url: baseUrl,
  image: `${baseUrl}/avatar.png`,
  email: "ndubuisiekeh0@gmail.com",
  telephone: "+2347078344746",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/Nd-Web",
    "https://linkedin.com/in/ekeh-ndubuisi-16427a245",
    "https://ndubusiekeh.com",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Iroko AI",
      url: "https://irokoai.site",
      description: "Autonomous compliance intelligence platform for Nigerian fintechs and microfinance banks",
    },
    {
      "@type": "Organization",
      name: "Jwebly",
      description: "AI-focused web agency serving SMEs",
    },
  ],
  knowsAbout: [
    "Python",
    "FastAPI",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Azure OpenAI",
    "Semantic Kernel",
    "Anthropic Claude API",
    "Multi-Agent AI Systems",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Microsoft Azure",
    "Agentic AI",
    "RAG Systems",
    "Fintech Backend Development",
    "Compliance Automation",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Microsoft Azure Developer Associate (AZ-204)",
      credentialCategory: "Professional Certification",
      recognizedBy: { "@type": "Organization", name: "Microsoft" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Microsoft AI Engineer Associate (AZ-102)",
      credentialCategory: "Professional Certification",
      recognizedBy: { "@type": "Organization", name: "Microsoft" },
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "IU International University of Applied Sciences",
      address: { "@type": "PostalAddress", addressCountry: "DE" },
    },
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
