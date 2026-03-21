'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
                boxShadow: scrolled ? '0 4px 30px rgba(0,255,204,0.1)' : 'none',
            }}
        >
            <motion.div
                className="navbar-logo"
                whileHover={{ scale: 1.05 }}
            >
                SDG.exe
            </motion.div>

            <ul className="navbar-links">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            onClick={() => setActive(link.href)}
                            style={{ color: active === link.href ? 'var(--primary)' : '' }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <motion.a
                href="mailto:dsreya799@gmail.com"
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.5rem 1.2rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
            >
                ⚡ Hire Me
            </motion.a>
        </motion.nav>
    );
}
