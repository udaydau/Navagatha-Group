import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, QrCode } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 md:py-16 relative overflow-hidden">
            {/* Background elements if any, keeping simple for now matching screenshot style */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Logo, Description, Socials */}
                    <div className="flex flex-col gap-6">
                        <div className="relative h-20 w-full max-w-[250px]">
                            <Image
                                src="/images/logo_navagatha.png"
                                alt="NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD."
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            WE NAVAGATHA GROUP always believe in delivering best in all of its services . one of our core service i.e. SHIP MANAGEMENT. Our ship management services include technical management, crew management to serve the marine and offshore industry by providing quality work and reliable marine personnel.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition-transform">
                                <Facebook size={20} fill="white" className="text-white" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] p-2 rounded-full hover:scale-110 transition-transform">
                                <Linkedin size={20} fill="white" className="text-white" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] p-2 rounded-full hover:scale-110 transition-transform">
                                <Instagram size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col gap-6 md:pl-10">
                        <h3 className="text-2xl font-serif text-white">Services</h3>
                        <div className="w-12 h-1 bg-secondary mb-2 rounded-full"></div> {/* Decorative line */}
                        <ul className="space-y-4 text-sm text-gray-300">
                            {[
                                "Ship Managment",
                                "Shipagency",
                                "Chartering",
                                "Crew Management",
                                "Technical Management"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                    <a href="/#services" className="hover:text-secondary transition-colors uppercase tracking-wide text-xs md:text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: E-Visit Card */}
                    <div className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
                        <div>
                            <h3 className="text-2xl font-serif text-white mb-2">SCAN OUR E-VISIT CARD</h3>
                            <div className="w-12 h-1 bg-secondary ml-0 md:ml-auto rounded-full"></div>
                        </div>

                        <div className="bg-white p-2 rounded-lg inline-block md:self-end">
                            {/* Placeholder for QR Code - ideally user replaces valid image */}
                            <div className="relative w-48 h-48 border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                                <div className="text-center p-4">
                                    <QrCode size={64} className="text-gray-400 mx-auto mb-2" />
                                    <span className="text-xs text-gray-500 font-bold">QR CODE</span>
                                </div>
                                {/* If user provides a real QR code, uncomment below:
                                <Image src="/images/qrcode.png" alt="Scan E-Visit Card" fill className="object-contain" />
                                */}
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
