'use client';

import styles from './CodeHelix.module.css';

const codeTokens = [
    'const', 'return', 'async', 'await', '=>', 'import',
    'export', 'function', 'class', 'type', 'null', 'let',
];

const mobileTokens = [
    { token: 'async', left: '10%', delay: 0 },
    { token: '=>', left: '30%', delay: -4 },
    { token: 'const', left: '55%', delay: -8 },
    { token: 'return', left: '75%', delay: -12 },
    { token: 'type', left: '20%', delay: -16 },
    { token: 'let', left: '85%', delay: -20 },
    { token: 'import', left: '45%', delay: -24 },
    { token: 'null', left: '65%', delay: -28 },
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

function MobileRain() {
    return (
        <div className={styles.mobileRain}>
            {mobileTokens.map((item, i) => (
                <span
                    key={i}
                    className={styles.mobileToken}
                    style={{ left: item.left, animationDelay: `${item.delay}s` }}
                >
                    {item.token}
                </span>
            ))}
        </div>
    );
}

export default function CodeHelix() {
    return (
        <div className={styles.wrapper} aria-hidden="true">
            <HelixColumn side="left" />
            <HelixColumn side="right" />
            <MobileRain />
        </div>
    );
}
