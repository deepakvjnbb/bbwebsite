import React, { useState } from 'react';
import './App.css';

const RibbonFalling: React.FC = () => {
  const [showRibbons, setShowRibbons] = useState(false);
  const numberOfRibbons = 30; // Adjust the number of ribbons

  const handleClick = () => {
    setShowRibbons(true);
    setTimeout(() => setShowRibbons(false), 2500); // Hide the ribbons after 5 seconds
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      {showRibbons && (
        <>
          {Array.from({ length: numberOfRibbons }).map((_, index) => (
            <div
              key={index}
              className="ribbon"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                animationDelay: `${index * 0.1}s`, // Staggered start based on index
              }}
            ></div>
          ))}
        </>
      )}
    </div>
  );
};

export default RibbonFalling;