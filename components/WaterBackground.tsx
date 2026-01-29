"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function WaterBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Wave animation parameters
        let time = 0;
        const waves = [
            { amplitude: 30, frequency: 0.015, speed: 0.02, offset: 0, opacity: 0.6 },
            { amplitude: 25, frequency: 0.02, speed: 0.015, offset: 100, opacity: 0.4 },
            { amplitude: 35, frequency: 0.01, speed: 0.025, offset: 200, opacity: 0.3 },
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGradient.addColorStop(0, '#0B1C3E'); // Deep Blue
            bgGradient.addColorStop(1, '#050A18'); // Darker Blue
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw waves
            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);

                for (let x = 0; x < canvas.width; x++) {
                    const y =
                        canvas.height / 2 +
                        Math.sin(x * wave.frequency + time * wave.speed + wave.offset) *
                        wave.amplitude;
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();

                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, `rgba(0, 181, 216, ${wave.opacity * 0.3})`); // Cyan hint
                gradient.addColorStop(1, `rgba(11, 28, 62, ${wave.opacity * 0.8})`); // Deep Blue base

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            time += 0.5;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated canvas waves */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-30"
            />

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%",
                            ],
                            x: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%",
                            ],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Gradient overlay */}
            {/* Gradient overlay - Removed for darker look */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
    );
}
