
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-tech-accent/20 rotate-45 animate-float-slow" />
      <div className="absolute top-40 right-20 w-1 h-8 bg-white/10 animate-float-medium" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 border border-white/20 rotate-45 animate-float-fast" />
      <div className="absolute top-1/3 right-1/3 w-1 h-12 bg-tech-accent/30 rotate-12 animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/15 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-10 w-6 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float-medium" />
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 border border-tech-accent/20 animate-spin-slow" />
    </div>
  );
};

export default FloatingElements;
