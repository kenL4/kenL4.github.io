'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showContactOverlay, setShowContactOverlay] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setShowContactOverlay(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContent}`}>
                <Link href="/" className={styles.logo}>
                    Ken Zhiyi Lin
                </Link>

                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/kenL4" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/ken-z-lin" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <Linkedin size={20} />
                    </a>
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="View CV">
                        <FileText size={20} />
                    </a>
                    <div style={{ position: 'relative' }} ref={contactRef}>
                        <button
                            onClick={() => setShowContactOverlay(!showContactOverlay)}
                            className={styles.contactButton}
                            aria-label="Show contact info"
                        >
                            <Mail size={20} />
                        </button>

                        {showContactOverlay && (
                            <div className={styles.contactOverlay}>
                                <span className={styles.contactText}>Contact me at:</span>
                                <a href="mailto:hello@kenzhiyilin.com" className={styles.emailLink}>
                                    hello@kenzhiyilin.com
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
