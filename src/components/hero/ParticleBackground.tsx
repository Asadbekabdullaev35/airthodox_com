import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
      velocity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = 0;
        this.speedY = 0;
        this.color = `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.2})`;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = 0.1;
      }

      update(mouseX: number, mouseY: number) {
        // Calculate angle to mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Smooth angle transition
        const targetAngle = Math.atan2(dy, dx);
        const angleDiff = targetAngle - this.angle;
        
        // Normalize angle difference
        if (angleDiff > Math.PI) this.angle += Math.PI * 2;
        if (angleDiff < -Math.PI) this.angle -= Math.PI * 2;
        
        // Smoothly rotate towards mouse
        this.angle += angleDiff * 0.1;
        
        // Adjust velocity based on distance
        const targetVelocity = Math.min(5, 50 / distance);
        this.velocity += (targetVelocity - this.velocity) * 0.1;
        
        // Update position
        if (distance < 300) {
          this.speedX = Math.cos(this.angle) * this.velocity;
          this.speedY = Math.sin(this.angle) * this.velocity;
        } else {
          this.speedX *= 0.95;
          this.speedY *= 0.95;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Keep particles within bounds
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = mousePosition.x - rect.left;
      const mouseY = mousePosition.y - rect.top;
      
      particles.forEach(particle => {
        particle.update(mouseX, mouseY);
        particle.draw();
      });

      // Draw connections between nearby particles
      particles.forEach((a, index) => {
        particles.slice(index + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - distance / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;