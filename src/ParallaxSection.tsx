const ParallaxSection: React.FC<{ backgroundImage: string; children: React.ReactNode }> = ({
    backgroundImage,
    children,
  }) => {
    
    return (
      <div
      
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    );
  };
export default ParallaxSection;

{/* <div className="relative isolate overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
