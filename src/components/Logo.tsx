const Logo = ({
  className = "h-8 w-auto"
}: {
  className?: string;
}) => {
  return <div className={`flex items-center space-x-2 ${className}`}>
      {/* User's uploaded PNG logo */}
      <img alt="HuxCo Logo" src="/lovable-uploads/daa29430-c3d5-4166-af36-e9605589f512.png" className="h-6 w-6 object-cover" />
      
      {/* Clean, minimal typography */}
      <span className="text-xl font-light tracking-wide text-white">
        HuxCo
      </span>
    </div>;
};
export default Logo;