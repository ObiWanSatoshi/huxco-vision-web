
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(hsla(210, 15%, 25%, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsla(210, 15%, 25%, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-pulse 8s ease-in-out infinite'
        }}
      />
    </div>
  );
};

export default GridOverlay;
