"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Ship, Globe, Briefcase, Navigation, Package, ArrowRight, CheckCircle2, X, type LucideIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";

type ServiceCardColor = "primary" | "secondary" | "accent";

type ServiceCardProps = {
    icon: LucideIcon;
    title: string;
    desc: string;
    color: ServiceCardColor;
    points: string[];
    link?: string;
    onClick?: () => void;
};

const colorMap: Record<ServiceCardColor, string> = {
    primary: "border-[#0B1C3E] text-[#0B1C3E] bg-[#0B1C3E]/5",
    secondary: "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5",
    accent: "border-[#00B5D8] text-[#00B5D8] bg-[#00B5D8]/5",
};

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const ServiceCard = ({ icon: Icon, title, desc, color, points, link, onClick }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-b-8 ${colorMap[color].split(' ')[0]}`}
        >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorMap[color].split(' ').slice(1).join(' ')}`}>
                <Icon size={30} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1C3E] mb-4">{title}</h3>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
                {desc}
            </p>
            <ul className="space-y-2 mb-8">
                {points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-[#0B1C3E]/80">
                        <CheckCircle2 size={14} className="text-[#D4AF37]" />
                        {point}
                    </li>
                ))}
            </ul>

            {onClick ? (
                <div className="mt-auto border-t border-gray-50 pt-6">
                    <button
                        onClick={onClick}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1C3E] hover:text-[#D4AF37] transition-colors group/link"
                    >
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-[#D4AF37]" />
                    </button>
                </div>
            ) : link && (
                <div className="mt-auto border-t border-gray-50 pt-6">
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1C3E] hover:text-[#D4AF37] transition-colors group/link"
                    >
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-[#D4AF37]" />
                    </a>
                </div>
            )}
        </motion.div>
    );
};

export function ServicesSection() {
    const [activeTab, setActiveTab] = useState('management');
    const [activeSubTab, setActiveSubTab] = useState('copper_cathode');
    const [isCharteringModalOpen, setIsCharteringModalOpen] = useState(false);

    const commodities = [
        { id: 'copper_cathode', label: 'Copper Cathode' },
        { id: 'copper_scrap', label: 'Copper Millberry Wire Scrap' },
        { id: 'gold_bar', label: 'Gold Dore Bar' },
        { id: 'iron_ore', label: 'Iron Ore Fines' },
        { id: 'coltan_ore', label: 'Coltan Ore' },
        { id: 'manganese', label: 'Manganese' },
        { id: 'aluminium', label: 'Aluminium' },
    ];

    const [activeAgencySubTab, setActiveAgencySubTab] = useState('agency');

    const agencyServices = [
        { id: 'agency', label: 'Ship Agency' },
        { id: 'chartering', label: 'Chartering' },
        { id: 'broking', label: 'Ship Broking' },
        { id: 'port_services', label: 'Port Services' },
    ];

    return (
        <section id="services" className="py-8 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <motion.div {...fadeIn}>
                        <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">Our Services</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-[#0B1C3E] mb-4">Maritime Excellence</h3>
                        <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
                            Navagatha Mercantile Fleet Management Pvt. Ltd. has more than decade Experience in the shipping industry, offering comprehensive services to ship owners and managers worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                        { id: 'management', label: 'Fleet Management', icon: Ship },
                        { id: 'logistics', label: 'Import/Export', icon: Briefcase },
                        { id: 'agency', label: 'Agency Services', icon: Globe },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id
                                ? 'bg-[#0B1C3E] text-white shadow-xl scale-105'
                                : 'bg-white text-[#0B1C3E] border border-[#0B1C3E]/10 hover:border-[#0B1C3E]/30'
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
                            <ServiceCard
                                icon={Anchor}
                                title="Crew Management"
                                desc="Our crew management services involve the recruitment, training, and placement of qualified seafarers to ensure safe and efficient vessel operations."
                                color="accent"
                                points={["Recruitment & Selection", "Training & Certification", "Payroll & Allotments", "Crew Welfare"]}
                                link="#"
                            />
                        </>
                    )}

                    {activeTab === 'logistics' && (
                        <div className="lg:col-span-3 grid lg:grid-cols-4 gap-8">
                            {/* Vertical Sub-Tabs Sidebar */}
                            <div className="lg:col-span-1 space-y-2">
                                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4 px-4">Our Commodities</h4>
                                {commodities.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSubTab(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all border ${activeSubTab === item.id
                                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-lg translate-x-1'
                                            : 'bg-white text-[#0B1C3E] border-[#0B1C3E]/5 hover:border-[#0B1C3E]/20 hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Commodity Content Area */}
                            <div className="lg:col-span-3">
                                {activeSubTab === 'copper_cathode' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Copper Cathode"
                                        desc="We facilitate the global trade of high-purity Copper Cathodes, ensuring reliable sourcing and efficient logistics for industrial applications worldwide."
                                        color="primary"
                                        points={["High Purity (99.99%)", "LME Registered", "Global Distribution", "Quality Certification"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'copper_scrap' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Copper Millberry Wire Scrap"
                                        desc="Supplying premium Copper Millberry Wire Scrap for recycling and manufacturing, adhering to international scrap quality standards."
                                        color="secondary"
                                        points={["99.9% Upwards Purity", "Bare Bright Copper", "International Standards", "Volume Supply"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'gold_bar' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Gold Dore Bar"
                                        desc="Expertise in the secure procurement and transport of Gold Dore bars, bridging mines to refineries with complete transparency."
                                        color="accent"
                                        points={["Ethical Sourcing", "Safe Transit", "Refinery Links", "Assaying Services"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'iron_ore' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Iron Ore Fines"
                                        desc="Handling high-grade Iron Ore Fines for the global steel industry, managing complex supply chains from pit to port."
                                        color="primary"
                                        points={["High-Grade Fe Content", "Bulk Shipping", "Coastal Logistics", "Supply Consistency"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'coltan_ore' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Coltan Ore"
                                        desc="Specialized trade in Coltan (Columbite-Tantalite) ore, critical for the global electronics industry, with a focus on ethical sourcing."
                                        color="secondary"
                                        points={["Tantalum & Niobium", "Conflict-free Sourcing", "Electronics Industry Grade", "Secure Logistics"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'manganese' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Manganese"
                                        desc="Reliable supplier of high-quality Manganese ore and alloys, essential for steel production and battery manufacturing."
                                        color="accent"
                                        points={["Metallurgical Grade", "Steel Industry Feedstock", "Bulk Port Operations", "Quality Assurance"]}
                                        link="#"
                                    />
                                )}
                                {activeSubTab === 'aluminium' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Aluminium"
                                        desc="Providing comprehensive trading solutions for primary aluminium and alloys, serving construction and automotive sectors."
                                        color="primary"
                                        points={["Primary Ingots", "Alloy Production", "Global Warehousing", "Door-to-Door Logistics"]}
                                        link="#"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'agency' && (
                        <div className="lg:col-span-3 grid lg:grid-cols-4 gap-8">
                            {/* Vertical Sub-Tabs Sidebar */}
                            <div className="lg:col-span-1 space-y-2">
                                {agencyServices.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveAgencySubTab(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all border ${activeAgencySubTab === item.id
                                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-lg translate-x-1'
                                            : 'bg-white text-[#0B1C3E] border-[#0B1C3E]/5 hover:border-[#0B1C3E]/20 hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Agency Content Area */}
                            <div className="lg:col-span-3">
                                {activeAgencySubTab === 'agency' && (
                                    <ServiceCard
                                        icon={Globe}
                                        title="Ship Agency"
                                        desc="Providing comprehensive port agency services, ensuring efficient vessel turnaround and seamless shore-based support."
                                        color="primary"
                                        points={["Port Agency", "Husbandry Services", "Cargo Operations", "Vessel Clearances"]}
                                        link="#"
                                    />
                                )}
                                {activeAgencySubTab === 'chartering' && (
                                    <ServiceCard
                                        icon={Globe}
                                        title="Chartering"
                                        desc="Expert strategic chartering solutions to maximize vessel utilization and profitability across global trade routes."
                                        color="secondary"
                                        points={["Vessel Chartering", "Post-fixture Support", "Market Analysis", "Contract Negotiation"]}
                                        onClick={() => setIsCharteringModalOpen(true)}
                                    />
                                )}
                                {activeAgencySubTab === 'broking' && (
                                    <ServiceCard
                                        icon={Briefcase}
                                        title="Ship Broking"
                                        desc="Facilitating specialized ship broking services for sale, purchase, and project-based maritime requirements."
                                        color="accent"
                                        points={["Sale & Purchase", "Newbuild Projects", "Demolition Broking", "Valuation Services"]}
                                        link="#"
                                    />
                                )}
                                {activeAgencySubTab === 'port_services' && (
                                    <ServiceCard
                                        icon={Package}
                                        title="Port Services"
                                        desc="Providing essential ground-to-ship support and specialized port operations to ensure smooth vessel activities while in port."
                                        color="primary"
                                        points={["Terminal Operations", "Cargo Handling", "Logistics Support", "Port Liaison"]}
                                        link="#"
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Chartering Details Modal */}
            <AnimatePresence>
                {isCharteringModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCharteringModalOpen(false)}
                            className="fixed inset-0 bg-[#0B1C3E]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 m-auto w-full max-w-4xl h-fit max-h-[90vh] bg-white rounded-3xl shadow-2xl z-[60] overflow-hidden flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="bg-[#0B1C3E] p-6 md:p-8 flex items-center justify-between sticky top-0">
                                <div>
                                    <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-2">Service Details</h4>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Chartering Operations</h3>
                                </div>
                                <button
                                    onClick={() => setIsCharteringModalOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div className="space-y-8">
                                    {/* Introduction */}
                                    <div className="space-y-4">
                                        <p className="text-[#4A5568] leading-relaxed text-lg">
                                            Our team of brokers and operation experts have a combined experience in excess of one hundred years, having previously worked in various trading houses, ship owning and operating companies.
                                        </p>
                                        <p className="text-[#4A5568] leading-relaxed text-lg">
                                            We work closely with major global industrial groups and commodity traders dealing with cementitious products, solid fuels, steel products, minerals, agricultural products and fertilizers to name a few.
                                        </p>
                                    </div>

                                    {/* Core Expertise */}
                                    <div className="bg-[#0B1C3E]/5 p-6 rounded-2xl border border-[#0B1C3E]/10">
                                        <h5 className="text-[#0B1C3E] font-bold text-xl mb-4">Core Expertise & Market Presence</h5>
                                        <p className="text-[#4A5568] leading-relaxed">
                                            Our experience especially in handling cementitious products has given us probably the largest portfolio of clients in the industry of manufacturing and trading such commodities across the globe.
                                        </p>
                                    </div>

                                    {/* Departmental Involvement */}
                                    <div>
                                        <h5 className="text-[#0B1C3E] font-bold text-xl mb-6">Departmental Involvements</h5>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                "Providing market information to the management through daily/monthly reports.",
                                                "Preparing monthly reports on in/out chartering fixtures concluded by the department.",
                                                "Forwarding brokerage commission Debit Notes to concerned commercial department for payment after C/P is signed.",
                                                "Conducting weekly meeting with empanelled brokers.",
                                                "Reviewing performance of the brokers on a periodic basis.",
                                                "Ensuring smooth operation and optimum utilization of vessels in accordance with C/P provisions."
                                            ].map((text, i) => (
                                                <div key={i} className="flex gap-3 items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                    <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                                    <span className="text-[#4A5568] text-sm font-medium leading-relaxed">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Client Commitment */}
                                    <div className="border-t border-gray-100 pt-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                                                <Anchor size={20} className="text-[#D4AF37]" />
                                            </div>
                                            <h5 className="text-[#0B1C3E] font-bold text-xl">Operational Excellence</h5>
                                        </div>
                                        <p className="text-[#4A5568] leading-relaxed">
                                            Clients expect smooth operation and optimum utilization of vessels in accordance with Charter Party provisions. In order to give clients the best services, our concerned operation departments (Technical and Commercial) are in constant contact with the vessels, various agencies, and clients to ensure operations are executed as per expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
