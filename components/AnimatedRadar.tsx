"use client";

import { useEffect, useRef } from "react";

export function AnimatedRadar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 600;
    const H = 595;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = 300;
    const cy = 294;
    const rx = 268;
    const ry = 128;

    let angle = 0.38;

    const trail: { x: number; y: number }[] = [];
    const TRAIL_LEN = 60;

    function shipPos(a: number) {
      return {
        x: cx + Math.cos(a) * rx,
        y: cy + Math.sin(a) * ry,
      };
    }

    function drawTrail() {
      if (trail.length < 2) return;
      for (let i = 1; i < trail.length; i++) {
        const t = i / trail.length;
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        ctx.strokeStyle = `rgba(0,220,255,${t * 0.55})`;
        ctx.lineWidth = t * 3;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    function drawShip(x: number, y: number, a: number) {
      const glow = ctx.createRadialGradient(x, y, 0, x, y, 45);
      glow.addColorStop(0, "rgba(0,210,255,0.3)");
      glow.addColorStop(1, "rgba(0,210,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(x, y);
      const heading = Math.atan2(Math.cos(a) * ry, -Math.sin(a) * rx) + Math.PI / 2;
      ctx.rotate(heading);

      const s = 1.15;
      ctx.beginPath();
      ctx.moveTo(0, -20 * s);
      ctx.lineTo(10 * s, -8 * s);
      ctx.lineTo(10 * s, 13 * s);
      ctx.lineTo(-10 * s, 13 * s);
      ctx.lineTo(-10 * s, -8 * s);
      ctx.closePath();
      ctx.fillStyle = "#c0392b";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,100,80,0.7)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(-8 * s, -7 * s, 16 * s, 18 * s);

      const cols = [
        "#e74c3c",
        "#27ae60",
        "#2980b9",
        "#f39c12",
        "#8e44ad",
        "#16a085",
        "#e67e22",
        "#2c3e50",
        "#c0392b",
      ];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          ctx.fillStyle = cols[(r * 3 + c) % cols.length];
          ctx.fillRect((-7 + c * 5) * s, (-5 + r * 6) * s, 4 * s, 5 * s);
        }
      }

      ctx.fillStyle = "#ecf0f1";
      ctx.fillRect(-5 * s, -17 * s, 10 * s, 10 * s);
      ctx.fillStyle = "#74b9ff";
      ctx.fillRect(-3 * s, -15 * s, 6 * s, 4 * s);

      ctx.restore();

      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#00eeff";
      ctx.fill();
    }

    function drawPing(x: number, y: number) {
      const t = Date.now() / 1000;
      for (let i = 0; i < 3; i++) {
        const phase = (t + i * 0.35) % 1;
        const r = phase * 24;
        const alpha = (1 - phase) * 0.7;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,230,255,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const sp = shipPos(angle);
      trail.push({ x: sp.x, y: sp.y });
      if (trail.length > TRAIL_LEN) trail.shift();
      drawTrail();
      drawShip(sp.x, sp.y, angle);
      drawPing(sp.x, sp.y);
      angle += 0.004;
      raf = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="animated-radar">
      <img className="animated-radar__bg" src="/images/cargo-radar-bg-white.jpg" alt="" />
      <canvas ref={canvasRef} className="animated-radar__canvas" />
    </div>
  );
}

