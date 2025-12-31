'use client';

import { useState } from 'react';
import { Github, Linkedin, FileText, Copy, Check } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'hello@kenzhiyilin.com';

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <h2 className={styles.title}>Get In Touch</h2>

                <div className={styles.emailContainer}>
                    <span className={styles.emailText}>{email}</span>
                    <button
                        onClick={handleCopy}
                        className={styles.copyButton}
                        aria-label="Copy email to clipboard"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        <span className={styles.copyLabel}>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                </div>

                <div className={styles.socialLinks}>
                    <a
                        href="https://github.com/kenL4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <Github size={28} />
                        <span className={styles.socialLabel}>GitHub</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/ken-z-lin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={28} />
                        <span className={styles.socialLabel}>LinkedIn</span>
                    </a>

                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="CV"
                    >
                        <FileText size={28} />
                        <span className={styles.socialLabel}>CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
