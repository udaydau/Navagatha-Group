"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight, Briefcase, TrendingUp, Mic2, Anchor, Ship, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getContactPageSchema } from "@/lib/schema";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import { WaterBackground } from "@/components/WaterBackground";

type InquiryTypeId = "services" | "investor" | "media";

type InquiryType = {
    id: InquiryTypeId;
    label: string;
    icon: any;
};

type ContactFormData = {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    country: string;
};

const inquiryTypes: InquiryType[] = [
    { id: 'services', label: 'Request for Services', icon: Ship },
    { id: 'investor', label: 'Investor Relations', icon: TrendingUp },
    { id: 'media', label: 'Media Contacts', icon: Globe },
];

function ContactForm() {
    const searchParams = useSearchParams();
    const subjectParam = searchParams.get("subject");

    const [selectedType, setSelectedType] = useState<InquiryTypeId>("services");
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        company: "",
        subject: "Request for Services",
        message: "",
        country: "India"
    });

    useEffect(() => {
        if (subjectParam) {
            setFormData(prev => ({
                ...prev,
                subject: subjectParam,
                message: `Hi Navagatha Team,\n\nI am writing to express my interest in the ${subjectParam}.`
            }));
        }
    }, [subjectParam]);

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleTypeChange = (type: InquiryTypeId, label: string) => {
        setSelectedType(type);
        setFormData({ ...formData, subject: label });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, inquiryType: selectedType })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", subject: formData.subject, message: "", country: "India" });
            } else {
                setErrorMessage(result.message || "An unexpected error occurred.");
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMessage("Failed to connect to the server. Please check your internet and try again.");
            setStatus("error");
        }
    };

    return (
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 -mt-20">
            {/* Address & Info Panel - Left Column */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 space-y-8"
            >
                {/* Office Card */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-[#0B1C3E] rounded-xl text-[#D4AF37] shadow-lg shadow-[#0B1C3E]/20">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-1">Headquarters</h3>
                                <h4 className="text-xl font-bold text-[#0B1C3E]">Mumbai, India</h4>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-600 leading-relaxed pl-2 border-l-2 border-[#D4AF37]/20">
                            <p className="font-bold text-[#0B1C3E]">Navagatha Mercantile Fleet Management Pvt. Ltd.</p>
                            <p>
                                Office No. 112, A Wing, 1st Floor,<br />
                                Crystal Plaza Premises<br />
                                Co-operative Society Ltd.,<br />
                                New Link Road,<br />
                                Opposite Infinity Mall,<br />
                                Andheri (West),<br />
                                Mumbai 400053, India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {/* Email Card */}
                    <div className="group bg-[#0B1C3E] p-8 rounded-3xl shadow-xl border border-[#0B1C3E] hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-[#D4AF37]">
                                    <Mail size={24} />
                                </div>
                                <h4 className="font-bold text-lg">Email Us</h4>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1 opacity-80">General Inquiries / Crew</p>
                                    <a href="mailto:info@navagathagroup.com" className="text-sm font-medium hover:text-[#D4AF37] transition-colors break-all">info@navagathagroup.com</a>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1 opacity-80">Commercial / Trade</p>
                                    <a href="mailto:trade@navagathagroup.com" className="text-sm font-medium hover:text-[#D4AF37] transition-colors break-all">trade@navagathagroup.com</a>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1 opacity-80">Ship Owners / Management</p>
                                    <a href="mailto:capt.rajesh@navagathagroup.com" className="text-sm font-medium hover:text-[#D4AF37] transition-colors break-all">capt.rajesh@navagathagroup.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-[#D4AF37] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-1">24/7 Support</h3>
                                <h4 className="text-xl font-bold text-[#0B1C3E]">Call Us</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Direct line for urgent business inquiries and support.</p>
                        <a href="tel:+919699024245" className="text-2xl font-bold text-[#0B1C3E] hover:text-[#D4AF37] transition-colors block">
                            +91 96990 24245
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Dynamic Form Area - Right Column */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-7"
            >
                <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative border border-gray-100">

                    {!subjectParam && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {inquiryTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => handleTypeChange(type.id, type.label)}
                                    className={`group flex flex-col items-center justify-center p-4 py-6 rounded-2xl border transition-all duration-300 ${selectedType === type.id
                                            ? 'border-[#0B1C3E] bg-[#0B1C3E] text-white shadow-lg transform -translate-y-1'
                                            : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-[#D4AF37] hover:bg-white'
                                        }`}
                                >
                                    <type.icon size={24} className={`mb-3 ${selectedType === type.id ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-[#D4AF37]'}`} />
                                    <span className="text-xs font-bold uppercase tracking-wider text-center">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-8 border border-green-100 mx-auto">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-[#0B1C3E] mb-4">Message Sent!</h3>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                    Thank you for contacting us regarding <strong>{formData.subject}</strong>. Our team will review your message and get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-[#D4AF37] font-bold hover:text-[#0B1C3E] transition-colors flex items-center gap-2 mx-auto"
                                >
                                    Send another message <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-[#0B1C3E]">
                                        {subjectParam ? "Submit Application" : "Send us a message"}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2">Required fields are marked with an asterisk (*)</p>
                                </div>

                                {status === "error" && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[#D4AF37] transition-colors">Full Name *</label>
                                        <input
                                            type="text" required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-[#D4AF37] transition-all outline-none font-medium text-[#0B1C3E]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[#D4AF37] transition-colors">Email Address *</label>
                                        <input
                                            type="email" required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-[#D4AF37] transition-all outline-none font-medium text-[#0B1C3E]"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[#D4AF37] transition-colors">Company</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-[#D4AF37] transition-all outline-none font-medium text-[#0B1C3E]"
                                            placeholder="Your Organization"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[#D4AF37] transition-colors">Country / Region *</label>
                                        <input
                                            type="text" required
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-[#D4AF37] transition-all outline-none font-medium text-[#0B1C3E]"
                                            placeholder="India"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[#D4AF37] transition-colors">Message *</label>
                                    <textarea
                                        required rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-[#D4AF37] transition-all outline-none font-medium text-[#0B1C3E] resize-none"
                                        placeholder="How can we assist you today?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full py-5 bg-[#0B1C3E] text-white font-bold text-lg rounded-xl hover:bg-[#D4AF37] hover:text-[#0B1C3E] transition-all shadow-xl shadow-[#0B1C3E]/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {status === "submitting" ? (
                                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            SEND MESSAGE
                                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

export function ContactPageContent() {
    const contactSchema = getContactPageSchema();

    return (
        <main className="bg-gray-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <Header />

            {/* Premium Hero Section */}
            <div className="relative bg-[#0B1C3E] text-white overflow-hidden pb-32 pt-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3E] via-[#1a3a5c] to-[#0d2847] z-0"></div>
                <div className="absolute inset-0 opacity-20">
                    <WaterBackground />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                                <span className="text-sm font-bold tracking-widest uppercase text-gray-200">Get in Touch</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Let&apos;s Start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-200">Conversation</span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                                Whether you&apos;re looking for ship management solutions, crewing services, or career opportunities, our global team is ready to assist.
                            </p>

                            <div className="flex justify-center gap-2 text-sm font-bold tracking-widest text-[#D4AF37]/80 uppercase">
                                <span>RPSL-MUM-503</span>
                                <span>•</span>
                                <span>ISO Certified</span>
                            </div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-24">
                <Suspense fallback={
                    <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
                        <div className="w-12 h-12 border-4 border-[#0B1C3E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="font-bold text-[#0B1C3E]">Loading Contact Form...</p>
                    </div>
                }>
                    <ContactForm />
                </Suspense>
            </div>

            <Footer />

            {/* WhatsApp Widget */}
            <a
                href="https://wa.me/919699024245"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border-4 border-white"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </main>
    );
}
