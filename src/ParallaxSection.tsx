import React from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative h-screen flex flex-col justify-center items-center text-center"
    >
      {children}
    </section>
  );
};

export default ParallaxSection;