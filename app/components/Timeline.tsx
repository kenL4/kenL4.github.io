'use client';

import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import styles from './Timeline.module.css';

export default function Timeline() {
    return (
        <section id="experience" className={styles.timelineSection}>
            <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className={`container ${styles.timeline}`}>
                {experience.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={styles.item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.marker} />
                        <div className={styles.content}>
                            <h3 className={styles.role}>{item.role}</h3>
                            <div className={styles.company}>{item.company}</div>
                            <span className={styles.period}>{item.period}</span>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
