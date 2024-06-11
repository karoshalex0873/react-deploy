import { useState, useEffect } from 'react';

const loadParticles = async (setParticlesLoaded) => {
  const { tsParticles } = await import('https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm');
  const { loadAll } = await import('https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm');

  await loadAll(tsParticles);

  const options = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#000"
      }
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "resize": {
          "delay": 0.5,
          "enable": true
        }
      },
      "modes": {
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        },
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4,
          "mix": false
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad"
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        }
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "collisions": {
        "absorb": {
          "speed": 5
        },
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "enable": false,
        "maxSpeed": 50,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#FF0000",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "speed": 10,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "mode": "percent",
          "radius": 0
        },
        "direction": "none",
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": false,
          "delay": {
            "value": 0
          },
          "enable": true,
          "options": {
            "sides": 6,
            "turnSteps": 30,
            "angle": 30
          },
          "generator": "polygonPathGenerator"
        },
        "outModes": {
          "default": "destroy",
          "bottom": "destroy",
          "left": "destroy",
          "right": "destroy",
          "top": "destroy"
        },
        "speed": 3,
        "trail": {
          "enable": true,
          "length": 20,
          "fill": {
            "color": {
              "value": "#000"
            }
          }
        }
      },
      "number": {
        "density": {
          "enable": true,
          "width": 1920,
          "height": 1080
        },
        "limit": {
          "mode": "delete",
          "value": 0
        },
        "value": 0
      },
      "opacity": {
        "value": 1
      },
      "reduceDuplicates": false,
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 2
      },
      "zIndex": {
        "value": 0
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "zLayers": 100,
    "emitters": {
      "autoPlay": true,
      "fill": true,
      "rate": {
        "quantity": 1,
        "delay": 0.25
      },
      "shape": {
        "type": "square"
      },
      "position": {
        "x": 50,
        "y": 50
      }
    },
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    }
  };

  await tsParticles.load({ id: "tsparticles", options });
  setParticlesLoaded(true);
};

const Part = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    loadParticles(setParticlesLoaded);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-transparent text-white">
      {particlesLoaded && <div id="tsparticles" className="absolute top-0 left-0 w-full h-full" />}
      <div className="relative z-10">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Part;
