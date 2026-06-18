import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import bluepeakLogoPath from "@assets/bluepeak-logo_1779888095803.png";
import nevimaLogoPath from "@assets/nevima-logo_1779888095803.png";

const PORTFOLIO = [
  {
    name: "Bluepeak Energy",
    logo: bluepeakLogoPath,
    logoBg: "transparent",
    sector: "Energy Asset Management",
    description: "Bluepeak is a European energy company helping commercial real estate owners and developers navigate the full complexity of energy; from strategy and infrastructure setup to ongoing asset management. Kallas backs Bluepeak's mission to turn limited grid capacity and volatile energy prices into a lasting competitive advantage.",
    website: "https://bluepeak.energy",
    stealth: false,
  },
  {
    name: "Nevima",
    logo: nevimaLogoPath,
    logoBg: "#FFFFFF",
    sector: "Materials Wholesale",
    description: "Nevima has supplied and developed industrial felt solutions since 1927. Specialising in sound insulation, acoustic absorption, floating floors, and technical felt for construction and design, Nevima combines nearly a century of materials expertise with high quality and a focus on sustainable innovation. Kallas backs their mission of making construction and technical solutions more durable, insulated and soundproof, increasing durability.",
    website: "https://nevima.nl",
    stealth: false,
  },
  {
    name: "Undisclosed",
    logo: null,
    logoBg: "#EFF5FD",
    sector: "Fintech / GPU Infrastructure",
    description: "A European venture operating at the intersection of institutional financial markets and high-performance compute. Building marketplace infrastructure for GPU capacity, currently in stealth, and next-generation financial settlement rails.",
    website: null,
    stealth: true,
  },
];

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="container max-w-6xl mx-auto px-6 py-16">
        <div className="frosted-tile px-8 py-16">
        <header className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-navy">Select Investments</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We back category-defining companies building the infrastructure of a stronger, more independent Europe.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={company.website || "#"}
                target={company.website ? "_blank" : undefined}
                rel={company.website ? "noopener noreferrer" : undefined}
                className={`block h-full bg-white border border-[#C8D5E3] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group ${!company.website ? "cursor-default" : ""}`}
              >
                <div className="absolute inset-y-0 left-0 w-0 bg-[#2575E8] transition-all duration-300 group-hover:w-1" />

                <div className="p-8 flex flex-col h-full">
                  <div
                    className="w-full h-[128px] rounded flex items-center justify-center mb-8 border border-[#C8D5E3]/50"
                    style={{ backgroundColor: company.logoBg }}
                  >
                    {company.stealth ? (
                      <div className="flex flex-col items-center gap-2 text-[#2575E8]/40">
                        <Lock size={32} strokeWidth={1.5} />
                        <span className="text-xs uppercase tracking-widest font-medium">Stealth</span>
                      </div>
                    ) : (
                      <img
                        src={company.logo!}
                        alt={`${company.name} logo`}
                        className="max-w-[240px] max-h-[80px] object-contain"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-serif text-navy ${company.stealth ? "italic text-navy/50" : ""}`}>
                      {company.name}
                    </h3>
                    {company.website && <ArrowUpRight className="text-[#C8D5E3] group-hover:text-[#2575E8] transition-colors" />}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#2575E8] font-medium">
                      {company.sector}
                    </span>
                  </div>

                  <hr className="border-[#C8D5E3] mb-6" />

                  <p className="text-muted-foreground leading-relaxed flex-grow text-sm">
                    {company.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </PageTransition>
  );
}
