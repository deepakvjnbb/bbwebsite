import React, { useRef, useState, useLayoutEffect } from 'react';
import ParallaxSection from './ParallaxSection';
// import { Link } from 'react-router-dom';
import bblogo1 from './photos/bbtrslogo4444C.png';
import Whatwedo from './Whatwedo';
// import React, {  } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import RibbonFalling from './RibbonFalling';



const Main: React.FC = () => {
  const [showWhatwedo, setShowWhatwedo] = useState<boolean>(false);
  const whatwedoRef = useRef<HTMLDivElement>(null);

  const toggleWhatwedoSection = () => {
    setShowWhatwedo(true); // Only show the section, not toggling
    <RibbonFalling/>
  };

  const hideWhatwedoSection = () => {
    setShowWhatwedo(false); // Hide the section when the "Hide Details" button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional for smooth scrolling
    });
  };

  // Scroll to the Whatwedo section after it becomes visible
  useLayoutEffect(() => {
    if (showWhatwedo && whatwedoRef.current) {
      whatwedoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showWhatwedo]);

return(
    <div>
<ParallaxSection backgroundImage="/images/pic1.jpg">
<nav aria-label="Global" className="fixed top-0 left-0 p-6 lg:px-8 ">
      <div className="p-1.5">
        <a href="#">
          <span className="sr-only">Your Company</span>
          <img alt="Company Logo" src={bblogo1} className="h-28 w-auto" />
        </a>
      </div>
    </nav>
        <h1 className="text-5xl text-white font-bold p-6">Craving for the latest in innovation?
</h1>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/images/pic9.jpg">
        <h1 className="text-5xl text-white font-bold p-6">Looking for sleek, cutting-edge designs?</h1>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/images/pic8.jpg">
        <h1 className="text-5xl text-white font-bold p-6">Wanting something effortless and user-friendly?</h1>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/images/pic5.jpg">
        <h1 className="text-5xl text-white font-bold p-6">Seeking both striking and dependable solutions?</h1>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/images/pic3.jpg">
        <h1 className="text-5xl text-white font-bold p-6">Desiring great value without compromise?
</h1>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/images/pic7.jpg">
        <div className="flex flex-col items-center justify-center h-full text-start">
          <h1 className="text-5xl text-white font-bold p-6">
            We are not fashion people, We are software developers.<br /> We are Backbench Company.
          </h1>
          <div className="mt-8">
            <button
              type="submit"
              onClick={toggleWhatwedoSection}
              className="rounded-md bg-orange-700 px-6 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            
            >  
              For business enquiries and more click here. 
              {/* <FontAwesomeIcon icon={faArrowPointer} className="mr-2 ml-2" /> */}
  
            </button>
          </div>
        </div>
      </ParallaxSection>

      {showWhatwedo && (
        <div
          id="whatwedo-section"
          ref={whatwedoRef}
          className="bg-white px-0 py-0"
        >
          <Whatwedo />
          <div className="text-center relative">
         
                <div>
                  <button 
                  onClick={hideWhatwedoSection}
                  className="rounded-md bg-orange-700 px-6 py-3 mb-12 text-center text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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