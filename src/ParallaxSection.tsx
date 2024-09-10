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
      strength={500}
      bgImageStyle={{
        objectFit: 'cover',  // Ensures no stretching and maintains aspect ratio
        width: '100%',       // Ensures the image covers the full width
        height: '100%',      // Ensures the image covers the full height
      }}
      style={{
        height: '100vh',     // Makes each section take up the full viewport height
        width: '100%',       // Ensures the section fills the entire viewport width
        margin: 0,           // Removes unwanted margin
        padding: 0,          // Removes unwanted padding
      }}
    >
      <div className="flex flex-col justify-center items-center text-center w-full h-full overflow-x-hidden">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;