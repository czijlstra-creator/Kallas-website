import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import kajaPath from "@assets/kaja_1779890191218.png";

export default function Firm() {
  return (
    <PageTransition>
      <div>
        {/* Stats + Thesis — frosted-glass tile */}
        <div className="container max-w-6xl mx-auto px-6 py-16">
          <div className="frosted-tile px-8 pt-8 pb-12 relative z-10">
            <section className="py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-[#C8D5E3]/70 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="pt-8 md:pt-0 md:px-8"
                >
                  <div className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Projects Live</div>
                  <div className="text-5xl font-serif text-[#2575E8]">3</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="pt-8 md:pt-0 md:px-8"
                >
                  <div className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Founded</div>
                  <div className="text-5xl font-serif text-[#0E1B4D]">2025</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="pt-8 md:pt-0 md:px-8"
                >
                  <div className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Focus</div>
                  <div className="text-5xl font-serif text-[#0E1B4D]">Europe</div>
                </motion.div>
              </div>
            </section>

            {/* Thesis */}
            <section className="py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1"
                >
                  <h2 className="text-3xl font-serif text-[#0E1B4D] mb-6">Our Thesis</h2>
                  <div className="h-[3px] w-10 bg-[#2575E8]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="col-span-2 text-muted-foreground text-lg leading-relaxed space-y-6"
                >
                  <p>We create and scale businesses. Working alongside founders from day one, we bring not just capital but hands-on expertise. We help build teams, structuring growth, and navigating the sectors we know deeply: energy, AI, materials, and financial innovation.</p>
                  <p>
                    When we back a founder, we're in it completely. We help shape the business, sharpen the team, attract follow-on capital, and accelerate expansion across Europe. Capital is the starting point, operational depth and long term relations set us apart.
                  </p>
                </motion.div>
              </div>

              {/* Kaja Kallas quote */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#EFF5FD] rounded-xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-56 shrink-0">
                    <img
                      src={kajaPath}
                      alt="Kaja Kallas"
                      className="w-full h-56 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-10 py-10 md:py-12">
                    <div className="text-[#FFD700] text-5xl font-serif leading-none mb-4 select-none">"</div>
                    <blockquote className="text-xl md:text-2xl font-serif text-[#0E1B4D] leading-snug mb-6 italic">
                      We all know what to do. And we know that our aim is a strong and independent Europe.
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-[2px] w-8 bg-[#2575E8]" />
                      <p className="text-sm font-medium text-[#2575E8] uppercase tracking-widest">
                        Kaja Kallas, EU High Representative for Foreign Affairs
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground/60 mt-4 italic">
                      * Kaja Kallas is not affiliated with Kallas Ventures.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
