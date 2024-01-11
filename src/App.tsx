import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainIntro from "./pages/Main/MainIntro";
import MainHeader from "./components/Header1/Header1";

function App() {
  return (
    <div className="App">
      {/* <MainIntro /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainIntro />} />
        </Routes>
      </BrowserRouter>
      <MainHeader />
    </div>
  );
}

export default App;
