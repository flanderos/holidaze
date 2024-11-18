import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { Fonts } from "./styles/fonts";
import { Colors } from "./styles/_colors";

const App: React.FC = () => {
  return (
    <Router>
      <Fonts />
      <div className="App">
        <Colors />
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
