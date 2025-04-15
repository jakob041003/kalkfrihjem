
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';

const TestPage = () => {
  // Sample test data
  const products = [
    {
      id: '1',
      name: 'BWT Perla Silk',
      price: '16.995 kr',
      capacity: '30 l/min',
      noiseLevel: 'Lav',
      userFriendliness: '5/5',
      image: 'https://via.placeholder.com/200',
      description: 'Premium blødgøringsanlæg med topkarakter for brugervenlighed og kvalitet. Perfekt til større familier.',
      pros: ['Meget brugervenlig', 'Lavt støjniveau', 'Kompakt design', 'Høj kapacitet'],
      cons: ['Høj pris', 'Kræver profesionel VVS-installation'],
      bestFor: 'Familier der ønsker et premium produkt med lang holdbarhed',
      reviewLink: '/bwt-perla-silk-test',
      affiliateLink: '#',
      isTopPick: true,
    },
    {
      id: '2',
      name: 'Water2Buy W2B800',
      price: '4.995 kr',
      capacity: '25 l/min',
      noiseLevel: 'Mellem',
      userFriendliness: '4/5',
      image: 'https://via.placeholder.com/200',
      description: 'Prisvenligt anlæg med god kapacitet og fin brugervenlighed. God værdi for pengene.',
      pros: ['God pris', 'Rimelig let at installere', 'God kapacitet'],
      cons: ['Middel støjniveau', 'Kræver mere vedligehold end dyrere modeller'],
      bestFor: 'Budget-bevidste familier der vil have et godt anlæg til prisen',
      reviewLink: '/water2buy-w2b800-test',
      affiliateLink: '#',
      isTopPick: false,
    },
    {
      id: '3',
      name: 'Danasoft Nexus',
      price: '8.495 kr',
      capacity: '27 l/min',
      noiseLevel: 'Meget lav',
      userFriendliness: '4/5',
      image: 'https://via.placeholder.com/200',
      description: 'Dansk kvalitetsanlæg uden brug af salt. Miljøvenligt alternativ med lavt støjniveau.',
      pros: ['Miljøvenlig (uden salt)', 'Meget støjsvag', 'Dansk produkt med god support'],
      cons: ['Lidt dyrere i indkøb', 'Ikke lige så effektiv som saltbaserede anlæg'],
      bestFor: 'Miljøbevidste forbrugere og familier der ønsker en dansk løsning',
      reviewLink: '/danasoft-nexus-test',
      affiliateLink: '#',
      isTopPick: false,
    },
    {
      id: '4',
      name: 'Aquaphor WaterBoss',
      price: '6.299 kr',
      capacity: '22 l/min',
      noiseLevel: 'Mellem',
      userFriendliness: '3/5',
      image: 'https://via.placeholder.com/200',
      description: 'Mellemklasse anlæg med god pris og ydeevne. God til små til mellemstore husstande.',
      pros: ['God pris-ydelses forhold', 'Kompakt design', 'Pålidelig'],
      cons: ['Ikke så brugervenlig interface', 'Gennemsnitlig støj'],
      bestFor: 'Små til mellemstore husstande med moderat vandforbrug',
      reviewLink: '/aquaphor-waterboss-test',
      affiliateLink: '#',
      isTopPick: false,
    },
    {
      id: '5',
      name: 'EcoWater eVOLUTION 600',
      price: '12.795 kr',
      capacity: '28 l/min',
      noiseLevel: 'Lav',
      userFriendliness: '5/5',
      image: 'https://via.placeholder.com/200',
      description: 'Avanceret smart-anlæg med app-styring og høj kapacitet. God til teknologi-interesserede.',
      pros: ['Smart-funktioner med app', 'Høj kapacitet', 'Energieffektiv', 'Stilrent design'],
      cons: ['Høj pris', 'App kan være kompleks for nogle'],
      bestFor: 'Teknologi-interesserede familier der ønsker smarte løsninger',
      reviewLink: '/ecowater-evolution-600-test',
      affiliateLink: '#',
      isTopPick: false,
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Test af Blødgøringsanlæg i Danmark 2025
          </h1>
          
          <div className="bg-light-gray p-6 rounded-lg mb-10">
            <p className="text-lg">
              Vi har testet og sammenlignet de mest populære blødgøringsanlæg i Danmark i 2025. 
              Vores tests fokuserer på kapacitet, brugervenlighed, støjniveau, pris og effektivitet for at hjælpe dig med at finde det rette anlæg til dit hjem.
            </p>
          </div>
          
          {/* Comparison table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-poppins">Produkt</th>
                  <th className="px-4 py-3 text-left font-poppins">Pris</th>
                  <th className="px-4 py-3 text-left font-poppins">Kapacitet</th>
                  <th className="px-4 py-3 text-left font-poppins">Støjniveau</th>
                  <th className="px-4 py-3 text-left font-poppins">Brugervenlighed</th>
                  <th className="px-4 py-3 text-center font-poppins"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr 
                    key={product.id} 
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      product.isTopPick ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="mr-4 w-16 h-16 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          {product.isTopPick && (
                            <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mt-1">
                              Bedste valg
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-medium">{product.price}</td>
                    <td className="px-4 py-4">{product.capacity}</td>
                    <td className="px-4 py-4">{product.noiseLevel}</td>
                    <td className="px-4 py-4">{product.userFriendliness}</td>
                    <td className="px-4 py-4 text-center">
                      <a 
                        href={product.affiliateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center text-sm hover:bg-blue-600 transition-colors"
                      >
                        Se pris <ArrowRight size={16} className="ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mini reviews */}
          <div className="space-y-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">Detaljeret gennemgang af anlæggene</h2>
            
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
                <div className={`p-6 ${product.isTopPick ? 'bg-blue-50' : 'bg-white'}`}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-[180px] max-h-[180px] object-contain"
                      />
                    </div>
                    
                    <div className="md:w-3/4 md:pl-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-poppins font-semibold">
                          {product.name}
                          {product.isTopPick && (
                            <span className="ml-3 inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">
                              Bedste valg
                            </span>
                          )}
                        </h3>
                        <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{product.description}</p>
                      
                      <div className="mb-4">
                        <div className="font-medium mb-2">Bedst til:</div>
                        <div className="bg-gray-100 inline-block px-3 py-1 rounded-full text-sm">
                          {product.bestFor}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="font-medium mb-2">Fordele:</div>
                          <ul className="space-y-1">
                            {product.pros.map((pro, index) => (
                              <li key={index} className="flex items-start">
                                <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="font-medium mb-2">Ulemper:</div>
                          <ul className="space-y-1">
                            {product.cons.map((con, index) => (
                              <li key={index} className="flex items-start">
                                <X size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={product.reviewLink} className="secondary-button text-center sm:text-left">
                          Læs hele anmeldelsen
                        </Link>
                        
                        <a 
                          href={product.affiliateLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cta-button text-center sm:text-left"
                        >
                          Se pris hos forhandler <ArrowRight size={18} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
