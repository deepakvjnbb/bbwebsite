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
      style={{ minHeight: '60vh', margin: 0, padding: 0 }} // Remove margin and padding
    >
      <div className="flex flex-col justify-center items-center text-center m-0 p-0">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;