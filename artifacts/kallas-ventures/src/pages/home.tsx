import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import kajaPath from "@assets/kaja_1779890191218.png";

export default function Home() {
  return (
    <PageTransition>
      <div>

        {/* Hero — full-bleed over the wave backdrop, no tile */}
        <div className="relative min-h-screen overflow-hidden flex items-center -mt-32">
          <div className="container max-w-6xl mx-auto px-6 relative z-10 pt-48 pb-20">
            {/* Text block — scrim is a gradient behind this wrapper only */}
            <div className="relative inline-block max-w-3xl">
              <div
                className="absolute -inset-x-6 -inset-y-8 pointer-events-none rounded-xl"
                style={{
                  background: "linear-gradient(to right, rgba(6,14,46,0.68) 0%, rgba(6,14,46,0.50) 60%, rgba(6,14,46,0) 100%)",
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-8 max-w-4xl" style={{ color: "#e8eef8" }}>
                  We back the power <br />
                  <span className="italic" style={{ color: "#2575E8" }}>of European currents.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-12" style={{ color: "#C8D5E3" }}>Europe deserves to be stronger, more sovereign, and self-reliant. The companies we back are proof that it can be. We invest in energy, technology, materials, defence and financial innovation: the sectors that will define European independence for generations to come.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats + Thesis — frosted-glass tile */}
        <div className="container max-w-6xl mx-auto pr-6 pb-16">
          <div className="frosted-tile px-8 pt-2 pb-16 mt-[-2rem] relative z-10">
          <section className="py-20 border-t border-[#C8D5E3]/60 mt-[20px] mb-[20px]">
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
          <section className="py-24 border-t border-[#C8D5E3] mt-4">
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
                <p>
                  We create and scale businesses. We work with founders and build winning teams, bringing not just capital but the hands-on expertise to take it to the next level. Our background spans extensive experience in the (renewable) energy assets and finance, we know what it takes to grow a company from idea to industry leader.
                </p>
                <p>
                  When we back a founder, we back them completely. We sit alongside them through every stage, helping structure the business, sharpen the team, attracting capital and accelerate growth across Europe. Capital is just the starting point, expertise is what sets us apart.
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
