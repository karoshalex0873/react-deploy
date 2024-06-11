import { motion } from 'framer-motion';
import { Scrollama, Step } from 'react-scrollama';
import { houseImg } from '../utils';

const inventions = [
  {
    title: 'Alternating Current (AC)',
    description: 'Tesla developed the alternating current (AC) electrical system, which is widely used today for power distribution.',
    image: {houseImg}
  },
  {
    title: 'Tesla Coil',
    description: 'The Tesla Coil is a type of resonant transformer circuit invented by Tesla in 1891.',
    image: {houseImg}
  },
  // Add more inventions here
];

const Documentation = () => {
  return (
    <div className="documentation screen-max-width">
      <h1 className="hero-title">Nikola Tesla: The Master of Invention</h1>
      <p className="text-center text-lg md:text-xl text-white mb-10">Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.</p>
      
      <Scrollama onStepEnter={({ data }) => console.log(data)}>
        {inventions.map((invention, index) => (
          <Step data={index} key={index}>
            <div className="invention-section common-padding">
              <h2 className="section-heading">{invention.title}</h2>
              <p className="feature-text">{invention.description}</p>
              <motion.img
                src={invention.image}
                alt={invention.title}
                className="feature-video"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default Documentation;
