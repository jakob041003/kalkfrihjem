import React from 'react';

const PriceInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-12">
          Pris, totaløkonomi og besparelsespotentiale
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <h3 className="font-poppins font-semibold text-xl mb-3">Anlæg</h3>
            <p className="text-3xl font-bold text-blue-600 mb-3">6.000 - 12.000 kr.</p>
            <p className="text-gray-600">Afhængigt af kapacitet og smart-funktioner</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <h3 className="font-poppins font-semibold text-xl mb-3">Installation</h3>
            <p className="text-3xl font-bold text-blue-600 mb-3">3.000 - 6.000 kr.</p>
            <p className="text-gray-600">For en autoriseret VVS-montør</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <h3 className="font-poppins font-semibold text-xl mb-3">Årlig drift</h3>
            <p className="text-3xl font-bold text-blue-600 mb-3">300 - 600 kr.</p>
            <p className="text-gray-600">Til salt og service</p>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="font-poppins font-semibold text-xl mb-4 text-center">Hvornår er investeringen tjent hjem?</h3>
          
          <p className="mb-4">
            Typisk betaler investeringen sig hjem på <strong className="text-blue-600">4-6 år</strong> gennem:
          </p>
          
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Lavere energiforbrug (op til 15% på opvarmning af vand)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Færre reparationer og længere levetid på hvidevarer</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Mindre forbrug af rengøringsmidler og kemikalier</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Færre udgifter til afkalkningsmidler</span>
            </li>
          </ul>
          
          <p>
            For sommerhuse kan tilbage­betalingstiden være længere, men komfort­gevinsten er stadig tydelig.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceInfoSection; 