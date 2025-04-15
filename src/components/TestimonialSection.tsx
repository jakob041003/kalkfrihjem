
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-12">
          Det siger vores kunder
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
