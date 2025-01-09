/*import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import "./CertificationsList.css";

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <div
              key={certification._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl "
            >
              <h3 className="text-xl font-semibold mb-4">
                {certification.name}
              </h3>
              <img
                src={certification.file}
                alt={certification.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-4">{certification.description}</p>
              <p className="font-medium text-gray-800">
                <strong>Release Date:</strong> {certification.certificateRelese}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          No certifications available
        </p>
      )}
    </div>
  );
};

export default CertificationsList;
*/
/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni
import "./CertificationsList.css";

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
              initial={{ opacity: 0, x: 0 }} // Impostiamo l'animazione iniziale (opacità 0)
              animate={{ opacity: 1, x: 0 }} // L'elemento deve arrivare con opacità 1
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.5, // Ritardo crescente tra ogni card
              }} // Ritardo maggiore per ogni card
            >
              <h3 className="text-xl font-semibold mb-4">
                {certification.name}
              </h3>
              <img
                src={certification.file}
                alt={certification.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-4">{certification.description}</p>
              <p className="font-medium text-gray-800">
                <strong>Release Date:</strong> {certification.certificateRelese}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          No certifications available
        </p>
      )}
    </div>
  );
};

export default CertificationsList;
*/

/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni
import "./CertificationsList.css";

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
              animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: getRandomDelay(), // Ritardo casuale per ogni card
              }} // Ritardo maggiore per ogni card
            >
              <h3 className="text-xl font-semibold mb-4">
                {certification.name}
              </h3>
              <img
                src={certification.file}
                alt={certification.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-4">{certification.description}</p>
              <p className="font-medium text-gray-800">
                <strong>Release Date:</strong> {certification.certificateRelese}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          No certifications available
        </p>
      )}
    </div>
  );
};

export default CertificationsList;
*/
/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni
import "./CertificationsList.css";

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
              animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: getRandomDelay(), // Ritardo casuale per ogni card
              }} // Ritardo maggiore per ogni card
            >
              <h3 className="text-xl font-semibold mb-4">
                {certification.name}
              </h3>
              <img
                src={certification.file}
                alt={certification.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-4">{certification.description}</p>
              <p className="font-medium text-gray-800">
                <strong>Release Date:</strong> {certification.certificateRelese}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          No certifications available
        </p>
      )}
    </div>
  );
};

export default CertificationsList;
*/
/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni
import "./CertificationsList.css";

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen flex justify-content-center align-items-center items-center p-4">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {certifications.map((certification) => (
              <motion.div
                key={certification._id}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
                animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: getRandomDelay(), // Ritardo casuale per ogni card
                }} // Ritardo maggiore per ogni card
              >
                <h3 className="text-xl font-semibold mb-4">
                  {certification.name}
                </h3>
                <img
                  src={certification.file}
                  alt={certification.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4">
                  {certification.description}
                </p>
                <p className="font-medium text-gray-800">
                  <strong>Release Date:</strong>{" "}
                  {certification.certificateRelese}
                </p>
              </motion.div>
            ))}
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
*/
/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {certifications.map((certification) => (
              <motion.div
                key={certification._id}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
                animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: getRandomDelay(), // Ritardo casuale per ogni card
                }} // Ritardo maggiore per ogni card
              >
                <h3 className="text-xl font-semibold mb-4">
                  {certification.name}
                </h3>
                <img
                  src={certification.file}
                  alt={certification.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4">
                  {certification.description}
                </p>
                <p className="font-medium text-gray-800">
                  <strong>Release Date:</strong>{" "}
                  {certification.certificateRelese}
                </p>
              </motion.div>
            ))}
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
*/

/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification, index) => {
              const isOdd = index % 2 !== 0; // Verifica se è una posizione dispari per alternare le immagini
              return (
                <motion.div
                  key={certification._id}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                  initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
                  animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: getRandomDelay(), // Ritardo maggiore per ogni card
                  }} // Ritardo maggiore per ogni card
                >
                  <div
                    className={`flex ${
                      isOdd ? "flex-row-reverse" : "flex-row"
                    } items-center space-x-6`}
                  >
                    <img
                      src={certification.file}
                      alt={certification.name}
                      className="w-1/2 h-48 object-cover mb-4 rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">
                        {certification.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {certification.description}
                      </p>
                      <p className="font-medium text-gray-800">
                        <strong>Release Date:</strong>{" "}
                        {certification.certificateRelese}
                      </p>
                    </div>
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
*/
/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion"; // Importiamo motion per le animazioni

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification, index) => {
              const isOdd = index % 2 !== 0; // Verifica se è una posizione dispari per alternare le immagini
              return (
                <motion.div
                  key={certification._id}
                  className="flex mb-6"
                  initial={{ opacity: 0, y: 50 }} // Impostiamo l'animazione iniziale (opacità 0, spostamento verso il basso)
                  animate={{ opacity: 1, y: 0 }} // L'elemento deve arrivare con opacità 1 e senza spostamenti
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: getRandomDelay(), // Ritardo maggiore per ogni card
                  }}
                >
                  <div
                    className={`flex ${
                      isOdd ? "flex-row-reverse" : "flex-row"
                    } items-center space-x-6`}
                  >
                    <img
                      src={certification.file}
                      alt={certification.name}
                      className="w-1/2 h-100 object-cover mb-4 rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">
                        {certification.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {certification.description}
                      </p>
                      <p className="font-medium text-gray-800">
                        <strong>Release Date:</strong>{" "}
                        {certification.certificateRelese}
                      </p>
                    </div>
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
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertifications } from "../reducers/certificationsSlice";
import {
  certificateError,
  getAllCertificate,
  isCertificateLoading,
} from "../reducers/certificationsSlice";
import { motion } from "framer-motion";

// Funzione per generare un ritardo casuale
const getRandomDelay = () => Math.random() * 0.5; // Ritardo tra 0 e 0.5 secondi

// Componente per visualizzare la lista delle certificazioni
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
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full p-0">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification, index) => {
              const isOdd = index % 2 !== 0; // Verifica se è una posizione dispari per alternare le immagini
              return (
                <motion.div
                  key={certification._id}
                  className="flex mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    delay: getRandomDelay(),
                  }}
                >
                  <div
                    className={`flex ${
                      isOdd ? "flex-row-reverse" : "flex-row"
                    } items-center space-x-6 w-full`}
                  >
                    {/* Posizionamento immagine */}
                    <div className={`w-1/3 ${isOdd ? "ml-auto" : "mr-auto"}`}>
                      <img
                        src={certification.file}
                        alt={certification.name}
                        className="object-cover mb-4 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">
                        {certification.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {certification.description}
                      </p>
                      <p className="font-medium text-gray-800">
                        <strong>Release Date:</strong>{" "}
                        {certification.certificateRelese}
                      </p>
                    </div>
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
