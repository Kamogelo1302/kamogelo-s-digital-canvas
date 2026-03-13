import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-12">
            <span className="section-number">03.</span> Experience
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-foreground font-semibold text-lg">
                  Junior Software Developer
                </h3>
                <p className="text-primary font-mono text-sm">X Spark</p>
              </div>
              <div className="flex flex-col gap-1 mt-2 md:mt-0 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> July 2025 – Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Midrand, Gauteng
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Contributed to the development and maintenance of web applications using JavaScript and modern frontend technologies.",
                "Implemented UI components and assisted with REST API integrations.",
                "Debugged application issues and improved system performance through testing.",
                "Collaborated with developers using Git-based workflows.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
