import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../../reducers/certificationsSlice";
import { motion } from "framer-motion";

// Funzione per generare un ritardo per le animazioni
const getSequenceDelay = (index) => index * 0.2; // Incrementa il ritardo in base all'indice

const CertificationsList = () => {
  const dispatch = useDispatch();

  // Selezioniamo lo stato dal Redux store
  const certifications = useSelector(getAllCertificate);
  const isLoading = useSelector(isCertificateLoading);
  const error = useSelector(certificateError);

  // Effettua il dispatch dell'azione per recuperare le certificazioni quando il componente è montato
  useEffect(() => {
    dispatch(fetchCertifications());
  }, [dispatch]);

  // Gestione dei casi di loading e errore
  if (isLoading)
    return <p className="text-center text-xl text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full p-0">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Certifications
        </h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification, index) => {
              const isOdd = index % 2 !== 0; // Verifica se è una posizione dispari per alternare le immagini
              return (
                <motion.div
                  key={certification._id}
                  className="flex mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    delay: getSequenceDelay(index),
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div
                    className={`flex ${
                      isOdd ? "flex-row-reverse" : "flex-row"
                    } items-center space-x-6 w-full`}
                  >
                    {/* Posizionamento immagine */}
                    <motion.div
                      className={`w-1/3 ${isOdd ? "ml-auto" : "mr-auto"}`}
                      initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: getSequenceDelay(index),
                      }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={certification.file}
                        alt={certification.name}
                        className="object-cover mb-4 rounded-md"
                      />
                    </motion.div>

                    {/* Contenuto descrizione */}
                    <motion.div
                      className="flex-1"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: getSequenceDelay(index) + 0.3,
                          },
                        },
                      }}
                    >
                      <motion.h3
                        className="text-xl font-semibold mb-4 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.name}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 mb-4"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.description}
                      </motion.p>
                      <motion.p
                        className="font-medium text-gray-300"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <strong>Release Date:</strong>{" "}
                        {certification.certificateRelese}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">
            No certifications available
          </p>
        )}
      </div>
    </div>
  );
};

export default CertificationsList;
