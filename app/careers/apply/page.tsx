import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApplyPageContent } from "./ApplyPageContent";

export const metadata: Metadata = {
    title: "Apply Now | Join Navagatha Group",
    description: "Submit your application to join the team at Navagatha Group. We're looking for passionate IT professionals and innovators.",
    keywords: [
        "Navagatha Group Jobs",
        "IT Job Application",
        "Software Engineering Careers",
        "Join Navagatha Group",
        "Technology Jobs Mumbai"
    ],
    openGraph: {
        title: "Apply for a Position | Navagatha Group Careers",
        description: "Submit your application and start your journey with a next-generation IT services partner.",
        url: "https://www.navagathatech.com/careers/apply",
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
