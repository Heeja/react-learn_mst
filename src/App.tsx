import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";

import Home from "./Routes/Home";
import Coins from "./Routes/Coins";
import Todos from "./Routes/Todos";
import Noflix from "./Routes/Noflix";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/noflix" element={<Noflix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
