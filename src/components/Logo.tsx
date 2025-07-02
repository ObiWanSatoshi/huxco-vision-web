
const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* User's uploaded PNG logo */}
      <img 
        src="/placeholder.svg" 
        alt="HuxCo Logo" 
        className="h-6 w-6"
      />
      
      {/* Clean, minimal typography */}
      <span className="text-xl font-light tracking-wide text-white">
        HuxCo
      </span>
    </div>
  );
};

export default Logo;
