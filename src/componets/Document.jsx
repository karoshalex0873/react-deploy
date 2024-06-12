// import React from 'react';
import { motion } from 'framer-motion';
import { Scrollama, Step } from 'react-scrollama';
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
              className="bg-gray-800 rounded-lg p-6 mb-6 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-teal-400 mb-2">{invention.title}</h2>
              <p className="text-lg text-gray-300 mb-4">{invention.description}</p>
              <motion.img
                src={invention.image}
                alt={invention.title}
                className="w-full rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default Document;
