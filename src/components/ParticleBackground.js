import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import LightRays from './LightRays';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { activeProfile, particleMode } = useTheme();

    const getThemeColor = (varName, defaultColor) => {
      if (typeof window === 'undefined') return defaultColor;
      const root = document.documentElement;
      const val = getComputedStyle(root).getPropertyValue(varName).trim();
      return val || defaultColor;
    };

  useEffect(() => {
    if (!particleMode || particleMode === 'none' || particleMode === 'rays') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const initNodes = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((width * height) / 10000), 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawNodes = (accentColor) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = accentColor;
      ctx.strokeStyle = accentColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.globalAlpha = 1 - dist2 / 120;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const initDust = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((width * height) / 8000), 150);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2 - 0.1,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          alphaDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const drawDust = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += 0.005 * p.alphaDir;
        if (p.alpha <= 0.1 || p.alpha >= 0.8) p.alphaDir *= -1;

        ctx.globalAlpha = p.alpha * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const initRain = () => {
      particles = [];
      const fontSize = 14;
      const columns = Math.floor(width / fontSize);
      for (let i = 0; i < columns; i++) {
        particles.push({
          x: i * fontSize,
          y: Math.random() * height,
          speed: Math.random() * 2 + 1,
        });
      }
    };

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const drawRain = (accentColor) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = accentColor;
      ctx.font = '14px monospace';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        ctx.globalAlpha = 0.3;
        ctx.fillText(char, p.x, p.y);

        p.y += 14;
        if (p.y > height && Math.random() > 0.975) {
          p.y = 0;
        }
      }
      ctx.globalAlpha = 1;
    };

    const initCircuit = () => {
      particles = [];
      const numParticles = 20;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.floor(Math.random() * (width / 20)) * 20,
          y: Math.floor(Math.random() * (height / 20)) * 20,
          history: [],
          dir: Math.floor(Math.random() * 4),
          length: 0,
          maxLength: Math.floor(Math.random() * 20 + 10),
        });
      }
    };

    const drawCircuit = (accentColor) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.maxLength) {
          p.history.shift();
        }

        const speed = 2;
        if (p.dir === 0) p.x += speed;
        if (p.dir === 1) p.y += speed;
        if (p.dir === 2) p.x -= speed;
        if (p.dir === 3) p.y -= speed;

        p.length++;

        if (p.length > p.maxLength || Math.random() > 0.95 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          if (Math.random() > 0.5) p.dir = (p.dir + 1) % 4;
          else p.dir = (p.dir + 3) % 4;
          
          if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = Math.floor(Math.random() * (width / 20)) * 20;
            p.y = Math.floor(Math.random() * (height / 20)) * 20;
            p.history = [];
            p.length = 0;
          }
        }

        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let j = 1; j < p.history.length; j++) {
            ctx.lineTo(p.history[j].x, p.history[j].y);
          }
          ctx.stroke();

          ctx.fillStyle = accentColor;
          ctx.fillRect(p.x - 1, p.y - 1, 3, 3);
        }
      }
      ctx.globalAlpha = 1;
    };

    const initStarfield = () => {
      particles = [];
      const numParticles = 200;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawStarfield = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';

      const mx = (mouse.x - width / 2) * 0.05;
      const my = (mouse.y - height / 2) * 0.05;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        let px = p.x - mx * p.z;
        let py = p.y - my * p.z;

        if (px < 0) px += width;
        if (px > width) px -= width;
        if (py < 0) py += height;
        if (py > height) py -= height;

        ctx.globalAlpha = p.z * 0.4 + 0.2;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const initFirefly = () => {
      particles = [];
      const numParticles = 50;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawFirefly = (accentColor) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
           p.vx += (dx / dist) * 0.02;
           p.vy += (dy / dist) * 0.02;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        if (Math.abs(p.vx) > 1.5) p.vx *= 0.9;
        if (Math.abs(p.vy) > 1.5) p.vy *= 0.9;

        if (Math.random() < 0.01) {
           p.vx += (Math.random() - 0.5);
           p.vy += (Math.random() - 0.5);
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.phase += 0.02;
        const alpha = Math.sin(p.phase) * 0.4 + 0.5;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, accentColor.replace('rgb', 'rgba').replace(')', `, ${alpha})`));
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    if (particleMode === 'nodes') initNodes();
    if (particleMode === 'dust') initDust();
    if (particleMode === 'rain') initRain();
    if (particleMode === 'circuit') initCircuit();
    if (particleMode === 'starfield') initStarfield();
    if (particleMode === 'firefly') initFirefly();

    const render = () => {
      const accentColor = getThemeColor('--accent', '#2dd4bf');

      if (particleMode === 'nodes') drawNodes(accentColor);
      if (particleMode === 'dust') drawDust();
      if (particleMode === 'rain') drawRain(accentColor);
      if (particleMode === 'circuit') drawCircuit(accentColor);
      if (particleMode === 'starfield') drawStarfield();
      if (particleMode === 'firefly') drawFirefly(accentColor);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleMode, activeProfile]);

  if (!particleMode || particleMode === 'none') return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -1,
          opacity: particleMode === 'rain' ? 0.6 : 1,
        }}
      />
      {particleMode === 'rays' && (
        <LightRays 
          raysColor={getThemeColor('--accent', '#2dd4bf')} 
          raysOrigin="top-center"
          raysSpeed={0.5}
        />
      )}
    </>
  );
}
