'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { profileData } from '@/lib/data';

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };

    const contacts = [
        {
            icon: '📧',
            label: 'Email',
            value: profileData.email,
            href: `mailto:${profileData.email}`,
            copyText: profileData.email,
        },
        {
            icon: '📱',
            label: 'Phone',
            value: profileData.phone,
            href: `tel:${profileData.phone}`,
            copyText: profileData.phone,
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'sreyadattagupta',
            href: profileData.github,
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Sreya Datta Gupta',
            href: profileData.linkedin,
        },
        {
            icon: '📍',
            label: 'Location',
            value: profileData.location,
        },
    ];

    return (
        <section id="contact" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">// chapter_05</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="contact-grid">
                    {/* Left: message */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>◈ Let's Collaborate</span>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Whether you have a <span style={{ color: 'var(--primary)' }}>research collaboration</span>, an exciting
                                project opportunity, or just want to talk about AI/ML — my inbox is always open! I'm particularly
                                enthusiastic about work at the intersection of machine learning, genomics, and systems engineering.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                                I respond within <span style={{ color: 'var(--secondary)' }}>24 hours</span> and bring the same
                                energy to every conversation that I bring to my code. ⚡
                            </p>
                        </div>

                        {/* Social links */}
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1rem' }}>◈ Connect Online</span>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {[
                                    { label: 'GitHub', href: profileData.github, icon: '🐙', color: 'var(--primary)' },
                                    { label: 'LinkedIn', href: profileData.linkedin, icon: '💼', color: '#0a66c2' },
                                    { label: 'Email', href: `mailto:${profileData.email}`, icon: '📧', color: 'var(--secondary)' },
                                ].map((soc, i) => (
                                    <motion.a
                                        key={i}
                                        href={soc.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.6rem 1.2rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: `1px solid rgba(255,255,255,0.1)`,
                                            borderRadius: '8px',
                                            color: soc.color,
                                            textDecoration: 'none',
                                            fontFamily: 'Rajdhani, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                        }}
                                        whileHover={{ scale: 1.05, borderColor: soc.color, background: 'rgba(0,255,204,0.05)' }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {soc.icon} {soc.label}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: contact details */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <span className="label-accent" style={{ display: 'block', marginBottom: '1.5rem' }}>◈ Contact Details</span>
                            {contacts.map((contact, i) => (
                                <motion.div
                                    key={i}
                                    className="contact-item"
                                    onClick={() => contact.copyText && copyToClipboard(contact.copyText, contact.label)}
                                    style={{
                                        cursor: contact.copyText ? 'none' : 'default',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="contact-icon-wrap">
                                        <span style={{ fontSize: '1.2rem' }}>{contact.icon}</span>
                                    </div>
                                    <div>
                                        <div className="contact-info-label">{contact.label}</div>
                                        {contact.href ? (
                                            <a
                                                href={contact.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-info-value"
                                                style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                                            >
                                                {copied === contact.label ? '✅ Copied!' : contact.value}
                                            </a>
                                        ) : (
                                            <div className="contact-info-value">
                                                {copied === contact.label ? '✅ Copied!' : contact.value}
                                            </div>
                                        )}
                                    </div>
                                    {contact.copyText && (
                                        <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.7 }}>
                                            {copied === contact.label ? '' : 'click to copy'}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Availability indicator */}
                        <motion.div
                            className="glass-card"
                            style={{ marginTop: '1.5rem', padding: '1.5rem', textAlign: 'center' }}
                            animate={{ boxShadow: ['0 0 0px rgba(0,255,204,0)', '0 0 20px rgba(0,255,204,0.2)', '0 0 0px rgba(0,255,204,0)'] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: 12, height: 12, borderRadius: '50%',
                                    background: 'var(--primary)',
                                    boxShadow: '0 0 10px var(--primary)',
                                    animation: 'pulse 2s infinite',
                                }} />
                                <span style={{
                                    fontFamily: 'Orbitron, monospace',
                                    fontSize: '0.8rem',
                                    color: 'var(--primary)',
                                    letterSpacing: '2px',
                                }}>
                                    OPEN TO OPPORTUNITIES
                                </span>
                            </div>
                            <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                Available for internships, research collaborations & full-time roles
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
