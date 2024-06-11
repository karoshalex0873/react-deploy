import { useState } from "react";
import {  darkImg,  lightImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import Documentation from "./Documentation";
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
        <h1>Theme</h1>
          <button onClick={toggleTheme} className="px-5 py-2 rounded-3xl bg-blue-950 my-5 h border border-transparent hover:border hover:text-white hover:border-blue-950 transition-transform  md:mx-auto lg:ml-auto lg:mr-0  md:mr-5 sm:text-left sm:mr-0 sm:mx-auto">
              {theme === "dark" ? <img src={lightImg}
              style={{ width: '24px', height: '24px', filter: 'invert(1)' }} /> 
              : <img src={darkImg}
              style={{ width: '24px', height: '24px', filter: 'invert(1)' }}/>}
          </button>
          <button onClick={handleButtonClick} className="mt-4 px-6 py-2  text-right bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300">
            {showDocumentation ? "Features" : "Exit features"}
          </button>
          {showDocumentation && (
           <h1>hello</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Model;
