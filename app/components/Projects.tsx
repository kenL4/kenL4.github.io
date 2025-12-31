'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsSection}>
            <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Featured Projects
            </motion.h2>

            <div className={`container ${styles.grid}`}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                {project.links.demo && project.links.demo !== '#' && (
                                    <a href={project.links.demo} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                                {project.links.code && project.links.code !== '#' && (
                                    <a href={project.links.code} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                                        <Github size={16} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    );
}
