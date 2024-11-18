import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { Fonts } from "./styles/fonts";

const App: React.FC = () => {
  return (
    <Router>
      <Fonts />
      <div className="App">
        <Header title="Holidaze" />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
