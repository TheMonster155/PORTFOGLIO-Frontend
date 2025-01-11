import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CertificationsList from "./components/CertificationsList/CertificationsList";
import HomePage from "./components/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/certifications" element={<CertificationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
