import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { Fonts } from "./styles/fonts";
import { Colors } from "./styles/_colors";
import HeroSection from "./components/heroimage";

const App: React.FC = () => {
  return (
    <Router>
      <Fonts />
      <div className="App">
        <Colors />
        <Header title="Holidaze" />
        <HeroSection />
      </div>
    </Router>
  );
};

export default App;
