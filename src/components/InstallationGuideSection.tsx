import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Wrench, ArrowRight } from 'lucide-react';

const InstallationGuideSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-center mb-8">
            Installation og vedligeholdelse
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Placering og montering</h3>
                <p className="text-gray-700 mb-4">
                  Enheden monteres på hovedvandstilledningen, ofte i bryggerset eller teknikrummet. 
                  Der skal være afløb til regenererings­vandet og en stikkontakt til styringen.
                </p>
                <div className="p-4 bg-yellow-50 rounded-md flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800">
                    Sørg for, at der installeres en bypass-ventil, så du kan få rå vand ved f.eks. havevandingshanen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-5 border border-gray-100 rounded-md bg-gray-50">
                <h4 className="font-semibold mb-2">Første idriftsættelse</h4>
                <p className="text-sm text-gray-600">
                  VVS-installatøren tester vandhårdheden før og efter og justerer resthårdhed til 6-8 °dH (myndighedernes anbefaling).
                </p>
              </div>
              
              <div className="p-5 border border-gray-100 rounded-md bg-gray-50">
                <h4 className="font-semibold mb-2">Saltpåfyldning</h4>
                <p className="text-sm text-gray-600">
                  Brug altid tablet- eller blocksalt af høj kvalitet for at undgå urenheder i anlægget.
                </p>
              </div>
              
              <div className="p-5 border border-gray-100 rounded-md bg-gray-50">
                <h4 className="font-semibold mb-2">Årlig service</h4>
                <p className="text-sm text-gray-600">
                  Kontrollér harpiksmængden, rengør salttanken, og udskift evt. for-/efterfiltre.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-5 text-center">Miljø og bæredygtighed</h3>
            
            <p className="mb-6">
              Nogle bekymrer sig om natrium­udledning fra saltbaserede anlæg. Mængden er dog relativt lille: 
              For en gennemsnitsfamilie svarer det til den natrium­mængde, du finder i to skiver toastbrød om dagen. 
              Til gengæld sparer du miljøet for adskillige kilo rengøringsmidler årligt og reducerer boligens el- eller gasforbrug markant.
            </p>
            
            <div className="mt-8 text-center">
              <Link 
                to="/installation" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Læs vores komplette installationsguide <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuideSection; 