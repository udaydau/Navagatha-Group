import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import {
    Anchor,
    Ship,
    Users,
    Briefcase,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const domains = [
    {
        title: "Technical Management",
        icon: Ship,
        desc: "Ensuring vessels are maintained to the highest standards of safety and efficiency.",
        items: ["Planned Maintenance", "Dry Docking", "Safety Inspections", "Budget & Cost Control", "Regulatory Compliance"]
    },
    {
        title: "Crew Management",
        icon: Users,
        desc: "Recruiting and retaining competent seafarers for all vessel types.",
        items: ["Recruitment & Selection", "Training & Development", "Payroll Management", "Crew Welfare", "Travel Logistics"]
    },
    {
        title: "Commercial Management",
        icon: Briefcase,
        desc: "Maximizing vessel earnings through strategic chartering and operations.",
        items: ["Chartering Strategy", "Post-Fixture Operations", "Freight Collection", "Demurrage Claims", "Market Analysis"]
    },
    {
        title: "Maritime Consultancy",
        icon: Anchor,
        desc: "Expert advice on asset management, S&P, and maritime projects.",
        items: ["Sale & Purchase", "New Building Supervision", "Vessel Inspections", "Risk Assessment", "Maritime Audits"]
    }
];

const vesselTypes = [
    { category: "Tankers", items: ["Crude Oil Tankers", "Product Tankers", "Chemical Tankers"] },
    { category: "Bulk Carriers", items: ["Handysize", "Supramax", "Panamax", "Capesize"] },
    { category: "Gas Carriers", items: ["LPG Carriers", "LNG Carriers"] },
    { category: "Container Ships", items: ["Feeder Vessels", "Mainliners"] },
    { category: "Offshore", items: ["AHTS", "PSV", "OSV"] }
];

export const metadata: Metadata = {
    title: "Maritime Services",
    description: "Comprehensive ship management services including technical, crewing, and commercial management.",
    keywords: [
        "Technical Management",
        "Crew Management",
        "Commercial Management",
        "Ship Management",
        "Maritime Services",
        "Vessel Management"
    ],
    openGraph: {
        title: "Maritime Services | Navagatha Mercantile",
        description: "Expert technical, crewing, and commercial management for the global shipping industry.",
        url: "https://www.navagathagroup.com/expertise",
    },
    alternates: {
        canonical: "/expertise",
    },
};

export default function ExpertisePage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />

            <main className="pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-12">
                        <Breadcrumbs
                            items={[
                                { name: "Our Services", url: "https://www.navagathagroup.com/expertise" }
                            ]}
                        />
                    </div>

                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-7xl font-extrabold text-primary mb-8 leading-tight">
                                Excellence in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Maritime Services</span>
                            </h1>
                            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                                We deliver world-class ship management solutions, ensuring safety, efficiency, and profitability for vessel owners worldwide.
                            </p>
                        </ClientMotionWrapper>
                    </div>

                    {/* Domain Expertise */}
                    <section className="mb-32">
                        <div className="grid md:grid-cols-2 gap-8">
                            {domains.map((domain, idx) => (
                                <ClientMotionWrapper
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
                                >
                                    <div className="flex items-start gap-6 mb-8">
                                        <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                                            <domain.icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">{domain.title}</h3>
                                            <p className="text-foreground-muted">{domain.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {domain.items.map((item) => (
                                            <span key={item} className="px-3 py-1 bg-gray-50 text-primary/70 rounded-full text-xs font-bold border border-gray-100 uppercase tracking-wider">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </ClientMotionWrapper>
                            ))}
                        </div>
                    </section>

                    {/* Vessel Expertise Grid */}
                    <section className="py-24 bg-primary text-white rounded-[60px] relative overflow-hidden mb-32">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
                        <div className="container px-12 relative z-10">
                            <div className="max-w-3xl mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Vessel Expertise</h2>
                                <p className="text-lg opacity-70">
                                    Our team possesses deep technical knowledge across a wide range of vessel types, ensuring tailored management strategies for every asset.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-5 gap-12">
                                {vesselTypes.map((type, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <h4 className="text-secondary font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-4">
                                            {type.category}
                                        </h4>
                                        <ul className="space-y-3">
                                            {type.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                                                    <CheckCircle2 size={14} className="text-secondary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-8">Ready to optimize your fleet?</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                            >
                                Contact Us <ArrowRight size={20} />
                            </Link>
                        </div>
                    </ClientMotionWrapper>
                </div>
            </main>

            <Footer />
        </div>
    );
}
