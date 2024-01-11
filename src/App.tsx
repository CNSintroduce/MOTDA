import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainIntro from "./pages/Main/MainIntro";
import MainHeader from "./components/Header1/Header1";

function App() {
  return (
    <div className="App">
      {/* <MainIntro /> */}
      <MainHeader />
    </div>
  );
}

export default App;
