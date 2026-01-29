import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Navagatha Mercantile Fleet Management Pvt. Ltd. for ship management, crewing services, and maritime solutions.",
    keywords: [
        "Contact Navagatha Mercantile",
        "Ship Management Contact",
        "Crewing Services India",
        "Maritime Solutions Contact",
        "Fleet Management Inquiry",
        "Shipping Company Mumbai"
    ],
    openGraph: {
        title: "Contact Navagatha Mercantile | Get in Touch",
        description: "Connect with our team for ship management, crewing and maritime solutions.",
        url: "https://www.navagathagroup.com/contact",
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
