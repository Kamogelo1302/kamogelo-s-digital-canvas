import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-8">
            <span className="section-number">01.</span> About Me
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Systems Engineering student specializing in software development,
              with a strong foundation in building web applications, REST APIs, and IoT systems.
              My journey in tech has been driven by a genuine passion for solving real-world
              problems through clean, efficient code.
            </p>
            <p>
              I enjoy working across the full stack — from crafting responsive user interfaces
              with <span className="text-primary">React</span> to designing robust database
              architectures with <span className="text-primary">Supabase</span> and{" "}
              <span className="text-primary">SQL</span>. I'm particularly interested in
              building scalable software systems that make a tangible impact.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to team
              projects, and continuously sharpening my problem-solving skills to become a
              well-rounded software developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
