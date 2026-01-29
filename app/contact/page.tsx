import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Navagatha Group for IT services, digital transformation, enterprise solutions and technology consulting. We're here to help transform your business.",
    keywords: [
        "Contact Navagatha Group",
        "IT Services Contact",
        "Technology Consulting India",
        "Enterprise Solutions Contact",
        "Digital Transformation Inquiry",
        "IT Support Mumbai"
    ],
    openGraph: {
        title: "Contact Navagatha Group | Get in Touch",
        description: "Connect with our team for IT services, digital transformation and enterprise solutions.",
        url: "https://www.navagathatech.com/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
            <ContactPageContent />
        </div>
    );
}
