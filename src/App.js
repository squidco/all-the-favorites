import Main from "./pages/Main";
import "./App.css";
import { useState } from "react";
import FavoritePage from "./pages/FavoritePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites/:id" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
