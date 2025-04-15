
import React from 'react';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface AdvantagesSectionProps {
  advantages: Advantage[];
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ advantages }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-12">
          Fordele ved at installere et blødgøringsanlæg
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="text-4xl">{advantage.icon}</div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
