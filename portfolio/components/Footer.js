'use client';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <div style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    SDG.exe
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {['#about', '#achievements', '#projects', '#contact'].map(link => (
                        <a key={link} href={link} style={{
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: 'Rajdhani, sans-serif',
                            fontSize: '0.8rem',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            transition: 'color 0.3s',
                        }}
                            onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.replace('#', '')}
                        </a>
                    ))}
                </div>

                <div style={{
                    letterSpacing: '2px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                }}>
                    © 2026 SREYA DATTA GUPTA · BUILT WITH ⚡ NEXT.JS & FRAMER MOTION
                </div>

                <div style={{
                    width: 200,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                    opacity: 0.4,
                }} />

                <p style={{
                    fontSize: '0.7rem',
                    color: 'rgba(136, 153, 204, 0.5)',
                    maxWidth: 500,
                    textAlign: 'center',
                    lineHeight: 1.8,
                }}>
                    "The ones who are crazy enough to think they can change the world are the ones who do." — Anime logic & Steve Jobs
                </p>
            </div>
        </motion.footer>
    );
}
