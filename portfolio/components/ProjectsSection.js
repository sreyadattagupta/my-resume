'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { featuredProjects } from '@/lib/data';

const langColors = {
    'Jupyter Notebook': '#f37626',
    'Python': '#3572A5',
    'HTML': '#e34c26',
    'JavaScript': '#f1e05a',
    'Java': '#b07219',
    'Markdown': '#083fa1',
};

const categories = ['All', 'AI/ML', 'Full-Stack', 'Research', 'Creative'];
const categoryMap = {
    'All': () => true,
    'AI/ML': (p) => p.tags.some(t => ['TensorFlow', 'ML', 'CNN', 'LLM', 'LangChain', 'Computer Vision', 'LASSO', 'Bioinformatics', 'Neural Networks', 'XGBoost', 'SHAP', 'RAG', 'NLP', 'AI', 'Agents', 'Framework', 'Video Processing', 'Automation'].includes(t)),
    'Full-Stack': (p) => p.tags.some(t => ['Node.js', 'JWT', 'QR Code', 'CI/CD', 'Vercel', 'WhatsApp API', 'REST API', 'Productivity', 'RBAC', 'Hardware', 'ETDC'].includes(t)),
    'Research': (p) => p.tags.some(t => ['Research', 'Genomics', 'Healthcare', 'Industry', 'Documentation', 'Cloud'].includes(t)),
    'Creative': (p) => p.tags.some(t => ['Game Dev', 'Anime', 'HTML5 Canvas', 'Animation'].includes(t)),
};

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filtered = featuredProjects.filter(categoryMap[activeCategory]);
    const displayed = showAll ? filtered : filtered.slice(0, 6);

    return (
        <section id="projects" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">// chapter_03</span>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-divider" />
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {featuredProjects.length} repositories — AI/ML research · Full-Stack · Creative builds
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                            style={{
                                padding: '0.45rem 1.2rem',
                                background: activeCategory === cat ? 'rgba(0,255,204,0.15)' : 'rgba(255,255,255,0.03)',
                                border: `1px solid ${activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                                borderRadius: '100px',
                                color: activeCategory === cat ? 'var(--primary)' : 'var(--text-secondary)',
                                fontFamily: 'Rajdhani, sans-serif',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {cat === 'All' ? `⚡ ${cat}` : cat === 'AI/ML' ? `🤖 ${cat}` : cat === 'Full-Stack' ? `🌐 ${cat}` : cat === 'Research' ? `🔬 ${cat}` : `🎨 ${cat}`}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="popLayout">
                    <motion.div className="projects-grid" layout>
                        {displayed.map((project, i) => (
                            <motion.div
                                key={project.name}
                                className="glass-card project-card"
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                whileHover={{ y: -6 }}
                                style={{ position: 'relative' }}
                            >
                                {/* Top glow strip on hover */}
                                <div className="project-glow" />

                                {/* Badges row */}
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                                    {project.featured && (
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(255, 0, 170, 0.1)',
                                            border: '1px solid rgba(255, 0, 170, 0.35)',
                                            borderRadius: '100px',
                                            fontSize: '0.65rem',
                                            color: 'var(--secondary)',
                                            fontFamily: 'Orbitron, monospace',
                                            letterSpacing: '0.5px',
                                        }}>
                                            ★ Featured
                                        </span>
                                    )}
                                    {project.badge && (
                                        <span style={{
                                            padding: '0.2rem 0.7rem',
                                            background: 'rgba(0, 255, 204, 0.08)',
                                            border: '1px solid rgba(0, 255, 204, 0.25)',
                                            borderRadius: '100px',
                                            fontSize: '0.65rem',
                                            color: 'var(--primary)',
                                            fontFamily: 'Rajdhani, sans-serif',
                                            fontWeight: 700,
                                            letterSpacing: '0.5px',
                                        }}>
                                            {project.badge}
                                        </span>
                                    )}
                                </div>

                                <div className="project-header">
                                    <h3 className="project-title">{project.name}</h3>
                                    {project.language && (
                                        <span
                                            className="project-lang"
                                            style={{
                                                color: langColors[project.language] || '#a78bfa',
                                                background: `${langColors[project.language] || '#a78bfa'}15`,
                                                borderColor: `${langColors[project.language] || '#a78bfa'}40`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            ● {project.language}
                                        </span>
                                    )}
                                </div>

                                <p className="project-desc">{project.description}</p>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.8rem' }}>
                                    {project.tags.slice(0, 5).map(tag => (
                                        <span key={tag} style={{
                                            padding: '0.15rem 0.6rem',
                                            background: 'rgba(0,255,204,0.05)',
                                            border: '1px solid rgba(0,255,204,0.15)',
                                            borderRadius: '4px',
                                            fontSize: '0.7rem',
                                            color: 'var(--text-secondary)',
                                            fontFamily: 'Rajdhani, sans-serif',
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-footer">
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span className="project-stars">⭐ {project.stars}</span>
                                        <span className="project-stars">🍴 {project.forks}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        {project.homepage && (
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link">
                                                🔗 Live
                                            </a>
                                        )}
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                            ↗ GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Show more/less */}
                {filtered.length > 6 && (
                    <motion.div
                        style={{ textAlign: 'center', marginTop: '2.5rem' }}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="btn-outline"
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ cursor: 'pointer' }}
                        >
                            {showAll
                                ? '▲ Show Less'
                                : `▼ Show All ${filtered.length} Projects`}
                        </motion.button>
                    </motion.div>
                )}

                {/* GitHub CTA */}
                <motion.div
                    className="glass-card"
                    style={{ marginTop: '2.5rem', padding: '1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div>
                        <span className="label-accent" style={{ display: 'block', marginBottom: '0.4rem' }}>◈ See Everything on GitHub</span>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            More experiments, forks, and works-in-progress live on my GitHub profile.
                        </p>
                    </div>
                    <a
                        href="https://github.com/sreyadattagupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        🐙 Visit GitHub Profile
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
