import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Homepage.css";
import ContactPage from "../../ContactPage/ContactPage";

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

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const handlePageClick = (e) => {
    // Verifica se il clic è avvenuto all'interno della sezione attiva o su un elemento cliccabile
    const isInsideSecondSection = e.target.closest(".second-section") !== null;
    const isClickable =
      e.target.closest("h1") || e.target.classList.contains("text-4xl");

    // Se il clic è fuori dalla sezione attiva e non su un elemento cliccabile, chiudi la sezione
    if (!isInsideSecondSection && !isClickable && activeSection !== null) {
      setActiveSection(null);
    }

    // Se il clic è dentro la sezione attiva ma non su un titolo, chiudi la sezione
    if (isInsideSecondSection && !isClickable && activeSection !== null) {
      setActiveSection(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handlePageClick);
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-auto">
      <AnimatedBackground />

      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <motion.div
          className="text-center z-10"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-white">Jouttane Anass</h1>
        </motion.div>

        <motion.div
          className="text-center z-10 mt-4"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-normal text-white">
            FullStack Developer
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center second-section">
        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </motion.h1>

        <AnimatePresence>
          {activeSection === "about" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-2xl leading-relaxed">
                Ciao, mi chiamo Anass. Sono nato e cresciuto a Bolzano, in Alto
                Adige, ma da otto anni vivo in Germania, nella città di Lauingen
                in Baviera.
              </p>
              <p className="text-2xl leading-relaxed">
                Sono uno sviluppatore full-stack con una forte passione per la
                creazione di esperienze web intuitive e funzionali.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125 mt-12"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </motion.h1>

        <AnimatePresence>
          {activeSection === "skills" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-2xl leading-relaxed">JavaScript</p>
              <p className="text-2xl leading-relaxed">React</p>
              <p className="text-2xl leading-relaxed">Node.js</p>
              <p className="text-2xl leading-relaxed">MongoDB</p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125 mt-30"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </motion.h1>
        <AnimatePresence>
          {activeSection === "projects" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <img
                  className="w-full h-48 object-cover"
                  src="https://via.placeholder.com/300x200"
                  alt="Project Image"
                />
                <div className="p-4">
                  <p className="text-xl font-semibold text-white">
                    My Awesome Project
                  </p>
                  <p className="text-base text-gray-400 mt-2">
                    A brief description of my amazing project. It's something
                    really cool!
                  </p>
                  <a
                    href="#"
                    className="text-cyan-400 hover:underline mt-4 inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center third-section">
        <motion.h1
          className="absolute top-5 left-1/2 transform -translate-x-1/2 text-[10rem] font-semibold text-white cursor-pointer transition duration-300 ease-in-out hover:scale-125"
          onClick={() => handleSectionClick("contact")}
        >
          Contact
        </motion.h1>

        <AnimatePresence>
          {activeSection === "contact" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4  mt-80 "
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
