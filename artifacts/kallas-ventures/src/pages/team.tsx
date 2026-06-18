import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import hugoPath from "@assets/image_1779889771909.png";
import johannesPath from "@assets/Johannes_1779888053562.jpg";
import coenPath from "@assets/image_1779890513040.png";

const TEAM = [
  {
    name: "Hugo Willink",
    title: "Partner",
    bio: "Hugo is a former board member and managing director of Sunrock Germany. He brings extensive experience in energy and project management across Europe. Hugo co-founded Kallas to help founders navigate complex transactions internationally.",
    image: hugoPath,
  },
  {
    name: "Johannes Duijzer",
    title: "Partner",
    bio: "As co-founder and CEO of Sunrock, Johannes built one of Europe's leading renewable energy companies from the ground up. His background spans energy, finance, and venture (STECC Ventures, Return). He founded Kallas to bring that operator's lens to the next generation of founders.",
    image: johannesPath,
  },
  {
    name: "Coen Zijlstra",
    title: "Associate",
    bio: "Coen brings a background in investment banking (Van Lanschot Kempen) and fintech (Bunq) to his work at Kallas, where he focuses on portfolio operations and venture development.",
    image: coenPath,
  },
];

export default function Team() {
  return (
    <PageTransition>
      <div className="container max-w-6xl mx-auto px-6 py-16">
        <div className="frosted-tile px-8 py-16">
        <header className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-navy">The team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">A partnership built on operational excellence and investment experience. We work alongside our founders as dedicated strategic partners.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted border border-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                />
              </div>
              <h3 className="text-2xl font-serif text-navy mb-1">{member.name}</h3>
              <p className="text-blue text-sm uppercase tracking-wider mb-4 font-medium">{member.title}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </PageTransition>
  );
}