
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import CTASection from '../components/CTASection';

const KalkKortPage = () => {
  // Example data for the map
  const waterHardnessData = [
    { region: 'Hovedstadsområdet', level: 'Hårdt til meget hårdt', dH: '18-30°dH', color: 'bg-red-500' },
    { region: 'Nordsjælland', level: 'Hårdt til meget hårdt', dH: '18-25°dH', color: 'bg-red-500' },
    { region: 'Aarhus', level: 'Meget hårdt', dH: '20-30°dH', color: 'bg-red-700' },
    { region: 'Aalborg', level: 'Middelhårdt til hårdt', dH: '12-18°dH', color: 'bg-orange-500' },
    { region: 'Odense', level: 'Hårdt', dH: '16-20°dH', color: 'bg-red-500' },
    { region: 'Esbjerg', level: 'Middelhårdt', dH: '10-15°dH', color: 'bg-orange-400' },
    { region: 'Roskilde', level: 'Hårdt', dH: '17-22°dH', color: 'bg-red-500' },
    { region: 'Vejle', level: 'Hårdt', dH: '15-20°dH', color: 'bg-red-500' },
    { region: 'Herning', level: 'Middelhårdt', dH: '8-15°dH', color: 'bg-orange-400' },
    { region: 'Randers', level: 'Hårdt til meget hårdt', dH: '18-25°dH', color: 'bg-red-500' },
    { region: 'Kolding', level: 'Hårdt', dH: '16-22°dH', color: 'bg-red-500' },
    { region: 'Horsens', level: 'Hårdt til meget hårdt', dH: '18-24°dH', color: 'bg-red-500' },
    { region: 'Næstved', level: 'Hårdt', dH: '15-20°dH', color: 'bg-red-500' },
    { region: 'Viborg', level: 'Middelhårdt til hårdt', dH: '12-18°dH', color: 'bg-orange-500' },
    { region: 'Silkeborg', level: 'Hårdt', dH: '15-20°dH', color: 'bg-red-500' },
    { region: 'Sønderborg', level: 'Middelhårdt', dH: '10-16°dH', color: 'bg-orange-400' },
    { region: 'Holbæk', level: 'Hårdt', dH: '16-22°dH', color: 'bg-red-500' },
    { region: 'Hjørring', level: 'Middelhårdt', dH: '10-15°dH', color: 'bg-orange-400' },
    { region: 'Bornholm', level: 'Middel til hårdt', dH: '12-18°dH', color: 'bg-orange-500' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Kalk i Danmark - Se vandets hårdhed hvor du bor
          </h1>
          
          {/* Introduction */}
          <div className="bg-light-gray p-6 rounded-lg mb-10">
            <p className="text-lg">
              Vandets hårdhed varierer meget rundt i Danmark. I denne oversigt kan du se, om vandet i dit område er blødt, middelhårdt eller meget hårdt,
              og dermed om det kunne give mening at investere i et blødgøringsanlæg.
            </p>
          </div>
          
          {/* Water hardness map / visual */}
          <section className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-poppins font-semibold">
                Kalkkortet – Vandets hårdhed i Danmark
              </h2>
              
              <a 
                href="https://kort.geus.dk" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm flex items-center hover:underline"
              >
                <Info size={16} className="mr-1" />
                Kilde: GEUS
              </a>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Vandets hårdhed</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm">Blødt (0-10°dH)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-400 rounded-full mr-2"></div>
                      <span className="text-sm">Middel (10-18°dH)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm">Hårdt (18-30°dH)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for the actual map */}
              <div className="h-[400px] bg-blue-50 flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">
                    Her ville et interaktivt kort over Danmark med farveindikation af vandets hårdhed være ideelt.
                  </p>
                  <p className="text-sm text-gray-500">
                    Den faktiske implementering ville kræve et kort-API eller et statisk kortbillede.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg mb-8">
              <div className="flex items-start">
                <Info size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-2 font-medium">Hvad betyder vandets hårdhed?</p>
                  <p className="text-gray-700">
                    Vandets hårdhed måles i tyske hårdhedsgrader (°dH) og fortæller, hvor meget kalk (calcium og magnesium) der er i vandet. 
                    Jo højere tal, jo mere kalk. I Danmark betragtes vand over 18°dH som hårdt, og her vil et blødgøringsanlæg ofte være 
                    en god investering.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Hardness table by region */}
          <section className="mb-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">
              Oversigt over vandets hårdhed i danske byer
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left font-poppins">By/område</th>
                    <th className="px-4 py-3 text-left font-poppins">Hårdheds-niveau</th>
                    <th className="px-4 py-3 text-left font-poppins">Hårdhedsgrad</th>
                    <th className="px-4 py-3 text-left font-poppins">Anbefaling</th>
                  </tr>
                </thead>
                <tbody>
                  {waterHardnessData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-medium">{item.region}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                          <span>{item.level}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">{item.dH}</td>
                      <td className="px-4 py-4">
                        {item.dH.startsWith('18') || parseInt(item.dH) > 18 ? (
                          <span className="text-green-600">Blødgøringsanlæg anbefales</span>
                        ) : item.dH.startsWith('10') || parseInt(item.dH) > 10 ? (
                          <span className="text-orange-600">Kan give mening</span>
                        ) : (
                          <span className="text-gray-600">Mindre relevant</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* Find your local hardness */}
          <section className="mb-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">
              Find vandets hårdhed hvor du bor
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="mb-6">
                Den nøjagtige hårdhed af dit vand afhænger af dit lokale vandværk. Du kan finde detaljerede oplysninger om dit vands hårdhed på følgende måder:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-primary font-bold">1.</div>
                  <div>
                    <p><strong>Besøg dit vandværks hjemmeside</strong></p>
                    <p className="text-gray-600">De fleste vandværker offentliggør vandkvalitetsdata, herunder hårdheden.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-primary font-bold">2.</div>
                  <div>
                    <p><strong>Kontakt dit vandværk direkte</strong></p>
                    <p className="text-gray-600">Ring eller email til dit lokale vandværk og spørg om vandets hårdhed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-primary font-bold">3.</div>
                  <div>
                    <p><strong>Brug GEUS' kort over grundvandets hårdhed</strong></p>
                    <p className="text-gray-600">På <a href="https://kort.geus.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GEUS' kortportal</a> kan du se en detaljeret oversigt.</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-medium text-yellow-800">
                  Bemærk: Vandets hårdhed kan variere over tid og mellem forskellige vandværker i samme område.
                </p>
              </div>
            </div>
          </section>
          
          <div className="bg-light-gray p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  Har du hårdt vand?
                </h3>
                <p className="text-gray-700">
                  Se vores anbefalede blødgøringsanlæg til dit område
                </p>
              </div>
              
              <Link 
                to="/test-blødgøringsanlæg" 
                className="cta-button"
              >
                Se anbefalinger <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-16">
        <CTASection 
          title="Klar til et kalkfrit hjem?" 
          buttonText1="Se vores test"
          buttonLink1="/test-blødgøringsanlæg"
          buttonText2="Læs købsguiden"
          buttonLink2="/blødgøringsanlæg-guide"
        />
      </div>
    </div>
  );
};

export default KalkKortPage;
