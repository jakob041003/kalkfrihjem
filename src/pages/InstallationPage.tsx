
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import CTASection from '../components/CTASection';

const InstallationPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Installation af blødgøringsanlæg
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-light-gray p-6 rounded-lg mb-10">
              <p className="text-lg">
                Har du besluttet dig for at installere et blødgøringsanlæg? Denne side giver dig en grundig vejledning om installationsprocessen, 
                hvornår du skal tilkalde en VVS'er, og hvad du skal være opmærksom på inden køb.
              </p>
            </div>
            
            {/* Section 1: Installation overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Generel vejledning til installation</h2>
              
              <div className="mb-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                  <p className="mb-4">
                    Installation af et blødgøringsanlæg kræver typisk en række trin og overvejelser. Her er de vigtigste punkter at være opmærksom på:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Placering af anlægget</h3>
                  <p className="mb-4">
                    Anlægget skal placeres ved vandets indgang til boligen, ofte i bryggers, teknikrum eller kælder. Det kræver:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <div>Plads til selve anlægget (typisk 30x50x110 cm)</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <div>Adgang til strøm (230V)</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <div>Afløbsmulighed til skyllevand</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <div>Let adgang for påfyldning af salt (for saltbaserede anlæg)</div>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">Tilslutning</h3>
                  <p>
                    Anlægget skal tilsluttes vandforsyningen efter vandmåleren, men før vandet fordeles i huset. 
                    Dette kræver ofte modifikation af eksisterende rør.
                  </p>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Installation af blødgøringsanlæg" 
                      className="w-full h-auto"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Typisk installation af et blødgøringsanlæg ved hovedvandforsyningen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
                <h3 className="font-medium text-blue-800 mb-2">Bypass-installation</h3>
                <p>
                  Vi anbefaler altid at installere anlægget med et bypass-system, så man nemt kan koble anlægget 
                  fra ved behov for service eller hvis man ønsker at bruge hårdere vand (f.eks. til havevanding).
                </p>
              </div>
            </section>
            
            {/* Section 2: When to call a professional */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Hvornår kræver det autoriseret VVS?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Krav om autoriseret VVS'er:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-orange-600">•</div>
                      <span>Ved indgreb på vandinstallationer før vandmåler</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-orange-600">•</div>
                      <span>Ved ombygning af eksisterende rørføring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-orange-600">•</div>
                      <span>Ved installation der kræver indgreb på afløbssystemet</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-orange-600">•</div>
                      <span>Ved installationer i ejendomme med mere end to boligenheder</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Kan muligvis klares selv:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Installation af plug-and-play modeller med flexslanger</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Vedligehold og saltpåfyldning</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Udskiftning af filtre (på visse modeller)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Simpel kobling til eksisterende vandhane med adaptor</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-5 mb-6">
                <p className="font-medium mb-2">Prisindikation for VVS-installation:</p>
                <p>
                  En standard installation ved en autoriseret VVS'er koster typisk mellem 2.500-6.000 kr. afhængigt af 
                  kompleksiteten og eventuelle tilpasninger af eksisterende rørføring.
                </p>
              </div>
              
              <p className="text-sm text-gray-600 mb-8">
                <strong>Bemærk:</strong> Det er altid en god idé at tjekke med dit forsikringsselskab, om installation af blødgøringsanlæg 
                kræver autoriseret VVS'er for at være dækket af forsikringen i tilfælde af vandskade.
              </p>
            </section>
            
            {/* Section 3: Time, placement, drain, salt */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Praktiske overvejelser</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Tidsforbrug</h3>
                  <p>
                    En professionel installation tager typisk 2-4 timer, mens en DIY-installation (hvis muligt) 
                    kan tage 4-8 timer for en person uden erfaring med VVS-arbejde.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Placering</h3>
                  <p className="mb-3">
                    Ud over de tekniske krav til placering, bør du også overveje:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Støj:</strong> Nogle anlæg kan lave støj under regenerering. Placer det ikke for tæt på soveværelser.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Temperatur:</strong> Anlægget bør ikke udsættes for frost eller høje temperaturer (over 40°C).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Fugt:</strong> Anlægget skal beskyttes mod oversvømmelse eller konstant høj luftfugtighed.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Afløb</h3>
                  <p>
                    Anlægget skal tilsluttes et afløb, da det producerer skyllevand under regenereringsprocessen. 
                    Dette skyllevand indeholder kalk og salt og må ikke bruges til havevanding. 
                    Typisk tilsluttes det direkte til et afløb eller pumpes til nærmeste afløbsmulighed.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Saltpåfyldning</h3>
                  <p className="mb-3">
                    For saltbaserede anlæg skal du regelmæssigt påfylde salt:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Hyppighed:</strong> Typisk hver 1-3 måneder afhængigt af vandforbrug og vandets hårdhed.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Type salt:</strong> Brug kun specielt salt til blødgøringsanlæg (tablets eller granulat).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-gray-600">•</div>
                      <div>
                        <strong>Mængde:</strong> En familie på 4 personer med hårdt vand bruger typisk 150-300 kg salt om året.
                      </div>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800">
                      <strong>Tip:</strong> Placer anlægget, så det er nemt at påfylde salt. Saltposer vejer typisk 10-25 kg.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 4: Checklist */}
            <section className="mb-10">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Checkliste før du køber</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-semibold text-xl">5 ting du skal tjekke før du køber</h3>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tjek vandets hårdhedsgrad</h4>
                      <p className="text-gray-600">
                        Find din kommunes vandværk og tjek vandets hårdhed. Jo højere hårdhedsgrad, jo større anlæg kan være nødvendigt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mål dit vandforbrug</h4>
                      <p className="text-gray-600">
                        Se din vandmåler eller regning for at bestemme dit årlige forbrug. Dette hjælper med at vælge den rette kapacitet.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Undersøg installationsmulighederne</h4>
                      <p className="text-gray-600">
                        Kontroller om du har plads, strøm og afløbsmulighed hvor anlægget skal placeres.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tjek garantibetingelser</h4>
                      <p className="text-gray-600">
                        Undersøg garantiperioden og hvilke krav producenten stiller til installation og vedligehold.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Beregn de løbende omkostninger</h4>
                      <p className="text-gray-600">
                        Inkluder udgifter til salt, vandspild under regenerering, strøm og eventuel service i din totaløkonomi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-lg font-medium text-center mb-4">
                Klar til at vælge det rette blødgøringsanlæg?
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/test-blødgøringsanlæg" 
                  className="cta-button"
                >
                  Se vores anbefalede modeller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-16">
        <CTASection 
          title="Vil du vide mere om blødgøringsanlæg?" 
          buttonText1="Se vores test"
          buttonLink1="/test-blødgøringsanlæg"
          buttonText2="Læs købsguiden"
          buttonLink2="/blødgøringsanlæg-guide"
          bgColor="bg-light-gray"
        />
      </div>
    </div>
  );
};

export default InstallationPage;
