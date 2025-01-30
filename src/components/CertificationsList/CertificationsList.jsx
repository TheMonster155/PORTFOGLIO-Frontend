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
                        className="object-cover mb-4 rounded-md cursor-pointer"
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
                        className="text-xl font-semibold mb-4 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.name}
                      </motion.h3>
                      <motion.p
                        className="text-white mb-4"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {certification.description}
                      </motion.p>
                      <motion.p
                        className="font-medium text-white"
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
          <div className="relative bg-white p-4 rounded-md">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsList;
