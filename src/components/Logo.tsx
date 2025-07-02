
const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Geometric logo - ascending triangular shapes representing growth and technology */}
      <div className="flex items-end space-x-0.5">
        <div className="w-1.5 h-3 bg-white/60 transform rotate-45 origin-bottom"></div>
        <div className="w-1.5 h-4 bg-white/80 transform rotate-45 origin-bottom"></div>
        <div className="w-1.5 h-5 bg-white transform rotate-45 origin-bottom"></div>
      </div>
      
      {/* Clean, minimal typography */}
      <span className="text-xl font-light tracking-wide text-white">
        HuxCo
      </span>
    </div>
  );
};

export default Logo;
