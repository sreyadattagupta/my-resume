'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { profileData } from '@/lib/data';

function CounterNumber({ target, suffix = '', inView }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const numericTarget = parseInt(target.replace(/\D/g, ''));
        if (!numericTarget) return;

        let start = 0;
        const duration = 2000;
        const step = numericTarget / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= numericTarget) {
                setValue(numericTarget);
                clearInterval(timer);
            } else {
                setValue(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, target]);

    const hasPlus = target.includes('+');
    return (
        <span>{value}{hasPlus ? '+' : ''}{suffix}</span>
    );
}

export default function ContributionsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const contributions = [
        {
            count: '15',
            plus: true,
            label: 'GitHub Repositories',
            icon: '🗂️',
            desc: 'Public repositories spanning AI/ML research, full-stack apps, and tooling.',
            color: 'var(--primary)',
        },
        {
            count: '200',
            plus: true,
            label: 'DSA Problems Solved',
            icon: '🧩',
            desc: 'LeetCode, GFG, and competitive platforms — consistently sharpening algorithmic thinking.',
            color: 'var(--secondary)',
        },
        {
            count: '3',
            plus: false,
            label: 'Open Source Contributions',
            icon: '🌍',
            desc: 'Forked and contributed to agent development frameworks and academic codebases.',
            color: '#a78bfa',
        },
        {
            count: '1',
            plus: false,
            label: 'Research Paper',
            icon: '📜',
            desc: 'Authored and published an impactful paper on Parkinson\'s disease genomic analysis.',
            color: '#60a5fa',
        },
        {
            count: '5',
            plus: true,
            label: 'Deployed Live Projects',
            icon: '🚀',
            desc: 'Projects actively deployed on Vercel — todo, attendance, games, landing pages, and more.',
            color: 'var(--primary)',
        },
        {
            count: '2',
            plus: false,
            label: 'Cloud Certifications',
            icon: '☁️',
            desc: 'Google Cloud Foundations badges earned — Data/ML/AI and Networking/Security.',
            color: 'var(--secondary)',
        },
    ];

    return (
        <section id="contributions" ref={ref} style={{ position: 'relative' }}>
            {/* Background accent */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(123,0,255,0.03) 0%, transparent 50%, rgba(0,255,204,0.03) 100%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">// chapter_03</span>
                    <h2 className="section-title">Contributions</h2>
                    <div className="section-divider" />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {contributions.map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, borderColor: item.color }}
                            style={{ padding: '1.8rem', textAlign: 'center' }}
                        >
                            <motion.div
                                style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                            >
                                {item.icon}
                            </motion.div>

                            <div style={{
                                fontFamily: 'Orbitron, monospace',
                                fontSize: '2.5rem',
                                fontWeight: 900,
                                color: item.color,
                                textShadow: `0 0 20px ${item.color}60`,
                                marginBottom: '0.3rem',
                            }}>
                                <CounterNumber target={`${item.count}${item.plus ? '+' : ''}`} inView={inView} />
                            </div>

                            <div style={{
                                fontFamily: 'Rajdhani, sans-serif',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '0.6rem',
                            }}>
                                {item.label}
                            </div>

                            <p style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                            }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Activity Bar */}
                <motion.div
                    className="glass-card"
                    style={{ marginTop: '2rem', padding: '2rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '0.5rem' }}>◈ GitHub Profile</span>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', maxWidth: 500 }}>
                                Actively contributing to open source and personal projects. Check out the full project list below or visit the GitHub profile directly.
                            </p>
                        </div>
                        <a
                            href="https://github.com/sreyadattagupta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            🐙 Visit GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
