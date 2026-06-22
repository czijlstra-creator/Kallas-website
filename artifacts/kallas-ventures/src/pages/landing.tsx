import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden mt-0 md:-mt-32 flex items-center md:items-end pb-20 pt-16 md:pt-0">
        {/* Glass card — bottom-left anchor */}
        <div className="container max-w-6xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="frosted-tile px-10 py-10 max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.08] mb-6" style={{ color: "#0E1B4D" }}>
              We back the power of{" "}
              <span className="italic" style={{ color: "#2575E8" }}>European currents</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4a5568" }}>Europe must be stronger, more sovereign, and self-reliant. We invest early and stay active; bringing knowledge and conviction to energy, materials and financial innovation. The sectors that will define European independence for generations.</p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
