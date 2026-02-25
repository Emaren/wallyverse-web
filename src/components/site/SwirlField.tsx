"use client";

import { useEffect, useRef } from "react";

import type { MoodPreset } from "@/lib/wallyverse-content";

const paletteByMood: Record<MoodPreset, [string, string, string]> = {
  violetStorm: ["#b67cff", "#7f46ff", "#33b5ff"],
  emberSky: ["#ffbb64", "#ff6f5f", "#a347ff"],
  aetherMist: ["#9cf7ff", "#a17dff", "#58ffc7"],
  astralGold: ["#ffd87d", "#bb84ff", "#ff8f6a"],
  nightPulse: ["#7f67ff", "#d17bff", "#37d4ff"],
};

type Particle = {
  orbit: number;
  radius: number;
  speed: number;
  phase: number;
  drift: number;
};

type SwirlFieldProps = {
  mood: MoodPreset;
};

export function SwirlField({ mood }: SwirlFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    const palette = paletteByMood[mood];
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mediaQuery.matches;

    let animationFrameId = 0;
    let disposed = false;

    const particles: Particle[] = Array.from({
      length: window.innerWidth < 900 ? 28 : 46,
    }).map((_, index) => ({
      orbit: 0.2 + Math.random() * 0.65,
      radius: 0.8 + Math.random() * 1.8,
      speed: 0.00008 + Math.random() * 0.0002,
      phase: Math.random() * Math.PI * 2,
      drift: (index % 2 === 0 ? 1 : -1) * (0.00004 + Math.random() * 0.00006),
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (timestamp: number) => {
      if (disposed) {
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerX = width * 0.5;
      const centerY = height * 0.46;

      ctx.clearRect(0, 0, width, height);

      const sky = ctx.createRadialGradient(
        centerX,
        centerY,
        Math.min(width, height) * 0.05,
        centerX,
        centerY,
        Math.max(width, height) * 0.9,
      );
      sky.addColorStop(0, `${palette[0]}33`);
      sky.addColorStop(0.45, `${palette[1]}22`);
      sky.addColorStop(1, "#05020f");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      for (let ring = 0; ring < 7; ring += 1) {
        const radius = Math.min(width, height) * (0.1 + ring * 0.08);
        const wobble = Math.sin(timestamp * 0.00035 + ring) * 14;
        const spin = timestamp * (0.00006 + ring * 0.00002);
        const start = spin + ring * 0.24;
        const end = start + Math.PI * (0.6 + (ring % 3) * 0.2);

        ctx.beginPath();
        ctx.ellipse(
          centerX + Math.cos(spin * 0.4 + ring) * 8,
          centerY + wobble,
          radius,
          radius * (0.64 + ring * 0.02),
          spin,
          start,
          end,
        );
        ctx.strokeStyle = `${palette[ring % palette.length]}66`;
        ctx.lineWidth = 1.4 + ring * 0.25;
        ctx.shadowBlur = 18;
        ctx.shadowColor = palette[ring % palette.length];
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      particles.forEach((particle, index) => {
        const t = timestamp * particle.speed;
        const angle = t + particle.phase;
        const orbitRadius = Math.min(width, height) * particle.orbit;
        const x = centerX + Math.cos(angle + index * 0.3) * orbitRadius;
        const y = centerY + Math.sin(angle * 1.4 + index * particle.drift * 900) * (orbitRadius * 0.56);

        const flare = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 12000 + index));
        ctx.beginPath();
        ctx.arc(x, y, particle.radius * flare, 0, Math.PI * 2);
        ctx.fillStyle = `${palette[index % palette.length]}bb`;
        ctx.fill();
      });

      if (!reduceMotion) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    resize();

    if (reduceMotion) {
      draw(0);
    } else {
      animationFrameId = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [mood]);

  return <canvas ref={canvasRef} className="swirl-field" aria-hidden="true" />;
}
