'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '@/lib/data';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">// chapter_01</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="about-grid">
                    {/* Text side */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>
                                ◈ Who Am I
                            </span>
                            <p className="about-text">
                                I'm <span className="about-highlight">Sreya Datta Gupta</span>, a 3rd-year B.Tech Computer Science student
                                specializing in <span className="about-highlight">Artificial Intelligence & Machine Learning</span> at
                                Adamas University (7.89 CPI). My passion for technology isn't just academic — it's a{' '}
                                <span className="about-highlight">burning obsession</span>.
                            </p>
                            <br />
                            <p className="about-text">
                                From engineering cross-platform system diagnostics tools at ETDC to achieving{' '}
                                <span className="about-highlight">95.54% accuracy</span> in Parkinson's disease classification using
                                genomic data, every project I undertake reflects my{' '}
                                <span className="about-highlight">relentless drive to build meaningful solutions</span>. I thrive at
                                the intersection of research, engineering, and real-world impact.
                            </p>
                            <br />
                            <p className="about-text">
                                My enthusiasm for work isn't performative — it's{' '}
                                <span className="about-highlight">the fuel that makes me code through the night</span>, dive deep into
                                research papers, and constantly push myself to learn more. I believe technology should empower people,
                                and I'm committed to making that happen.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="glass-card">
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>
                                ◈ Education Timeline
                            </span>
                            {profileData.education.map((edu, i) => (
                                <div key={i} className="experience-card">
                                    <div className="exp-timeline-line" />
                                    <div className="exp-timeline-dot" />
                                    <div style={{ paddingBottom: i < profileData.education.length - 1 ? '1.5rem' : 0 }}>
                                        <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.2rem' }}>
                                            {edu.degree}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                            {edu.institution}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', gap: '1rem' }}>
                                            <span>📅 {edu.period}</span>
                                            <span style={{ color: 'var(--primary)' }}>⭐ {edu.score}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Info + Skills side */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>
                                ◈ Quick Info
                            </span>
                            {[
                                { label: 'Name', value: 'Sreya Datta Gupta', icon: '👤' },
                                { label: 'Degree', value: 'B.Tech CSE (AI/ML)', icon: '🎓' },
                                { label: 'University', value: 'Adamas University', icon: '🏛️' },
                                { label: 'Batch', value: '2023 – 2027', icon: '📅' },
                                { label: 'CPI', value: '7.89 / 10', icon: '⭐' },
                                { label: 'Location', value: 'West Bengal, India', icon: '📍' },
                                { label: 'Status', value: 'Open to work! ✅', icon: '💼' },
                            ].map((item, i) => (
                                <div key={i} className="info-item">
                                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                                    <span className="info-label">{item.label}</span>
                                    <span className="info-value">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Experience */}
                        <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>
                                ◈ Experience
                            </span>
                            {profileData.experience.map((exp, i) => (
                                <div key={i}>
                                    <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.3rem' }}>
                                        {exp.role}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                        {exp.company}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', marginBottom: '0.8rem' }}>
                                        {exp.period}
                                    </div>
                                    <ul style={{ paddingLeft: '1rem', listStyle: 'none' }}>
                                        {exp.points.slice(0, 3).map((pt, j) => (
                                            <li key={j} style={{
                                                fontSize: '0.8rem',
                                                color: 'var(--text-secondary)',
                                                marginBottom: '0.4rem',
                                                lineHeight: 1.6,
                                                paddingLeft: '1rem',
                                                position: 'relative',
                                            }}>
                                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>▸</span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="glass-card">
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>
                                ◈ Tech Stack
                            </span>
                            <div style={{ marginBottom: '0.8rem' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.5rem', fontFamily: 'Rajdhani, sans-serif', textTransform: 'uppercase' }}>Languages</div>
                                <div className="skills-grid">
                                    {profileData.skills.languages.map(s => <span key={s} className="skill-tag">{s}</span>)}
                                </div>
                            </div>
                            <div style={{ marginBottom: '0.8rem' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.5rem', fontFamily: 'Rajdhani, sans-serif', textTransform: 'uppercase' }}>Frameworks</div>
                                <div className="skills-grid">
                                    {profileData.skills.frameworks.map(s => <span key={s} className="skill-tag secondary">{s}</span>)}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.5rem', fontFamily: 'Rajdhani, sans-serif', textTransform: 'uppercase' }}>Cloud & Tools</div>
                                <div className="skills-grid">
                                    {profileData.skills.cloud.map(s => <span key={s} className="skill-tag accent">{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
