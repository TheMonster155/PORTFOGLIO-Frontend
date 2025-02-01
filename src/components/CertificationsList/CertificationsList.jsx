import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../../reducers/certificationsSlice";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../../AnimatedBackground/AnimatedBackground";
import "./CertificationsList.css";
const getSequenceDelay = (index) => index * 0.2;

const CertificationsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const certifications = useSelector(getAllCertificate);
  const isLoading = useSelector(isCertificateLoading);
  const error = useSelector(certificateError);

  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    dispatch(fetchCertifications());
  }, [dispatch]);

  if (isLoading)
    return <p className="text-center text-xl text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const openImageModal = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AnimatedBackground />

      <div className="absolute top-5 left-4">
        <button onClick={() => navigate("/")} className="text-white text-xl">
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="w-full p-0">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Certifications
        </h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <motion.div
                  key={certification._id}
                  className="flex flex-col lg:flex-row mb-6"
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
                    className={`flex flex-col ${
                      isOdd ? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center space-x-6 w-full`}
                  >
                    {/* Parte immagine */}
                    <motion.div
                      className={`w-full lg:w-1/3 ${
                        isOdd ? "lg:ml-auto" : "lg:mr-auto"
                      } mb-4 lg:mb-0`}
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
                        className="object-cover rounded-md cursor-pointer"
                        onClick={() => openImageModal(certification.file)}
                      />
                    </motion.div>

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
                        className="text-2xl sm:text-1xl md:text-5xl lg:text-4xl xl:text-4xl leading-relaxed font-semibold mb-4 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.name}
                      </motion.h3>
                      <motion.p
                        className="text-white mb-4 text-2xl sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl leading-relaxed"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.description}
                      </motion.p>
                      <motion.p
                        className="text-2xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl leading-relaxed font-medium text-white"
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
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <motion.div
            className="relative bg-white p-4 rounded-md"
            initial={window.innerWidth < 768 ? { opacity: 0 } : {}}
            animate={window.innerWidth < 768 ? { opacity: 1 } : {}}
            exit={window.innerWidth < 768 ? { opacity: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-0 right-0 p-2 text-xl text-black"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CertificationsList;
