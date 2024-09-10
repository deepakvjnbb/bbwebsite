import React from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxSectionProps {
  mobileImage: string;
  desktopImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ mobileImage, desktopImage, children }) => {
  return (
    <Parallax
      bgImage={desktopImage} // Use desktop image by default
      bgImageAlt="the background"
      strength={500}
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
    >
      <div className="parallax-container flex flex-col justify-center items-center text-center w-full h-full overflow-x-hidden">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;




// import React from 'react';
// import { Parallax } from 'react-parallax';

// interface ParallaxSectionProps {
//   backgroundImage: string;
//   children: React.ReactNode;
// }

// const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
//   return (
//     <Parallax
//       bgImage={backgroundImage}
//       bgImageAlt="the background"
//       strength={500}
//       bgImageStyle={{
//         objectFit: 'cover',
//         width: '100%',
//         height: '100%',
//       }}
//       style={{
//         height: '100vh',
//         width: '100%',
//         margin: 0,
//         padding: 0,
//         willChange: 'transform', // Hint to the browser for optimization
//       }}
//     >
//       <div className="flex flex-col justify-center items-center text-center w-full h-full overflow-x-hidden">
//         {children}
//       </div>
//     </Parallax>
//   );
// };

// export default ParallaxSection;