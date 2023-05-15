import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* si jamais la route est "/" (la racine du site) alors tu m'envoies sur Home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de declare au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// ROUTEUR
