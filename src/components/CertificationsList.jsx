import React, { useEffect } from "react";
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
