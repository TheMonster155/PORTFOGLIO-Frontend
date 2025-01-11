import React from "react";
import { motion } from "framer-motion"; // Importa motion da framer-motion

const HomePage = () => {
  const imageUrl =
    "https://res.cloudinary.com/dzdxelv4m/image/upload/v1736552278/5_Best_Coding_Programs_for_Aspiring_Programmers1650304687858345_roq5m6.webp";

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="text-center text-white">
          {/* Animazione per Jouttane Anass */}
          <motion.h1
            className="text-4xl font-bold"
            initial={{ y: 100, opacity: 0 }} // Parte da sotto (y: 100) con opacità 0
            animate={{ y: 0, opacity: 1 }} // Si muove verso il centro (y: 0) e diventa visibile
            transition={{ duration: 1 }} // Tempo dell'animazione
          >
            Jouttane Anass
          </motion.h1>

          {/* Animazione per FullStack Developer */}
          <motion.h2
            className="text-2xl font-normal mt-2"
            initial={{ y: -100, opacity: 0 }} // Parte da sopra (y: -100) con opacità 0
            animate={{ y: 0, opacity: 1 }} // Si muove verso il centro (y: 0) e diventa visibile
            transition={{ duration: 1, delay: 0.5 }} // Tempo dell'animazione con un ritardo
          >
            FullStack Developer
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
