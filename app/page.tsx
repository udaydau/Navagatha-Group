import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServiceSchema, getFAQPageSchema } from "@/lib/schema";
import { getCaseStudies } from "@/lib/case-studies";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import { WaterBackground } from "@/components/WaterBackground";

const faqs = [
  {
    question: "What is Navagatha Mercantile's primary focus?",
    answer: "Our core services are Ship Management, Technical Management, and Crew Management, serving the marine and offshore industry globally."
  },
  {
    question: "Are you authorized by DG Shipping?",
    answer: "Yes, we hold Indian shipping ministry license no MUM-RPSL-503."
  },
  {
    question: "What types of vessels do you manage?",
    answer: "We have vessels in manning including General Cargo, Tankers, Containers, and Bulk Carriers."
  },
  {
    question: "What other industries is Navagatha Group involved in?",
    answer: "Besides shipping, we are involved in Chartering, Academics, Import/Export, Nautical Gift Items, Real Estate Development, and the Entertainment Industry."
  }
];

const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default async function Home() {
  const studies = await getCaseStudies();
  const featuredStudies = studies.slice(0, 3);

  // Generate schemas for services
  const services = [
    { name: "Technical Management", category: "Ship Management", description: "Complete technical oversight, maintenance, and dry-docking support." },
    { name: "Crew Management", category: "Manning", description: "Recruitment, training, and placement of qualified seafarers." },
    { name: "Commercial Management", category: "Logistics", description: "Chartering, operations, and post-fixture management." },
    { name: "Import / Export", category: "Logistics", description: "Global freight forwarding and cargo logistics solutions." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-primary">
      {/* Service Schemas */}
      {services.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(s)) }}
        />
      ))}

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqs)) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <WaterBackground />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ClientMotionWrapper {...fadeInProps}>
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
              <Image
                src="/images/logo_navagatha.png"
                alt="Navagatha Mercantile Logo"
                width={300}
                height={100}
                className="relative"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg uppercase">
              NAVAGATHA MERCANTILE <br />
              <span className="text-secondary">FLEET MANAGEMENT PVT. LTD.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
              We Navagatha group has 10 year of Experience in the shipping industry as a Ship Management and Crewing company in Mumbai India.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/careers"
                className="px-10 py-5 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
              >
                Find Your Career at Sea <ArrowRight size={20} />
              </Link>
              <Link
                href="/#services"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Our Services
              </Link>
            </div>
          </ClientMotionWrapper>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Navagathagroup&apos;s <span className="text-secondary">Overview</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ClientMotionWrapper
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-lg text-foreground-muted leading-relaxed text-justify">
                <p>
                  We Navagatha group has 10 year of Experience in the shipping industry as a Ship Management and Crewing company in Mumbai India & with Indian shipping ministry license no MUM-RPSL-503. we offer an extensive range of services to ship owners and ship managers, wherever in the world they are located. Covering full management, technical management and crew management, we offer our clients the core support they need to operate and safeguard their vessels and achieve commercial success.
                </p>
                <p>
                  Successful companies are unique and their business models vary. At Navagatha Group excellence is our priority, Our ability to build and sustain working relationships is supported by an innovative approach, the efficient use of modern technology, and a passionate team of people dedicated to delivering client satisfaction and excellence in all marine services.
                </p>
              </div>
            </ClientMotionWrapper>

            <ClientMotionWrapper
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <p className="text-lg text-foreground-muted leading-relaxed mb-6 font-medium">
                  We Navagatha Group is in various part of shipping industry as well as:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["CHARTERING", "ACADEMICS", "IMPORT / EXPORT", "NAUTICAL GIFT ITEMS", "REAL ESTATE DEVELOPMENT", "ENTERTAINMENT INDUSTRY", "Up-skilling of human resources"].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-secondary/30 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-foreground-muted leading-relaxed font-medium">
                  ...are the name of few industries in which we are making huge leaps!
                </p>
              </div>

              <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-gray-100 relative shadow-xl">
                <Image
                  src="/images/about.png"
                  alt="Navagatha Fleet Management Team"
                  fill
                  className="object-cover"
                />
              </div>
            </ClientMotionWrapper>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-6 text-center">
          <ClientMotionWrapper {...fadeInProps}>
            <blockquote className="text-3xl md:text-5xl font-serif italic text-primary/80 leading-normal max-w-4xl mx-auto">
              &ldquo;Total Quality Management is not a destination, but a journey towards improvement&rdquo;
            </blockquote>
          </ClientMotionWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">1000</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">TESTIMONIAL</p>
              <p className="text-xs opacity-60">CREW HAS BEEN JOINED</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">138</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">SEA ROUT</p>
              <p className="text-xs opacity-60">SHENGAN , USA, South East Asia and Gulf Countries</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">12</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">VESSEL WE HAVE IN MANNING</p>
              <p className="text-xs opacity-60">VESSEL TYPE – GENERAL CARGO, TANKER, CONTAINER, BULK CARRIER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-serif italic text-2xl mb-2">Sailors</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet our team</h3>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We have core team member dedicated and honest for work. We are available 24/7 at any time by mail or chats to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "TECHNICAL MANAGEMENT", email: "capt.rajesh@navagathagroup.com", img: "/images/team/tech.jpg" }, // Placeholder img needed? Using generic or just text if no img
              { role: "FLEET PERSONAL MANAGER", email: "info@navagathagroup.com", img: "/images/team/fleet.jpg" },
              { role: "CREW MANAGER", email: "navagathagroup@gmail.com", img: "/images/team/crew.jpg" },
              { role: "IMPORT / EXPORT", email: "trade@navagathagroup.com", img: "/images/team/trade.jpg" },
            ].map((member, idx) => (
              <ClientMotionWrapper key={idx} {...fadeInProps} transition={{ delay: idx * 0.1 }} className="text-center group">
                <div className="relative w-full aspect-square mb-6 rounded-[40px] border-4 border-[#d4af37]/30 p-2 group-hover:border-[#d4af37] transition-all">
                  <div className="w-full h-full rounded-[30px] bg-gray-100 overflow-hidden relative">
                    {/* Ideally we would have real images, for now using placeholders or just stylistic elements */}
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/20">
                      <span className="font-bold text-6xl opacity-20">{idx + 1}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#d4af37] uppercase mb-2">{member.role}</h4>
                <a href={`mailto:${member.email}`} className="text-primary font-medium hover:text-secondary transition-colors text-sm break-all">
                  {member.email}
                </a>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to work with us?</h2>
              <p className="text-xl opacity-80 mb-12">
                Partner with Navagatha Mercantile for world-class technical and crew management solutions.
              </p>
              <Link
                href="/contact"
                className="px-12 py-6 bg-secondary text-primary font-extrabold text-xl rounded-full hover:bg-white transition-all shadow-xl hover:shadow-secondary/20 inline-flex items-center gap-3"
              >
                Contact Our Team <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Knowledge Base</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, idx) => (
              <ClientMotionWrapper
                key={idx}
                {...fadeInProps}
                className="p-8 rounded-2xl bg-background-alt border border-gray-100 hover:border-secondary transition-all"
              >
                <h4 className="text-xl font-bold text-primary mb-3">{faq.question}</h4>
                <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
