import { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, color, velocity, life = 1) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = velocity.x;
    this.vy = velocity.y;
    this.alpha = 1;
    this.life = life;
    this.decay = 0.015 + Math.random() * 0.01;
    this.size = 2 + Math.random() * 2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.04;
    this.vx *= 0.99;
    this.alpha -= this.decay;
    this.size *= 0.98;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Sparkle {
  constructor(w, h) {
    this.reset(w, h, true);
  }
  reset(w, h, initial = false) {
    this.x = Math.random() * w;
    this.y = initial ? Math.random() * h : -10;
    this.size = 1 + Math.random() * 1.5;
    this.speed = 0.2 + Math.random() * 0.4;
    this.alpha = 0.1 + Math.random() * 0.3;
    this.drift = (Math.random() - 0.5) * 0.3;
    this.pulse = Math.random() * Math.PI * 2;
    this.w = w;
    this.h = h;
  }
  update() {
    this.y += this.speed;
    this.x += this.drift;
    this.pulse += 0.02;
    if (this.y > this.h + 10) this.reset(this.w, this.h);
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha * (0.5 + 0.5 * Math.sin(this.pulse));
    ctx.fillStyle = '#c9a96e';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const COLORS = ['#c9a96e', '#e4d5a0', '#f5e6e0', '#ffffff', '#ffcba4', '#722f37'];

function createBurst(x, y, count = 60) {
  const particles = [];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const speed = 2 + Math.random() * 4;
    particles.push(
      new Particle(x, y, color, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      })
    );
  }
  return particles;
}

export default function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let sparkles = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init sparkles
    for (let i = 0; i < 30; i++) {
      sparkles.push(new Sparkle(canvas.width, canvas.height));
    }

    // Initial burst
    const launchInitial = () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const x = canvas.width * (0.2 + Math.random() * 0.6);
          const y = canvas.height * (0.15 + Math.random() * 0.35);
          particles.push(...createBurst(x, y, 50));
        }, i * 400);
      }
    };
    setTimeout(launchInitial, 800);

    // Observe "our-story" section
    const storyEl = document.getElementById('our-story');
    let storyFired = false;
    let observer;
    if (storyEl) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !storyFired) {
            storyFired = true;
            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                const x = canvas.width * (0.3 + Math.random() * 0.4);
                const y = canvas.height * (0.1 + Math.random() * 0.3);
                particles.push(...createBurst(x, y, 40));
              }, i * 350);
            }
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(storyEl);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw sparkles
      for (const s of sparkles) {
        s.update();
        s.draw(ctx);
      }

      // Update & draw particles
      particles = particles.filter((p) => p.alpha > 0);
      for (const p of particles) {
        p.update();
        p.draw(ctx);
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9990,
      }}
    />
  );
}
