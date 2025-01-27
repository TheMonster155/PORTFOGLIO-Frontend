import React, { useEffect, useRef } from "react";
import "./AboutME.css";
const CodeRainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Imposta dimensioni canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
      // Sfondo semi-trasparente per creare l'effetto di dissolvenza
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stile dei caratteri
      ctx.fillStyle = "#0F0"; // Verde stile Matrix
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        // Seleziona un carattere casuale dal set
        const text = codes[Math.floor(Math.random() * codes.length)];
        const x = i * fontSize;

        // Disegna il carattere sul canvas
        ctx.fillText(text, x, y * fontSize);

        // Resetta il drop casualmente per creare un effetto dinamico
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    // Aggiorna il canvas ogni 50ms
    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

const AboutMe = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <CodeRainBackground />

      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-60">
        <div className="text-center text-white">
          <h2>
            Ciao, mi chiamo Anass. Sono nato e cresciuto a Bolzano, in Alto
            Adige, ma da otto anni vivo in Germania, nella città di Lauingen in
            Baviera. Sono uno sviluppatore full-stack con una forte passione per
            la creazione di esperienze web intuitive e funzionali. Fin da
            giovane, ho nutrito un grande interesse per la tecnologia e
            l'informatica, un entusiasmo che mi ha spinto a iscrivermi a
            EPICODE, una delle migliori scuole di programmazione online in
            Italia. Durante il mio percorso formativo, ho approfondito le
            competenze nel front-end, lavorando con JavaScript, e nel back-end,
            specializzandomi nello stack MERN (MongoDB, Express.js, React e
            Node.js). Oggi, continuo a crescere professionalmente come
            autodidatta, concentrandomi su Python e sulla progettazione di siti
            web moderni e performanti. Sono sempre entusiasta di lavorare su
            nuovi progetti e collaborare con team che condividano la mia
            passione per il web development. Se vuoi scoprire di più su di me o
            discutere di una possibile collaborazione, non esitare a
            contattarmi!{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
