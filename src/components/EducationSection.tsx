import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Software Development (OOP, Algorithms, Data Structures)",
  "Web Development",
  "Database Systems",
  "Embedded Systems and Microcontrollers",
  "PLC Programming and Industrial Automation",
  "Computer Architecture",
  "Electronics and Digital Systems",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-12">
            <span className="section-number">05.</span> Education
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap size={28} className="text-primary mt-1" />
              <div>
                <h3 className="text-foreground font-semibold text-lg">
                  National Diploma in Computer Systems Engineering
                </h3>
                <p className="text-primary font-mono text-sm">
                  Tshwane University of Technology
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Expected Graduation: October 2026
                </p>
              </div>
            </div>

            <h4 className="text-foreground font-medium text-sm mb-3">Relevant Coursework</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {coursework.map((c) => (
                <li key={c} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-primary text-xs">▹</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
