'use client';

import styles from './CodeHelix.module.css';

const codeTokens = [
    'const', 'return', 'async', 'await', '=>', 'import',
    'export', 'function', 'class', 'type', 'null', 'let',
];

function HelixColumn({ side }: { side: 'left' | 'right' }) {
    return (
        <div className={`${styles.column} ${styles[side]}`}>
            <div className={`${styles.strand} ${styles.strandA}`}>
                {codeTokens.map((token, i) => (
                    <span key={`a-${i}`} className={styles.token} style={{ animationDelay: `${i * -2.5}s` }}>
                        {token}
                    </span>
                ))}
            </div>
            <div className={`${styles.strand} ${styles.strandB}`}>
                {codeTokens.map((token, i) => (
                    <span key={`b-${i}`} className={styles.token} style={{ animationDelay: `${i * -2.5 + 1.25}s` }}>
                        {token}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function CodeHelix() {
    return (
        <div className={styles.wrapper} aria-hidden="true">
            <HelixColumn side="left" />
            <HelixColumn side="right" />
        </div>
    );
}
