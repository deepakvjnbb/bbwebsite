import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css'; // Import your CSS

interface ParallaxSectionProps {
  imageClass: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageClass, children }) => {
  // Dynamically require the background image based on imageClass
  const getImage = (imageClass: string) => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 767;
  
    try {
      return require(`/src/images/${imageClass}.jpg`);
    } catch (error) {
      console.error(`Error loading image for ${imageClass}:`, error);
      return '';
    }
  };

  return (
    <Parallax
      bgImage={getImage(imageClass)} // Dynamically set the image
      bgImageAlt="the background"
      strength={100} // Adjust as needed
      bgImageStyle={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
      style={{
        height: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        willChange: 'transform',
      }}
      className={`parallax-container ${imageClass}`}
    >
      <div className="flex flex-col justify-center items-center text-center w-full h-full overflow-x-hidden">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;