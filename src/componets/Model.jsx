import { useState } from "react";
import {  darkImg, houseImg, lightImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
// import Part from "./Part";

const Model = () => {
  useGSAP(()=>{
    gsap.to('#imgAnimation',
    {
      opacity: 1,
      y: 0,
      delay: 1.5,
      duration: 5,
      ease: 'power4.out',
      from: {
        y: -100,
        opacity: 0
      }
    })
  })
  const [theme, setTheme] = useState("dark");
  const [showDocumentation, setShowDocumentation] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleButtonClick = () => {
    setShowDocumentation(!showDocumentation);
  };

  return (
    <section className="flex-center flex-col ">
    <h1 className="text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-white  max-md:mb-10">More informtion</h1>
      <div className={` flex w-full rounded-3xl items-center justify-center min-h-screen p-4 overflow-hidden ${theme === "dark" ?  "bg-transparent text-white" : "bg-white text-black"}`}>
      
        <div className="relative flex-col lg:flex-center items-center justify-center  rounded-3xl p-4 w-full md:w-full lg:w-full ">
          <button onClick={toggleTheme} className="px-5 py-2 rounded-3xl bg-blue-950 my-5 h border border-transparent hover:border hover:text-white hover:border-blue-950 transition-transform  md:mx-auto lg:ml-auto lg:mr-0  md:mr-5 sm:text-left sm:mr-0 sm:mx-auto">
               <h1>Theme</h1>
              {theme === "dark" ? <img src={lightImg}
              style={{ width: '24px', height: '24px', filter: 'invert(1)' }} /> 
              : <img src={darkImg}
              style={{ width: '24px', height: '24px', filter: 'invert(1)' }}/>}
          </button>
          <img
            id="imgAnimation"
            className="w-fit rounded-3xl opacity-0"
            src={houseImg}
            alt="apple"
            style={{ transform: 'translateX(0)', }}
          />
          
          <button onClick={handleButtonClick} className="mt-4 px-6 py-2  text-right bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300">
            {showDocumentation ? "Features" : "Exit features"}
          </button>
          {showDocumentation && (
            <div className="mt-4 p-4 bg-gray-200 rounded-lg text-black w-full flex-centergit ">
              <h2 className="text-lg font-semibold">Fetures</h2>
              <p>land size: 1/2 arce</p>
              <p>A four Bedroom  </p>
              <p>parking slot</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Model;
