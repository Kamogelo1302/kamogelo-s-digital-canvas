import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";

const GITHUB_URL = "https://github.com/Kamogelo1302";

const projects = [
  {
    title: "HR Management System",
    description:
      "Internal HRMS platform for managing employee records, department information, and HR processes. Includes employee dashboards, database interactions, and administrative management features.",
    tech: ["JavaScript", "React", "SQL", "REST APIs"],
  },
  {
    title: "Asset Management System",
    description:
      "System to track company devices and manage employee borrowing requests. Role-based access for employees and supervisors with asset lifecycle management (Pending → Approved → Returned).",
    tech: ["JavaScript", "React", "SQL", "Supabase"],
  },
  {
    title: "Task Management Web App",
    description:
      "Web application for organizing and tracking personal tasks and projects. Users can create, update, delete, and categorize tasks with project grouping.",
    tech: ["React", "Database Integration"],
  },
  {
    title: "Smart Irrigation System (IoT)",
    description:
      "IoT-based smart irrigation system using ESP32 and soil moisture sensor. Automatically activates a water pump when soil moisture is low and sends real-time data via WiFi to a cloud database.",
    tech: ["ESP32", "Arduino", "IoT", "Supabase"],
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
              <motion.a
                key={project.title}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col cursor-pointer"
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
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
