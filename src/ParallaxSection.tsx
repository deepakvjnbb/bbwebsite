import React from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
  return (
    <Parallax
      bgImage={backgroundImage}
      bgImageAlt="the background"
      strength={300} // Controls the depth of the parallax effect
      style={{ height: '100vh' }} // Full screen height for the section
    >
      <div className="flex flex-col justify-center items-center text-center h-full">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;