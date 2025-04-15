
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-poppins font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Beklager, vi kunne ikke finde den side, du leder efter</p>
        <p className="text-gray-500 mb-8">
          Siden du forsøger at besøge findes ikke eller er blevet fjernet. Prøv at gå tilbage til forsiden.
        </p>
        <Link to="/" className="cta-button">
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
