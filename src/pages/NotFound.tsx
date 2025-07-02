
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4 text-white/90">404</h1>
        <p className="text-xl text-white/70 mb-4 font-light">Oops! Page not found</p>
        <a href="/" className="text-white/80 hover:text-white/90 underline transition-colors font-light">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
