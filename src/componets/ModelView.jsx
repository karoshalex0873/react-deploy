import { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { houseImg, setImg } from "../utils";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Model from './Model';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ModelView = () => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const sectionIntoView = useRef(null);

  const handleCustomizeClick = () => {
    setIsCustomizeOpen(!isCustomizeOpen); // Toggle the state to open/close the customize div
  };

  const scrollToSection = (sectionRef) => {
    gsap.to(window, {
      scrollTo: {
        y: sectionRef.current,
        offsetY: 0
      },
      duration: 1,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    if (isCustomizeOpen) {
      scrollToSection(sectionIntoView);
    }
  }, [isCustomizeOpen]);

  useGSAP(() => {
    if (!isCustomizeOpen) {
      gsap.to("#view", {
        scrollTrigger: {
          trigger: "#view",
          start: "30% bottom",
          toggleActions: "play reverse play reverse",
        },
        ease: 'power4.out',
        top: 0
      });
      gsap.to("#model", {
        scrollTrigger: {
          trigger: "#view",
          start: "30% bottom",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: -100,
        ease: "power2.inOut"
      });

      gsap.to("#loading", {
        opacity: 1
      });

      gsap.to("#loading", {
        scrollTrigger: {
          trigger: "#view",
          start: "30% bottom",
          toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        delay: 2
      });

      gsap.to("#view", {
        scrollTrigger: {
          trigger: "#view",
          start: "30% bottom",
          toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        y: -100,
        ease: "power2.inOut"
      });

      gsap.to("#showing", {
        scrollTrigger: {
          trigger: "#view",
          start: "30% bottom",
          toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        delay: 2
      });

      if (window.innerWidth >=1000) { // Apply animations for large devices
        gsap.to("#imgAnimation", {
          scrollTrigger: {
            trigger: "#view",
            start: "30% bottom",
            toggleActions: "play reverse play reverse"
          },
          toggleActions: "play reverse play reverse",
          opacity: 1,
          x: "100%", // Move the image to the left
          delay: 1.5, // Delay the animation for 3 seconds
          duration: 2,
          onComplete: () => {
            gsap.to("#paragraphAnimation", {
              opacity: 1,
              toggleActions: "play reverse play reverse",
              x: "-100%", // Move the paragraph to the left (opposite direction)
              duration: 1, // Set duration for the animation
              ease: "power4.out", // Use ease animation
              delay: 1,
              onComplete: () => {
                gsap.to("#customizebtn", {
                  opacity: 1
                });
              }
            });
          }
        });
      } else { // Apply animations for medium and small devices
        gsap.to("#imgAnimation", {
          scrollTrigger: {
            trigger: "#view",
            start: "30% bottom",
            toggleActions: "play reverse play reverse"
          },
          toggleActions: "play reverse play reverse",
          opacity: 1,
          y: "-50",
          duration: 2,
          delay: 3, // Delay the animation for 3 seconds
          onComplete: () => {
            gsap.to("#paragraphAnimation", {
              opacity: 1,
              y: '-100',
              toggleActions: "play reverse play reverse",
              duration: 1.5, // Set duration for the animation
              ease: "power4.out", // Use ease animation
              delay: 1,
              textAlign: "left",
              onComplete: () => {
                gsap.to("#customizebtn", {
                  opacity: 1
                });
              }
            });
          }
        });
      }
    }
  });

  return (
    <div id="view" className="flex flex-col items-center common-padding rounded-3xl w-full p-4 scroll-smooth">
      <h1 id="model" className="text-gray-500 lg:text-6xl md:text-5xl text-3xl mb-5 lg:mb-0 font-medium">Get a closer look</h1>
      <h1 id="loading" className="section-heading pb-20 mt-0 md">Loading . . .</h1>
      <div id="showing" className="flex flex-col lg:flex-row mt-5 md:mt-10 items-center opacity-0 md; ">
        <img id="imgAnimation"
          className="w-full md:w-5/6 sm:w-3/4 lg:w-1/2 lg:ml-auto lg:mr-0 md:mx-auto md:mr-5 opacity-0 feature-video-container p-2 md:p-4  rounded-3xl "
          src={houseImg}
          alt="apple"
          style={{ transform: 'translateX(0)' }} // Set x property to zero
        />
        <div className="lg:w-1/2 lg:ml-0 lg:mr-auto md:w-full md:ml-auto md:mr-auto text-right lg:text-left mt-5 lg:mt-0 lg:pl-10">
          <p id="paragraphAnimation" className="text-1xl md:text-1xl lg:text-3xl font-italiano opacity-0 pr-11">
            The iPhone has become a symbol of innovation and technological advancement since its launch in 2007. Its sleek design, user-friendly interface, and powerful capabilities have revolutionized the way we communicate, work, and entertain ourselves.
          </p>
        </div>
      </div>
      <div className=" h-fit flex-col md:common-padding pt-0 " >
        <button id="customizebtn" className="btn opacity-0 lg:text-3xl md:text-2xl md:ml-0 md:mr-auto flex gap-5 items-center sm:mt-60 " onClick={handleCustomizeClick}> 
          <img className="bg-white rounded-full cursor-pointer" src={setImg} alt="settings" style={{ width: '28px', height: '28px', filter: 'invert(1)' }} onClick={() => scrollToSection(sectionIntoView)} />
          Customize
        </button>
        {isCustomizeOpen && (
          <div ref={sectionIntoView} id="customize-div" className={`customize-div rounded-3xl ${isCustomizeOpen ? 'open' : 'closed'} m-0 p-0`}>
            {/* Contents of the customize div */}
            <Model />
          </div>
        )}
      </div>
    </div>
  )
}

export default ModelView;
