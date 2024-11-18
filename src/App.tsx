import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.tsx"
import { Fonts } from "./styles/fonts.ts"

function App() {
  return (
    <>
      <Fonts />
      <div className="App">
        <Header title="Holidaze" />
      </div>
    </>
  )
}

export default App
