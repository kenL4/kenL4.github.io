'use client';

import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <h2 className={styles.title}>Get In Touch</h2>

                <div className={styles.content}>
                    <a
                        href="https://github.com/kenL4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                    >
                        <span className={styles.iconWrapper}>
                            <Github size={24} />
                        </span>
                        <span className={styles.linkText}>github.com/kenL4</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/ken-z-lin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                    >
                        <span className={styles.iconWrapper}>
                            <Linkedin size={24} />
                        </span>
                        <span className={styles.linkText}>linkedin.com/in/ken-z-lin</span>
                    </a>

                    <a
                        href="mailto:hello@kenzhiyilin.com"
                        className={styles.linkItem}
                    >
                        <span className={styles.iconWrapper}>
                            <Mail size={24} />
                        </span>
                        <span className={styles.linkText}>hello@kenzhiyilin.com</span>
                    </a>

                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                    >
                        <span className={styles.iconWrapper}>
                            <FileText size={24} />
                        </span>
                        <span className={styles.linkText}>Look at my CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
