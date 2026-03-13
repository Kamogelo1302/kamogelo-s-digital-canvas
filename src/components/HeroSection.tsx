import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src={profilePhoto}
                alt="Kamogelo Mokoena"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2"
            >
              Kamogelo Mokoena.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
            >
              I build things for the web.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 text-muted-foreground text-sm mb-6"
            >
              <MapPin size={16} className="text-primary" />
              <span>Johannesburg, Gauteng, South Africa</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10"
            >
              Aspiring Software Developer with a National Diploma in Computer Systems Engineering
              and hands-on experience building web applications using JavaScript, React, SQL,
              Firebase, and Supabase. Passionate about building reliable software solutions and
              continuously improving development and problem-solving skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Kamogelo1302"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded font-mono text-sm hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kamogelo-mokoena-b87a2835a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded font-mono text-sm hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-primary text-primary-foreground rounded font-mono text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Download size={16} /> Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
