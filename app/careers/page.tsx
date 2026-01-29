import type { Metadata } from "next";
import { getJobPostingSchema, type Job } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD. Explore exciting career opportunities in Merchant Navy, Ship Management, and Crewing.",
    keywords: [
        "Merchant Navy Jobs",
        "Seafarer Jobs",
        "Ship Management Careers",
        "Crewing Jobs Mumbai",
        "Maritime Careers",
        "Marine Engineering Jobs",
        "Deck Cadet Jobs"
    ],
    openGraph: {
        title: "Careers at Navagatha Mercantile | Join Our Fleet",
        description: "Build your future at sea with Navagatha Mercantile Fleet Management.",
        url: "https://www.navagathagroup.com/careers",
    },
    alternates: {
        canonical: "/careers",
    },
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Zap, Globe, Anchor } from "lucide-react";
import Link from "next/link";
import { getJobs } from "@/lib/jobs";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const values = [
    { icon: Star, title: "Safety First", desc: "We prioritize the safety of our crew and vessels above all else." },
    { icon: Heart, title: "Crew Welfare", desc: "Timely wages, excellent onboard living conditions, and family support." },
    { icon: Zap, title: "Career Growth", desc: "Clear pathways from Cadet to Master/Chief Engineer." },
    { icon: Globe, title: "Global Sailing", desc: "Opportunities to sail on diverse vessels across international waters." },
];

export default async function CareersPage() {
    let jobs: Job[] = [];
    try {
        jobs = await getJobs();
    } catch (error) {
        console.error("Error loading jobs:", error);
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />

            <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { name: "Careers", url: "/careers" }
                            ]}
                            className="text-white/80"
                        />
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <ClientMotionWrapper {...fadeIn}>
                            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                                Join our Fleet
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                                Navigate Your Future <br />
                                <span className="text-secondary">At Sea & Ashore</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                We are looking for dedicated seafarers and maritime professionals to join our growing fleet. Excellence starts with you.
                            </p>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Why Sail with Navagatha?</h2>
                        <p className="text-foreground-muted max-w-2xl mx-auto">
                            We offer a professional environment where seamanship and safety are valued.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <ClientMotionWrapper
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-background border border-border hover:border-secondary transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                                <p className="text-sm text-foreground-muted leading-relaxed">{value.desc}</p>
                            </ClientMotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="py-24 bg-background-alt">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-2">Current Openings</h2>
                            <p className="text-foreground-muted">Explore our vacancies for Officers, Engineers, and Rating.</p>
                        </div>
                        <div className="text-sm font-semibold text-primary px-4 py-2 bg-white rounded-full border border-border">
                            {jobs.length} Positions Available
                        </div>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job: Job) => {
                            const jobSchema = getJobPostingSchema({
                                id: job.id,
                                title: job.title,
                                description: job.description,
                                department: job.department,
                                type: job.type,
                                location: job.location,
                                slug: job.slug,
                                datePosted: new Date().toISOString()
                            });

                            return (
                                <ClientMotionWrapper
                                    key={job.id}
                                    {...fadeIn}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-secondary/30 transition-all group"
                                >
                                    <script
                                        type="application/ld+json"
                                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
                                    />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-2 py-1 bg-[#D4AF37]/5 rounded">
                                                    {job.department}
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-2 py-1 bg-gray-100 rounded">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-foreground-muted text-sm leading-relaxed max-w-2xl mb-4">
                                                {job.description}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs font-medium text-foreground-muted">
                                                <div className="flex items-center gap-1.5 capitalize">
                                                    <MapPin size={14} className="text-secondary" />
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link
                                                href={`/careers/${job.slug}`}
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full group-hover:bg-secondary group-hover:text-primary transition-all"
                                            >
                                                View Rank <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </ClientMotionWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* General Application */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ClientMotionWrapper {...fadeIn}>
                        <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                            <Anchor size={36} />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Join Our Sea Staff</h2>
                        <p className="text-lg text-foreground-muted mb-10 leading-relaxed">
                            Send your CV and Sea Service records to <span className="text-primary font-bold">hr@navagathagroup.com</span> for review.
                        </p>
                        <Link
                            href="/careers/apply"
                            className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                        >
                            General Application
                        </Link>
                    </ClientMotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
}
