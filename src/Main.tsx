import React, { useRef, useState, useLayoutEffect } from 'react';
import ParallaxSection from './ParallaxSection';
import bblogo1 from './photos/bbtrslogo4444C.png';
import Whatwedo from './Whatwedo';
import RibbonFalling from './RibbonFalling';
import './App.css'; // Ensure the path is correct


const Main: React.FC = () => {
  const [showWhatwedo, setShowWhatwedo] = useState<boolean>(false);
  const whatwedoRef = useRef<HTMLDivElement>(null);

  const toggleWhatwedoSection = () => {
    setShowWhatwedo(true); // Only show the section, not toggling
    <RibbonFalling />
  };

  const hideWhatwedoSection = () => {
    setShowWhatwedo(false); // Hide the section when the "Hide Details" button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional for smooth scrolling
    });
  };

  // Scroll to the Whatwedo section after it becomes visible
  useLayoutEffect(() => {
    if (showWhatwedo && whatwedoRef.current) {
      whatwedoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showWhatwedo]);

  return (
    <div className="m-0 p-0">
 
 <ParallaxSection imageClass="pic1">
  <nav aria-label="Global" className="fixed top-0 left-0 p-6 lg:px-8">
    <div className="flex top-4 left-4 p-1.5">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img alt="Company Logo" src={bblogo1} className="h-16 md:h-20 lg:h-24 w-auto" />
      </a>
    </div>
  </nav>
  <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
      Craving for the latest in innovation?
    </h1>
  </div>
</ParallaxSection>


<ParallaxSection  imageClass='pic9'>
  <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold p-6">
      Looking for sleek, cutting-edge designs?
    </h1>
  </div>
</ParallaxSection>

    
<ParallaxSection  imageClass='pic8'>
      {/* <div className="flex justify-center items-center w-full h-screen">  */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold p-6">
          Wanting something effortless and user-friendly?
        </h1>
        </div>
      </ParallaxSection>

      
      <ParallaxSection  imageClass='pic5'>
      {/* <div className="flex justify-center items-center w-full h-screen">  */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold p-6">
          Seeking both striking and dependable solutions?
        </h1>
        </div>
      </ParallaxSection>

      <ParallaxSection  imageClass='pic3'>
      {/* <div className="flex justify-center items-center w-full h-screen">  */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold p-6">
          Desiring great value without compromise?
        </h1>
      </div>
      </ParallaxSection>

      
      <ParallaxSection  imageClass='pic7'>
  {/* <div className="flex flex-col justify-center items-center w-full min-h-screen p-6">  */}
  <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden p-6"> 
    <h1 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold">
      We are not fashion people, We are software developers.<br /> We are Backbench Company.
    </h1>
    <button
      type="submit"
      onClick={toggleWhatwedoSection}
      className="mt-8 rounded-md bg-orange-700 px-4 py-2 sm:px-6 sm:py-3 text-center text-sm sm:text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      For business enquiries and more click here.
    </button>
  </div>
</ParallaxSection>

      {showWhatwedo && (
        <div id="whatwedo-section" ref={whatwedoRef} className="bg-white px-0 py-0">
          <Whatwedo />
          <div className="text-center relative">
            <div>
              <button
                onClick={hideWhatwedoSection}
                className="rounded-md bg-orange-700 px-4 py-2 sm:px-6 sm:py-3 mb-8 sm:mb-12 text-center text-sm sm:text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;