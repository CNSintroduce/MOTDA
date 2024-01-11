import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainIntro from "./pages/Main/MainIntro";
import MainHeader from "./components/Header1/Header1";
import Introduction from "./pages/Introduction/Introduction";
import Qna from "./pages/Qna/Qna";
import Offer from "./pages/Offer/Offer";

function App() {
  return (
    <div className="App">
      {/* <MainIntro /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainIntro />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Qna" element={<Qna />} />
          <Route path="/Offer" element={<Offer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
