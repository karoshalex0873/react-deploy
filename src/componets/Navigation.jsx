import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import ScrollTrigger from "gsap/ScrollTrigger"
import { appleImg, mouseImg } from "../utils"
gsap.registerPlugin(ScrollTrigger)

const Navigation = () => {
  useGSAP(()=>{
    gsap.to('#my-class', {
      scrollTrigger: {
        trigger: '#model',
        start: '30% bottom',
        // end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 0,
      y: 300,
      duration:1,
    });
    gsap.to('#hero',{opacity:1, y:-200, ease:'power2.out', delay:1.5, duration:2})
    gsap.to('#greetings',{opacity:1, y:300 ,ease:'power2.out',delay:2, duration:3})
    gsap.to('#mouse',{opacity:1,ease:'power4', delay:3, duration:3,y:100})
    if (window.innerWidth <= 900){
      gsap.to('#hero',{opacity:1, y:-100, ease:'power2.out', delay:1.5, duration:2})
      gsap.to('#greetings',{opacity:1, y:400 ,ease:'power2.out',delay:2, duration:3})
      gsap.to('#mouse',{opacity:1,ease:'power4', delay:3, duration:3,y:-50})
    }
  })
  return (
    <>
    <div  id="my-class" className="flex flex-center flex-col h-[100vh] gap-3 m-3">
      <h1 id="greetings" className="section-heading">WHERE ART MEET 👋 POWER </h1>

       <div className=" flex  w-full  common-padding flex-col">
        <h1 id="hero"  className="hero-title  flex w-full flex-center flex-col ">
         <img  src={appleImg}
         style={{ width: '300px', height: '300px', filter: 'invert(1)' }}
         />
        </h1>
       </div>
        <div className=" flex flex-center fle-col">
            <img id="mouse" className="flex flex-center opacity-0 "
            src={mouseImg} alt="scroll"
            style={{ width: '70px', height: '70px', filter: 'invert(1)' }}
            />
            <h2 id="mouse" className=" text-white lg:text-3xl md:text-2xl text-1xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">scroll down</h2>
        </div>
    </div>
    </>
   
  )
}

export default Navigation
