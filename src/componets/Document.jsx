// import React from 'react';
import { motion } from 'framer-motion';
import { Scrollama, Step } from 'react-scrollama';
import houseImg from '../../public/assets/images/house.jpg'; // Adjust the path as needed
// import houseImg from '../utils/houseImg.jpg'; // Adjust the path as needed

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

const generateImageFragments = (imageSrc, numFragments = 9) => {
  const fragments = [];
  const rows = Math.sqrt(numFragments);
  const cols = rows;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      fragments.push({
        src: imageSrc,
        style: {
          clipPath: `polygon(${(col / cols) * 100}% ${(row / rows) * 100}%, ${(col / cols) * 100}% ${((row + 1) / rows) * 100}%, ${((col + 1) / cols) * 100}% ${((row + 1) / rows) * 100}%, ${((col + 1) / cols) * 100}% ${(row / rows) * 100}%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        },
      });
    }
  }

  return fragments;
};

const Document = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nikola Tesla: The Master of Invention
      </motion.h1>
      <motion.p 
        className="text-center text-lg md:text-xl text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.
      </motion.p>
      
      <Scrollama onStepEnter={({ data }) => console.log(data)}>
        {inventions.map((invention, index) => (
          <Step data={index} key={index}>
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 mb-6 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="text-2xl font-semibold text-teal-400 mb-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {invention.title}
              </motion.h2>
              <p className="text-lg text-gray-300 mb-4">{invention.description}</p>
              <div className="relative w-full h-64">
                {generateImageFragments(invention.image).map((fragment, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full"
                    style={fragment.style}
                    initial={{ left: fragment.style.left, top: fragment.style.top }}
                    whileInView={{ left: '0%', top: '0%' }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  >
                    <img
                      src={fragment.src}
                      alt={invention.title}
                      className="w-full h-full object-cover"
                      style={{ clipPath: fragment.style.clipPath }}
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
