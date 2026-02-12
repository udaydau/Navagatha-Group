import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a modern tech look
import "./globals.css";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navagathagroup.com"),
  title: {
    default: "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD. | Premier Ship Management",
    template: "%s | Navagatha Mercantile"
  },
  description: "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD. is a leader in ship management, crewing, and maritime services. Delivering excellence in technical and commercial management.",
  keywords: [
    "Navagatha Mercantile",
    "Fleet Management",
    "Ship Management India",
    "Crewing Services",
    "Merchant Navy",
    "Technical Management",
    "Commercial Management",
    "Import Export",
    "Manning Agents",
    "Maritime Services"
  ],
  authors: [{ name: "Navagatha Mercantile Team" }],
  creator: "Navagatha Mercantile",
  publisher: "Navagatha Mercantile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
    description: "Excellence in Ship Management, Crewing and Maritime Solutions.",
    url: "https://www.navagathagroup.com",
    siteName: "Navagatha Mercantile",
    images: [
      {
        url: "/images/logo_navagatha.png",
        width: 1200,
        height: 630,
        alt: "Navagatha Mercantile Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
    description: "Premier Ship Management and Crewing Services.",
    images: ["/images/logo_navagatha.png"],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get enhanced schema data
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/brand-logo.png?v=10" type="image/png" />
        <link rel="shortcut icon" href="/brand-logo.png?v=10" />
        <link rel="apple-touch-icon" href="/brand-logo.png?v=10" />
      </head>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground`}
      >
        {/* Organization & LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite Schema with Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}



      </body>
    </html>
  );
}
