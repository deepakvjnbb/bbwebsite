import React, { useEffect } from 'react';
import Rellax from 'rellax';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode; // ReactNode to allow any valid React child elements
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
  useEffect(() => {
    // Initialize Rellax for parallax effect
    new Rellax('.rellax', {
      speed: -2,
      center: true, // Centers the parallax effect
      round: true,
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="rellax relative h-screen flex flex-col justify-center items-center text-center"
    >
      {children}
    </section>
  );
};

export default ParallaxSection;