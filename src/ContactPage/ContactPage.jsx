import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const messageData = {
      from: data.email,
      subject: data.subject,
      text: data.message,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        }
      );

      if (response.ok) {
        alert("Messaggio Inviato!");
        navigate("/");
      } else {
        alert("Errore! C'è stato un problema nell'inviare il messaggio.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Errore! C'è stato un errore di rete.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center px-4 py-8 sm:py-0">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
          Do you have questions, a project to propose, or simply want to get in
          touch? Fill out the form to send me a message. I will reply as soon as
          possible!
        </p>

        <div className="flex justify-center gap-4 mt-2 sm:mt-4">
          <a
            href="https://github.com/TheMonster155"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub size={25} className="sm:size-30" />
          </a>
          <a
            href="https://linkedin.com/in/anass-jouttane-781000343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaLinkedin size={25} className="sm:size-30" />
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 sm:mt-6">
          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="formEmail"
              className="block text-gray-300 mb-1 sm:mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 sm:p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
              id="formEmail"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="formSubject"
              className="block text-gray-300 mb-1 sm:mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
              id="formSubject"
              placeholder="Enter the subject"
              {...register("subject", {
                required: "Subject is required",
              })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="formMessage"
              className="block text-gray-300 mb-1 sm:mb-2"
            >
              Message
            </label>
            <textarea
              className="w-full p-2 sm:p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
              id="formMessage"
              rows="3"
              placeholder="Write your message here"
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-2 sm:p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
