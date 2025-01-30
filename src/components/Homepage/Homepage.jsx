import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Homepage.css";
import ContactPage from "../../ContactPage/ContactPage";
import CertificationsList from "../CertificationsList/CertificationsList";
import AnimatedBackground from "../../AnimatedBackground/AnimatedBackground";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeCertifications, setActiveCertifications] = useState(false);

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

  const handleCertificationsClick = () => {
    setActiveCertifications(true);
  };

  const handlePageClick = (e) => {
    const isInsideSecondSection = e.target.closest(".second-section") !== null;
    const isClickable =
      e.target.closest("h1") || e.target.classList.contains("text-4xl");

    if (!isInsideSecondSection && !isClickable && activeSection !== null) {
      setActiveSection(null);
    }

    if (isInsideSecondSection && !isClickable && activeSection !== null) {
      setActiveSection(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handlePageClick);
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, [activeSection]);

  useEffect(() => {
    if (activeCertifications) {
      window.location.href = "/certifications";
    }
  }, [activeCertifications]);

  return (
    <div className="relative w-screen min-h-screen overflow-auto section ">
      <AnimatedBackground />

      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <motion.div
          className="text-center z-10"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-9xl font-bold text-white">Jouttane Anass</h1>
        </motion.div>

        <motion.div
          className="text-center z-10 mt-4"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-8xl font-normal text-white">
            FullStack Developer
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col items-center space-y-12 pt-12">
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
              exit={{ opacity: 0, translateY: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-2xl leading-relaxed">
                Ciao, sono Anass. Sono un Web Developer Full Stack con
                l'obiettivo di trasformare le idee in esperienze digitali uniche
                e funzionali. La mia passione per la tecnologia si riflette in
                ogni progetto che realizzo, cercando sempre di coniugare
                funzionalità e design. Mi piace esplorare nuove soluzioni e
                affrontare sfide che mi spingono a crescere professionalmente.
                Sia nello sviluppo di siti web interattivi con JavaScript, React
                e CSS, sia nella creazione di soluzioni backend scalabili con
                Node.js, Express e MongoDB, il mio approccio è sempre orientato
                al risultato e alla cura dei dettagli. Ogni codice che scrivo ha
                come obiettivo non solo risolvere un problema, ma anche offrire
                un'esperienza utente fluida e coinvolgente. Se cerchi un
                professionista dinamico, attento alle esigenze del progetto e in
                grado di adattarsi rapidamente, sono pronto a collaborare con
                te.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
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
              <p className="text-2xl leading-relaxed">
                <p className="text-2xl leading-relaxed">
                  HTML5, CSS: Expertise in HTML5 for modern, accessible web
                  structures and CSS for responsive, visually appealing layouts.
                </p>

                <p className="text-2xl leading-relaxed">
                  GIT, DOM, JavaScript: Skilled in GIT for version control, DOM
                  manipulation with JavaScript for dynamic interactions.
                </p>

                <p className="text-2xl leading-relaxed">
                  CSS3, Bootstrap: Proficient in CSS3 for animations and
                  responsive design, and Bootstrap for fast, professional
                  interfaces.
                </p>

                <p className="text-2xl leading-relaxed">
                  API, ES6, AJAX, Async: Experience with RESTful APIs, AJAX,
                  Fetch, and ES6+ features like Promises and async/await.
                </p>

                <p className="text-2xl leading-relaxed">
                  Express, MongoDB, Cloud, Node.js: Strong backend skills with
                  Node.js, Express, MongoDB, and cloud deployment.
                </p>

                <p className="text-2xl leading-relaxed">
                  Single Page Applications, React: Specialized in SPAs with
                  React, using reusable components and state management
                  libraries.
                </p>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
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
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 transform scale-110 transition duration-300 ease-in-out hover:scale-[1.15]">
                <img
                  className="w-full h-52 object-cover"
                  src="https://res.cloudinary.com/dzdxelv4m/image/upload/v1738189643/Capture_hgpwqz.png"
                  alt="Project Image"
                />
                <div className="p-4 flex flex-col items-center">
                  <p className="text-xl font-semibold text-white">
                    AnimesAndMangas
                  </p>
                  <p className="text-base text-gray-400 mt-2 text-center text-white ">
                    Non è solo un sito: è la mia passione trasformata in codice
                  </p>
                  <a
                    href="https://animes-and-mangas-xi.vercel.app"
                    className="mt-4 px-4 py-2 -600 text-white rounded-lg text-lg font-medium  transition duration-300"
                  >
                    Animes and Mangas
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={handleCertificationsClick}
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
          className="text-[10rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125"
          onClick={() => handleSectionClick("contact")}
        >
          Contact
        </motion.h1>

        <AnimatePresence>
          {activeSection === "contact" && (
            <motion.div
              className="bg-transparent text-white p-6 mt-4 space-y-4"
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
