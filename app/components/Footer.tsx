import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} Ken Zhiyi Lin.
                </p>
            </div>
        </footer>
    );
}
