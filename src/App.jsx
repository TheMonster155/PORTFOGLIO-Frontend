import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CertificationsList from "./components/CertificationsList/CertificationsList";
import HomePage from "./components/Homepage/Homepage";
import AboutMe from "./components/AboutME/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/certifications" element={<CertificationsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
