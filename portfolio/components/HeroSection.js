'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { profileData } from '@/lib/data';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            {/* Animated background orbs */}
            <div style={{
                position: 'absolute', top: '20%', left: '10%',
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(0,255,204,0.06) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', right: '5%',
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(255,0,170,0.06) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            {/* Content */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            >
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <span className="hero-badge-dot" />
                    Available for Opportunities
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    {profileData.name}
                </motion.h1>

                <motion.div
                    className="hero-typewriter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <TypeAnimation
                        sequence={profileData.roles.flatMap(role => [role, 2000])}
                        speed={50}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </motion.div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {profileData.summary}
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                >
                    <a href="#projects" className="btn-primary">
                        🚀 View Projects
                    </a>
                    <a href="#contact" className="btn-outline">
                        📬 Contact Me
                    </a>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {[
                        { value: '7.89', label: 'CPI' },
                        { value: '200+', label: 'DSA Solved' },
                        { value: '15+', label: 'Projects' },
                        { value: '1', label: 'Paper Published' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: 'Orbitron, monospace',
                                fontSize: '1.4rem',
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>{stat.value}</div>
                            <div style={{
                                fontSize: '0.7rem',
                                color: 'var(--text-secondary)',
                                fontFamily: 'Rajdhani, sans-serif',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                            }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Avatar */}
            <motion.div
                className="hero-avatar-container"
                initial={{ opacity: 0, x: 60, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
                <div className="avatar-glow-ring-2" />
                <div className="avatar-glow-ring" />
                <div className="avatar-hexagon-bg" />

                {/* Orbit particles */}
                {[0, 120, 240].map((deg, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: i === 0 ? 'var(--primary)' : i === 1 ? 'var(--secondary)' : '#a78bfa',
                            boxShadow: `0 0 10px ${i === 0 ? 'var(--primary)' : i === 1 ? 'var(--secondary)' : '#a78bfa'}`,
                        }}
                        animate={{
                            rotate: [deg, deg + 360],
                            x: [Math.cos((deg * Math.PI) / 180) * 160, Math.cos(((deg + 360) * Math.PI) / 180) * 160],
                            y: [Math.sin((deg * Math.PI) / 180) * 160, Math.sin(((deg + 360) * Math.PI) / 180) * 160],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}

                <div className="avatar-img-wrapper">
                    {/* Using the avatar image provided - geometric anime style */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #1a0033 0%, #0a0a2e 50%, #001a1a 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Anime-style avatar SVG */}
                        <AvatarSVG />
                    </div>
                </div>

                {/* Floating tech tags */}
                {[
                    { label: 'AI/ML', top: '8%', right: '-10%', color: 'var(--primary)' },
                    { label: 'Python', bottom: '25%', left: '-12%', color: 'var(--secondary)' },
                    { label: 'Research', top: '35%', right: '-15%', color: '#a78bfa' },
                ].map((tag, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: tag.top,
                            bottom: tag.bottom,
                            left: tag.left,
                            right: tag.right,
                            padding: '0.4rem 0.9rem',
                            background: 'rgba(3,3,10,0.9)',
                            border: `1px solid ${tag.color}`,
                            borderRadius: '100px',
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '0.65rem',
                            color: tag.color,
                            boxShadow: `0 0 15px ${tag.color}50`,
                            letterSpacing: '1px',
                            zIndex: 10,
                        }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 1 }}
                    >
                        {tag.label}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

function AvatarSVG() {
    return (
        <svg viewBox="0 0 200 220" width="200" height="220" style={{ position: 'relative', zIndex: 2 }}>
            {/* Glow effect */}
            <defs>
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#00ffcc" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="skinGrad" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#d4956a" />
                    <stop offset="100%" stopColor="#b8784e" />
                </radialGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Background glow */}
            <ellipse cx="100" cy="130" rx="90" ry="90" fill="url(#bgGlow)" />

            {/* Dark hair - long flowing */}
            <ellipse cx="100" cy="75" rx="48" ry="52" fill="#1a0a2e" />
            {/* Hair sides */}
            <path d="M52 80 Q40 120 45 160 Q50 155 55 150 Q58 120 60 100" fill="#1a0a2e" />
            <path d="M148 80 Q160 120 155 160 Q150 155 145 150 Q142 120 140 100" fill="#1a0a2e" />
            {/* Hair top highlight */}
            <path d="M70 40 Q100 30 130 40 Q120 35 100 33 Q80 35 70 40" fill="#2d1a52" opacity="0.5" />

            {/* Face */}
            <ellipse cx="100" cy="95" rx="38" ry="42" fill="url(#skinGrad)" />

            {/* Anime-style eyes */}
            {/* Left eye */}
            <ellipse cx="84" cy="88" rx="10" ry="8" fill="#0a0a1e" />
            <ellipse cx="84" cy="88" rx="7" ry="6" fill="#1a3a6e" />
            <ellipse cx="84" cy="88" rx="4" ry="4" fill="#0d1a4e" />
            <circle cx="84" cy="88" r="2" fill="#00ffcc" opacity="0.9" />
            <circle cx="86.5" cy="85.5" r="1.5" fill="white" opacity="0.8" />
            {/* Glasses left */}
            <rect x="73" y="81" width="22" height="14" rx="4" fill="none" stroke="#00ffcc" strokeWidth="1.5" opacity="0.9" />

            {/* Right eye */}
            <ellipse cx="116" cy="88" rx="10" ry="8" fill="#0a0a1e" />
            <ellipse cx="116" cy="88" rx="7" ry="6" fill="#1a3a6e" />
            <ellipse cx="116" cy="88" rx="4" ry="4" fill="#0d1a4e" />
            <circle cx="116" cy="88" r="2" fill="#00ffcc" opacity="0.9" />
            <circle cx="118.5" cy="85.5" r="1.5" fill="white" opacity="0.8" />
            {/* Glasses right */}
            <rect x="105" y="81" width="22" height="14" rx="4" fill="none" stroke="#00ffcc" strokeWidth="1.5" opacity="0.9" />
            {/* Glasses bridge */}
            <line x1="95" y1="88" x2="105" y2="88" stroke="#00ffcc" strokeWidth="1.5" opacity="0.9" />

            {/* Eyebrows */}
            <path d="M75 79 Q84 75 93 79" fill="none" stroke="#2d1040" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M107 79 Q116 75 125 79" fill="none" stroke="#2d1040" strokeWidth="2.5" strokeLinecap="round" />

            {/* Nose */}
            <path d="M99 97 Q100 102 101 97" fill="none" stroke="#c4805c" strokeWidth="1" strokeLinecap="round" />

            {/* Mouth - small smile */}
            <path d="M92 107 Q100 112 108 107" fill="none" stroke="#e85d8a" strokeWidth="2" strokeLinecap="round" />

            {/* Blush */}
            <ellipse cx="78" cy="102" rx="10" ry="5" fill="#ff8fb1" opacity="0.3" />
            <ellipse cx="122" cy="102" rx="10" ry="5" fill="#ff8fb1" opacity="0.3" />

            {/* Neck */}
            <rect x="90" y="133" width="20" height="18" rx="4" fill="#c08870" />

            {/* Jacket/top - tech style */}
            <path d="M55 145 Q60 138 100 135 Q140 138 145 145 L155 180 Q150 185 100 185 Q50 185 45 180 Z" fill="#0d2040" />
            {/* Jacket collar detail */}
            <path d="M88 135 Q100 143 112 135" fill="none" stroke="#00ffcc" strokeWidth="1" opacity="0.8" />
            {/* Tech circuit lines on jacket */}
            <line x1="65" y1="160" x2="85" y2="160" stroke="#00ffcc" strokeWidth="0.5" opacity="0.5" />
            <line x1="65" y1="165" x2="80" y2="165" stroke="#00ffcc" strokeWidth="0.5" opacity="0.5" />
            <circle cx="65" cy="160" r="2" fill="#00ffcc" opacity="0.7" />
            <line x1="115" y1="160" x2="135" y2="160" stroke="#ff00aa" strokeWidth="0.5" opacity="0.5" />
            <circle cx="135" cy="160" r="2" fill="#ff00aa" opacity="0.7" />

            {/* Cyber pendant */}
            <circle cx="100" cy="150" r="5" fill="none" stroke="#00ffcc" strokeWidth="1" opacity="0.8" />
            <circle cx="100" cy="150" r="2" fill="#00ffcc" opacity="0.9" />

            {/* Glowing eye effect */}
            <ellipse cx="84" cy="88" rx="11" ry="9" fill="none" stroke="#00ffcc" strokeWidth="0.5" opacity="0.4" filter="url(#glow)" />
            <ellipse cx="116" cy="88" rx="11" ry="9" fill="none" stroke="#00ffcc" strokeWidth="0.5" opacity="0.4" filter="url(#glow)" />
        </svg>
    );
}
