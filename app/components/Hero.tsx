'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.bgGlow} />

            <motion.div
                className={`container ${styles.content}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.greeting}>Hi, I&apos;m Ken!</span>

                <h1 className={styles.title}>
                    Obsessed with <span className="text-gradient">Pixels</span> & <br />
                    <span className="text-gradient">Performance</span>.
                </h1>

                <p className={styles.subtitle}>
                    I&apos;m a software engineer who loves digging into computer architecture and awesome computer graphics.
                    Whether it&apos;s writing a GPU simulator or a game engine, I love building systems that enable people to experience cool stuff!
                </p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Link href="#experience" className={styles.primaryBtn}>
                        View Work
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
