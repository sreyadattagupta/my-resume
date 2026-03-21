'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '@/lib/data';

export default function AchievementsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="achievements" ref={ref} style={{ background: 'linear-gradient(180deg, transparent, rgba(0,255,204,0.02), transparent)' }}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">// chapter_02</span>
                    <h2 className="section-title">Achievements</h2>
                    <div className="section-divider" />
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 500, margin: '1rem auto 0' }}>
                        Every milestone is a testament to passion-driven work and relentless commitment to excellence.
                    </p>
                </motion.div>

                <div className="achievements-grid">
                    {profileData.achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            className="glass-card achievement-card"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div style={{ position: 'relative' }}>
                                {/* Glow effect on card */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-1.5rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 60,
                                    height: 60,
                                    background: 'radial-gradient(circle, rgba(0,255,204,0.15), transparent)',
                                    borderRadius: '50%',
                                    pointerEvents: 'none',
                                }} />

                                <motion.span
                                    className="achievement-icon"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                >
                                    {ach.icon}
                                </motion.span>

                                <div className="achievement-title">{ach.title}</div>
                                <p className="achievement-desc">{ach.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CGPA bar visualization */}
                <motion.div
                    className="glass-card"
                    style={{ marginTop: '2rem', padding: '2rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <span className="label-accent" style={{ display: 'block', marginBottom: '1.5rem', textAlign: 'center' }}>
                        ◈ Work Areas & Skill Proficiency
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { label: 'Machine Learning & AI', pct: 92 },
                            { label: 'Python & Data Science', pct: 90 },
                            { label: 'Full-Stack Development', pct: 82 },
                            { label: 'Cloud & DevOps', pct: 75 },
                            { label: 'Research & Genomics', pct: 85 },
                            { label: 'DSA & Problem Solving', pct: 80 },
                        ].map((skill, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                                        {skill.label}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'Orbitron, monospace' }}>
                                        {skill.pct}%
                                    </span>
                                </div>
                                <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                                    <motion.div
                                        style={{
                                            height: '100%',
                                            background: `linear-gradient(90deg, var(--primary), var(--secondary))`,
                                            borderRadius: 3,
                                            boxShadow: '0 0 10px rgba(0,255,204,0.4)',
                                        }}
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${skill.pct}%` } : {}}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
