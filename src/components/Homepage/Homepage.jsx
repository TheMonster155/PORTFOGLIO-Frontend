import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Homepage.css";
import ContactPage from "../../ContactPage/ContactPage";
import CertificationsList from "../CertificationsList/CertificationsList";
import AnimatedBackground from "../../AnimatedBackground/AnimatedBackground";
import About from "../AboutME/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../../Projects/Projects";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeCertifications, setActiveCertifications] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }

    if (section === "certifications") {
      setActiveCertifications((prev) => !prev);
    }
  };

  // Funzione per gestire l'apertura/chiusura di "Contact"
  const handleContactClick = () => {
    setShowContact((prev) => !prev); // Alterna la visibilità del modulo Contact
  };

  const handlePageClick = (e) => {
    const isInsideContact = e.target.closest(".contact-form") !== null; // Verifica se il clic è dentro il modulo Contact
    const isInsideSection =
      e.target.closest("h1") || e.target.classList.contains("text-4xl");

    if (!isInsideContact && !isInsideSection && showContact) {
      setShowContact(false); // Chiudi il modulo se si clicca fuori
    }

    if (activeSection !== null && !isInsideSection) {
      setActiveSection(null); // Chiudi le altre sezioni se non è un clic su una sezione
    }
  };

  useEffect(() => {
    window.addEventListener("click", handlePageClick);
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, [activeSection, showContact]);

  useEffect(() => {
    if (activeCertifications) {
      window.location.href = "/certifications";
    }
  }, [activeCertifications]);

  return (
    <div className="relative w-screen min-h-screen overflow-auto section">
      <AnimatedBackground />

      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <motion.div
          className="text-center z-10"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white">
            Jouttane Anass
          </h1>
        </motion.div>

        <motion.div
          className="text-center z-10 mt-4"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-normal text-white">
            FullStack Developer
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col items-center space-y-12 pt-12">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={() => handleSectionClick("about")}
        >
          About
        </motion.h1>

        <AnimatePresence>
          {activeSection === "about" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
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
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
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
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={() => handleSectionClick("certifications")}
        >
          Certified
        </motion.h1>

        <AnimatePresence>
          {activeCertifications && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <CertificationsList />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={handleContactClick}
        >
          Contact
        </motion.h1>

        <AnimatePresence>
          {showContact && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4 contact-form"
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
