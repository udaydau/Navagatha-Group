"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Ship, Globe, Briefcase, Navigation, Package, ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

type ServiceCardColor = "primary" | "secondary" | "accent";

type ServiceCardProps = {
    icon: LucideIcon;
    title: string;
    desc: string;
    color: ServiceCardColor;
    points: string[];
    link?: string;
};

const colorMap: Record<ServiceCardColor, string> = {
    primary: "border-primary text-primary bg-primary/5",
    secondary: "border-secondary text-secondary bg-secondary/5",
    accent: "border-accent text-accent bg-accent/5",
};

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const ServiceCard = ({ icon: Icon, title, desc, color, points, link }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-b-8 ${colorMap[color].split(' ')[0]}`}
        >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorMap[color].split(' ').slice(1).join(' ')}`}>
                <Icon size={30} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-foreground-muted mb-6 leading-relaxed">
                {desc}
            </p>
            <ul className="space-y-2 mb-8">
                {points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                        <CheckCircle2 size={14} className="text-secondary" />
                        {point}
                    </li>
                ))}
            </ul>

            {link && (
                <div className="mt-auto border-t border-gray-50 pt-6">
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group/link"
                    >
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-secondary" />
                    </a>
                </div>
            )}
        </motion.div>
    );
};

export function ServicesSection() {
    const [activeTab, setActiveTab] = useState('management');

    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div {...fadeIn}>
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Our Services</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Maritime Excellence</h3>
                        <p className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                            Navagatha Mercantile Fleet Management Pvt. Ltd. has 10 year of Experience in the shipping industry, offering comprehensive services to ship owners and managers worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {[
                        { id: 'management', label: 'Fleet Management', icon: Ship },
                        { id: 'logistics', label: 'Import/Export', icon: Package },
                        { id: 'agency', label: 'Agency & Chartering', icon: Globe },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-xl scale-105'
                                : 'bg-white text-primary border border-primary/10 hover:border-primary/30'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {activeTab === 'management' && (
                        <>
                            <ServiceCard
                                icon={Ship}
                                title="Ship Management"
                                desc="WE NAVAGATHA Mercantile Fleet Management always believe in delivering best in all of its services.one of our core service i.e. SHIP MANAGEMENT. Our ship management services include technical management, crew management to serve the marine and offshore industry."
                                color="primary"
                                points={["Technical Management", "Crew Management", "Marine Industry", "Offshore Industry"]}
                                link="#"
                            />
                            <ServiceCard
                                icon={Navigation}
                                title="Technical Management"
                                desc="Navagatha as an organization offers numerous services in the maritime industry including one of the crucial ones i.e. career choices and upward growth for candidates."
                                color="secondary"
                                points={["Career Choices", "Upward Growth", "Maritime Industry", "Manning Solutions"]}
                                link="#"
                            />
                        </>
                    )}

                    {activeTab === 'logistics' && (
                        <>
                            <ServiceCard
                                icon={Package}
                                title="Export/Import"
                                desc="We Navagatha Group is in various part of shipping industry as well as CHARTERING, ACADEMICS, IMPORT / EXPORT, NAUTICAL GIFT ITEMS, REAL ESTATE DEVELOPMENT, ENTERTAINMENT INDUSTRY."
                                color="primary"
                                points={["Global Trade", "Chartering", "Logistics", "Supply Chain"]}
                                link="#"
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
