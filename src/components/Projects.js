// Projects.js
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./constants";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import TiltedCard from "./TiltedCard";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      opacity: 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-[1250px] mx-auto px-6 lg:px-12 relative z-10 w-full mb-20 mt-10">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-16 lg:mb-24"
      >
        <p className="text-[32px] md:text-[45px] font-bold tracking-tight mb-2" style={{ color: "var(--accent)" }}>
          Projects
        </p>
        <h2 className="text-xl md:text-2xl font-medium tracking-wide mb-4 text-gradient max-w-max">
          Featured Engineering Work
        </h2>
        <p className="text-base md:text-lg max-w-2xl mt-4" style={{ color: "var(--text-secondary)" }}>
          A selection of major projects I've built — from secure full-stack hubs to algorithmic problem solvers.
        </p>
      </motion.div>

      <div className="flex flex-col gap-28 lg:gap-36">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div 
              key={project.id}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image Section */}
              <div
                className={`w-full relative aspect-[16/10] ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <TiltedCard
                  imageSrc={project.image}
                  altText={`${project.title} screenshot`}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                />
              </div>

              {/* Text Section */}
              <div className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                {project.category && (
                  <div className="mb-4">
                    <span 
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide"
                      style={{ border: "1px solid var(--accent)", color: "var(--accent)", background: "var(--accent-glow)" }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                
                {project.date && (
                  <div className="flex items-center gap-2 text-sm font-mono mb-6" style={{ color: "var(--accent)" }}>
                    <FaCalendarAlt size={14} /> {project.date}
                  </div>
                )}
                
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
                      style={{ background: "rgba(255,255,255,0.03)", color: "var(--accent)", border: "1px solid var(--border-subtle)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl === "#" ? undefined : project.liveUrl}
                      target={project.liveUrl === "#" ? undefined : "_blank"}
                      rel={project.liveUrl === "#" ? undefined : "noopener noreferrer"}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all shadow-lg ${
                        project.liveUrl === "#" ? "px-4 py-3.5" : "px-6 py-3.5"
                      }`}
                      style={{
                        background: project.liveUrl === "#" ? "rgba(255,255,255,0.05)" : "var(--accent)",
                        color: project.liveUrl === "#" ? "var(--accent)" : "var(--bg-primary)",
                        border: project.liveUrl === "#" ? "1px solid var(--border-subtle)" : "none",
                        cursor: project.liveUrl === "#" ? "default" : "pointer",
                      }}
                      whileHover={project.liveUrl === "#" ? {} : { scale: 1.05, boxShadow: "0 4px 25px var(--accent-glow)" }}
                      whileTap={project.liveUrl === "#" ? {} : { scale: 0.95 }}
                      title={project.liveUrl === "#" ? "Live Demo Coming Soon" : "View Live App"}
                    >
                      <FaExternalLinkAlt size={16} />
                      {project.liveUrl !== "#" && "Live Demo"}
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all backdrop-blur-sm"
                      style={{
                        border: "2px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        background: "transparent",
                      }}
                      whileHover={{ scale: 1.05, borderColor: "var(--accent)", color: "var(--accent)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} /> Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
