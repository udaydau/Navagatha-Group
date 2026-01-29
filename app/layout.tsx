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
        {children}

        {/* WhatsApp Widget */}
        <a
          href="https://wa.me/919999999999" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
