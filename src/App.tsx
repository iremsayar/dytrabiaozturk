import React from "react";
import "./App.css";
import { AnimationLogo } from "./components/AnimationLogo/AnimationLogo";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
    </div>
    // <div className=" max-w-7xl mx-auto h-screen">
    //   <div className="cont">
    //     <div className="section bg-red-500"></div>
    //     <div id="b" className="section bg-red-300"></div>
    //     <div className="section bg-red-100"></div>
    //     <div className="fixed top-0">
    //       <a href="a" id="a">
    //         <p>A</p>
    //       </a>
    //       <a href="#b">
    //         <p>B</p>
    //       </a>

    //       <p>C</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
