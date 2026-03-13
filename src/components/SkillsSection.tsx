import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Wrench, Database, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "C/C++", "C#", "SQL"],
  },
  {
    title: "Frameworks & Technologies",
    icon: Layers,
    skills: ["React", "Arduino", "Unity"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "VS Code", "Cursor", "Embarcadero"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Supabase", "REST APIs", "Database Design"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    skills: ["Debugging", "API Integration", "Responsive Design", "Version Control"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-12">
            <span className="section-number">02.</span> Technical Skills
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={20} className="text-primary" />
                  <h3 className="text-foreground font-semibold text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="text-primary text-xs">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
