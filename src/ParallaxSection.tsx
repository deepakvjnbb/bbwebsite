const ParallaxSection: React.FC<{ backgroundImage: string; children: React.ReactNode }> = ({
    backgroundImage,
    children,
  }) => {
    
    return (
      <div
      
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
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
