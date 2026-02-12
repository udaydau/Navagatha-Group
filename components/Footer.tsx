import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, QrCode } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0B1C3E] text-white py-12 md:py-16 relative overflow-hidden">
            {/* Background elements if any, keeping simple for now matching screenshot style */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Logo, Description, Socials */}
                    <div className="flex flex-col gap-0 items-center text-center">
                        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
                            <div className="relative h-20 w-[280px] md:h-28 md:w-[400px]">
                                <Image
                                    src="/images/logo_footer_dark_v2.png"
                                    alt="Navagatha Logo"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify max-w-sm">
                            Navagatha Group always believe in delivering best in all of its services . one of our core service i.e. SHIP MANAGEMENT. Our ship management services include technical management, crew management to serve the marine and offshore industry by providing quality work and reliable marine personnel.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition-transform">
                                <Facebook size={18} fill="white" className="text-white" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] p-2 rounded-full hover:scale-110 transition-transform">
                                <Linkedin size={18} fill="white" className="text-white" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] p-2 rounded-full hover:scale-110 transition-transform">
                                <Instagram size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col gap-4 items-center">
                        <div className="space-y-2 text-center">
                            <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">Services</h3>
                            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mx-auto"></div>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300 w-fit mx-auto">
                            {[
                                "Ship Management",
                                "Import/Export",
                                "Agency Services",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    <a href="/#services" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide text-xs md:text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: E-Visit Card */}
                    <div className="flex flex-col gap-6 items-center text-center">
                        <div>
                            <h3 className="text-2xl font-serif text-white mb-2 uppercase tracking-wider">CHAT ON WHATSAPP</h3>
                            <div className="w-12 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white p-2 rounded-lg inline-block shadow-xl">
                            <div className="relative w-48 h-48 border border-gray-100 flex items-center justify-center bg-white">
                                <Image
                                    src="/images/whatsapp_qr_v2.png"
                                    alt="Scan for WhatsApp"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>&copy; All Rights Reserved - {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}
