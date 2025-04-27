import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import ProductComparison from '../components/ProductComparison';
import AdvantagesSection from '../components/AdvantagesSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import DetailedContentSection from '../components/DetailedContentSection';
import PriceInfoSection from '../components/PriceInfoSection';
import InstallationGuideSection from '../components/InstallationGuideSection';

const HomePage = () => {
  // Sample product data
  const topProducts = [
    {
      id: '1',
      name: 'BWT Perla Silk',
      price: '16.995 kr',
      capacity: '30 l/min',
      type: 'Med salt',
      warranty: '5 år',
      image: 'https://via.placeholder.com/150',
      isTopPick: true,
      link: '#'
    },
    {
      id: '2',
      name: 'Water2Buy W2B800',
      price: '4.995 kr',
      capacity: '25 l/min',
      type: 'Med salt',
      warranty: '3 år',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      id: '3',
      name: 'Danasoft Nexus',
      price: '8.495 kr',
      capacity: '27 l/min',
      type: 'Uden salt',
      warranty: '2 år',
      image: 'https://via.placeholder.com/150',
      link: '#'
    }
  ];
  
  // Updated advantages data based on the new content
  const advantages = [
    {
      icon: '🧼',
      title: 'Mindre kalk',
      description: 'Slut med kalkpletter i bad, på fliser og i køkkenet - nemmere rengøring.'
    },
    {
      icon: '⚡',
      title: 'Spar energi',
      description: 'Et 2 mm kalklag i varmtvandsbeholderen kan øge energiforbruget med op til 15%.'
    },
    {
      icon: '🛁',
      title: 'Blødere hud',
      description: 'Sæbe skummer bedre i blødgjort vand, og huden føles mindre tør.'
    },
    {
      icon: '🔧',
      title: 'Længere levetid',
      description: 'Forlæng levetiden på dine hvidevarer, vandhaner og VVS-installationer.'
    }
  ];
  
  // Updated testimonials without personal names
  const testimonials = [
    {
      quote: 'Efter installation af blødgøringsanlæg er vores badeværelse meget nemmere at holde rent, og vi bruger markant mindre tid på afkalkning.',
      location: 'Slagelse',
      image: 'https://via.placeholder.com/150',
    },
    {
      quote: 'Vores hvidevarer holder længere nu, og vi kan mærke en betydelig forskel på vandkvaliteten i hele huset.',
      location: 'Roskilde',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div>
      {/* Hero section with background image */}
      <section className="relative min-h-[600px] flex items-center pt-16 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundPosition: 'center 60%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
              Få kalkfrit vand med det bedste blødgøringsanlæg
            </h1>
            <p className="text-xl mb-8">
              Spar tid på rengøring, forlæng levetiden på dine hvidevarer og sænk dit energiforbrug
            </p>
            <Link to="/test-blødgøringsanlæg" className="cta-button">
              Se vores test og anbefalinger <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages section */}
      <AdvantagesSection advantages={advantages} />
      
      {/* Product comparison section */}
      <section className="py-12 px-4 bg-light-gray">
        <div className="container mx-auto">
          <ProductComparison 
            products={topProducts} 
            title="Top 3 blødgøringsanlæg i 2025" 
            subtitle="Baseret på grundig test og sammenligning af kvalitet, pris og brugervenlighed" 
          />
        </div>
      </section>
      
      {/* Testimonials section */}
      <TestimonialSection testimonials={testimonials} />
      
      {/* Detailed Content Section */}
      <DetailedContentSection />
      
      {/* Price Info Section */}
      <PriceInfoSection />
      
      {/* Installation Guide Section */}
      <InstallationGuideSection />
      
      {/* CTA section */}
      <CTASection 
        title="Find dit perfekte blødgøringsanlæg i dag" 
        buttonText1="Se vores top anbefalinger"
        buttonLink1="/test-blødgøringsanlæg"
        buttonText2="Tjek din kommunes vandets hårdhed"
        buttonLink2="/kalk-i-danmark"
      />
    </div>
  );
};

export default HomePage;
