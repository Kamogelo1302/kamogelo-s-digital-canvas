import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "HR Management System",
    description:
      "Internal web application for managing employee records and HR processes. Includes employee dashboards, database interactions, and administrative management features.",
    tech: ["JavaScript", "React", "SQL", "REST APIs"],
  },
  {
    title: "Asset Management System",
    description:
      "System used to track company devices and employee borrowing requests. Role-based access system for employees and supervisors.",
    tech: ["JavaScript", "React", "SQL", "Supabase"],
  },
  {
    title: "Task Management Web App",
    description:
      "Web application that allows users to manage and organize tasks and projects. Users can create, update, delete, and categorize tasks.",
    tech: ["React", "Database Integration"],
  },
  {
    title: "Smart Irrigation System (IoT)",
    description:
      "IoT-based irrigation system using ESP32 and a soil moisture sensor. Automatically activates a water pump when soil moisture is low. Sends real-time data through WiFi to a cloud database.",
    tech: ["ESP32", "C/C++", "IoT", "Cloud Database"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-12">
            <span className="section-number">04.</span> Projects
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder size={36} className="text-primary" />
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
