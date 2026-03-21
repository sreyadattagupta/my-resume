'use client';
import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Particle class
        const particles = [];
        const count = 80;

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? '#00ffcc' : '#ff00aa';
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.02 + 0.005;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                const alpha = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba').replace('#00ffcc', `rgba(0,255,204,${alpha})`).replace('#ff00aa', `rgba(255,0,170,${alpha})`);
                ctx.fill();
            }
        }

        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }

        // Shooting stars
        const stars = [];
        class ShootingStar {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height * 0.5;
                this.len = Math.random() * 80 + 40;
                this.speed = Math.random() * 4 + 2;
                this.opacity = 0;
                this.active = Math.random() > 0.97;
                this.angle = Math.PI / 4;
            }
            update() {
                if (!this.active) {
                    if (Math.random() > 0.998) this.active = true;
                    return;
                }
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity += 0.05;
                if (this.opacity > 1) this.opacity = 1;
                if (this.x > canvas.width + 100 || this.y > canvas.height) this.reset();
            }
            draw() {
                if (!this.active) return;
                const grad = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - Math.cos(this.angle) * this.len,
                    this.y - Math.sin(this.angle) * this.len
                );
                grad.addColorStop(0, `rgba(0,255,204,${this.opacity})`);
                grad.addColorStop(1, 'rgba(0,255,204,0)');
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - Math.cos(this.angle) * this.len, this.y - Math.sin(this.angle) * this.len);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }

        for (let i = 0; i < 5; i++) stars.push(new ShootingStar());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            stars.forEach(s => { s.update(); s.draw(); });
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
}
