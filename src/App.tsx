import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainIntro from "./pages/Main/MainIntro";
import Introduction from "./pages/Introduction/Introduction";
import Offer from "./pages/Offer/Offer";
import Qna from "./pages/Qna/Qna";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainIntro />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/qna" element={<Qna />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
