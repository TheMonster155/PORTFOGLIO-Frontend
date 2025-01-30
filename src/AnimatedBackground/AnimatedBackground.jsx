import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrame;

    const generateRandomLine = () => {
      const randomLines = [
        "const user = 'Jouttane Anass';",
        "let code = 'Hello World!';",
        "function animateCode() { return true; }",
        "const react = require('react');",
        "let state = useState();",
        "const canvas = document.querySelector('canvas');",
        "if (window.innerWidth < 800) { console.log('Mobile'); }",
      ];
      return randomLines[Math.floor(Math.random() * randomLines.length)];
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() / 1000;
      const lineColor = "rgba(0, 255, 255, 0.3)";
      const totalLines = 150;

      for (let i = 0; i < totalLines; i++) {
        const yPos = Math.random() * canvas.height;
        const xOffset = (time * 2 + i * 30) % canvas.width;
        const codeLine = generateRandomLine();

        ctx.font = "16px monospace";
        ctx.fillStyle = lineColor;
        ctx.fillText(codeLine, xOffset, yPos);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default AnimatedBackground;
