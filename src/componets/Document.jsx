// import React from 'react';
import { motion } from 'framer-motion';
import { Scrollama, Step } from 'react-scrollama';
// import houseImg from '../utils/houseImg.jpg'; // Adjust the path as needed
import houseImg from '../../public/assets/images/house.jpg'; // Adjust the path as needed

const inventions = [
  {
    title: 'Alternating Current (AC)',
    description: 'Tesla developed the alternating current (AC) electrical system, which is widely used today for power distribution.',
    image: houseImg
  },
  {
    title: 'Tesla Coil',
    description: 'The Tesla Coil is a type of resonant transformer circuit invented by Tesla in 1891.',
    image: houseImg
  },
  // Add more inventions here
];

const generateRandomShapes = (numFragments = 9) => {
  const shapes = [];

  for (let i = 0; i < numFragments; i++) {
    shapes.push({
      clipPath: `polygon(${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%)`,
      opacity: 0,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
    });
  }

  return shapes;
};

const Document = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }} // Adjust transition duration and easing
      >
        Nikola Tesla: The Master of Invention
      </motion.h1>
      <motion.p 
        className="text-center text-lg md:text-xl text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }} // Adjust transition duration, delay, and easing
      >
        Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.
      </motion.p>
      
      <Scrollama onStepEnter={({ data }) => console.log(data)}>
        {inventions.map((invention, index) => (
          <Step data={index} key={index}>
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 mb-6 overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }} // Adjust transition duration and easing
            >
              <motion.h2 
                className="text-2xl font-semibold text-teal-400 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }} // Adjust transition duration, delay, and easing
              >
                {invention.title}
              </motion.h2>
              <p className="text-lg text-gray-300 mb-4">{invention.description}</p>
              <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
                {generateRandomShapes(25).map((shape, i) => (
                  <motion.div
                    key={i}
                    className="w-1/5 h-1/5"
                    style={{ clipPath: shape.clipPath, opacity: shape.opacity, x: shape.x, y: shape.y }}
                    initial={{ opacity: 0, x: '50%', y: '50%' }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.02, ease: 'easeInOut' }} // Adjust transition duration, delay, and easing
                  >
                    <img
                      src={invention.image}
                      alt={invention.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default Document;
