
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  buttonText1: string;
  buttonLink1: string;
  buttonText2: string;
  buttonLink2: string;
  bgColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2,
  bgColor = 'bg-blue-50',
}) => {
  return (
    <div className={`${bgColor} py-16 px-4`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">{title}</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <Link to={buttonLink1} className="cta-button">
            {buttonText1}
          </Link>
          
          <Link to={buttonLink2} className="secondary-button">
            {buttonText2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
