'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring = ringRef.current;
        let animId;

        const moveCursor = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const animateRing = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
            ring.style.left = `${ringPos.current.x}px`;
            ring.style.top = `${ringPos.current.y}px`;
            animId = requestAnimationFrame(animateRing);
        };

        document.addEventListener('mousemove', moveCursor);
        animId = requestAnimationFrame(animateRing);

        const onHover = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'var(--secondary)';
            ring.style.borderColor = 'var(--secondary)';
            ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
        };
        const onLeave = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'var(--primary)';
            ring.style.borderColor = 'var(--primary)';
            ring.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        const interactables = document.querySelectorAll('a, button, [role="button"]');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', onHover);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
