import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApplyPageContent } from "./ApplyPageContent";

export const metadata: Metadata = {
    title: "Apply Now | Join Navagatha Mercantile",
    description: "Submit your application to join the team at Navagatha Mercantile Fleet Management Pvt. Ltd. We're looking for experienced maritime professionals and crew.",
    keywords: [
        "Navagatha Mercantile Jobs",
        "Merchant Navy Jobs",
        "Ship Management Careers",
        "Join Navagatha Group",
        "Maritime Jobs Mumbai"
    ],
    openGraph: {
        title: "Apply for a Position | Navagatha Mercantile Careers",
        description: "Submit your application and start your journey with a premier ship management company.",
        url: "https://www.navagathagroup.com/careers/apply",
    },
    alternates: {
        canonical: "/careers/apply",
    },
};

export default function ApplyPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <ApplyPageContent />
            <Footer />
        </div>
    );
}
