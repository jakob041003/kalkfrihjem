
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

const GuidePage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Sådan vælger du det rette blødgøringsanlæg
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-light-gray p-6 rounded-lg mb-10">
              <p className="text-lg">
                Med de mange forskellige modeller af blødgøringsanlæg på markedet kan det være svært at vælge den rigtige løsning til dit hjem. 
                I denne guide gennemgår vi alt, hvad du bør vide, før du investerer i et blødgøringsanlæg.
              </p>
            </div>
            
            {/* Section 1: What is limestone and why is it a problem */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Hvad er kalk, og hvorfor er det et problem?</h2>
              
              <p className="mb-4">
                Kalk, eller calcium karbonat (CaCO₃), er naturligt forekommende i grundvandet i store dele af Danmark. 
                Når vandet er "hårdt", betyder det, at det har et højt indhold af calcium og magnesium.
              </p>
              
              <p className="mb-4">
                Hårdt vand kan medføre flere problemer i hjemmet:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <div>
                    <strong>Kalkaflejringer</strong>: På fliser, armaturer, i brusehoveder og vandhaner.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <div>
                    <strong>Skader på hvidevarer</strong>: Vaskemaskiner, opvaskemaskiner, elkedler og kaffemaskiner kan få reduceret levetid.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <div>
                    <strong>Øget energiforbrug</strong>: Kalk isolerer og gør det sværere at opvarme vand, hvilket øger energiforbruget.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">•</div>
                  <div>
                    <strong>Hudproblemer</strong>: Mange oplever tør hud og irritation ved brug af hårdt vand.
                  </div>
                </li>
              </ul>
              
              <div className="bg-white border rounded-lg p-5 mb-6">
                <p className="font-medium mb-2">Vidste du?</p>
                <p className="text-gray-700">
                  Bare 1,5 mm kalk i din varmtvandsbeholder kan øge dit energiforbrug med op til 15%. Over et år kan det betyde flere tusinde kroner ekstra på elregningen.
                </p>
              </div>
            </section>
            
            {/* Section 2: How water softeners work */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Hvordan fungerer et blødgøringsanlæg?</h2>
              
              <p className="mb-4">
                Et blødgøringsanlæg er designet til at fjerne eller reducere mængden af calcium og magnesium i vandet, 
                hvilket gør vandet "blødere". Der findes forskellige teknologier til blødgøring:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Ionbytning (saltbaseret)</h3>
              <p className="mb-4">
                Den mest almindelige type anlæg bruger ionbytning, hvor calcium- og magnesium-ioner i vandet byttes ud med natrium-ioner (fra salt).
                Processen foregår i en beholder med harpikskugler, og anlægget regenererer automatisk ved hjælp af saltopløsning.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Saltfri teknologi</h3>
              <p className="mb-4">
                Disse systemer ændrer kalkens struktur, så den ikke sætter sig fast på overflader.
                De fjerner ikke kalken fra vandet, men forhindrer den i at danne hårde aflejringer.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">CO₂-baseret blødgøring</h3>
              <p className="mb-4">
                En nyere teknologi, der anvender kuldioxid til at sænke vandets pH-værdi midlertidigt,
                hvilket opløser kalken. Denne metode er mindre udbredt i private hjem.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <p className="font-medium text-blue-800 mb-2">Sådan fungerer regenerering</p>
                <p>
                  I et saltbaseret anlæg vil harpiksen med tiden blive mættet med calcium og magnesium. 
                  Anlægget skyller da automatisk harpiksen med saltvand, hvilket fjerner calcium og magnesium 
                  og genoplader harpiksen med natrium, så den er klar til brug igen.
                </p>
              </div>
            </section>
            
            {/* Section 3: Types of systems */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Typer af anlæg</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left font-poppins">Type</th>
                      <th className="px-4 py-3 text-left font-poppins">Fordele</th>
                      <th className="px-4 py-3 text-left font-poppins">Ulemper</th>
                      <th className="px-4 py-3 text-left font-poppins">Pris ca.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium">Saltbaseret (ionbytning)</td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Mest effektiv kalkfjernelse</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Lang levetid</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Veldokumenteret effekt</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Kræver løbende påfyldning af salt</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Større anlæg, kræver plads</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Øget natriumindhold i vandet</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">4.000-20.000 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium">Saltfri</td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Ingen salt påfyldning</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Kompakt design</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Lavere driftsomkostninger</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Mindre effektiv end saltbaseret</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Fjerner ikke kalken fra vandet</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Varierende effekt i tests</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">2.000-8.000 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium">CO₂-baseret</td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Miljøvenlig</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Ingen kemi</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>God effektivitet</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Dyr i indkøb</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Kræver CO₂-tanke</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 text-red-500">•</div>
                            <span>Sjældent brugt i private hjem</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 py-4">15.000-30.000 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Section 4: When to invest */}
            <section className="mb-12">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Hvornår giver det mening at investere?</h2>
              
              <p className="mb-4">
                At investere i et blødgøringsanlæg er en beslutning, der afhænger af flere faktorer:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Det giver god mening hvis:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Du bor i et område med meget hårdt vand (over 18°dH)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Du bruger meget tid på at fjerne kalk</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Du ofte må udskifte vandhaner og armaturer</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Du har høje udgifter til afkalkning</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Du har oplevet gentagne problemer med dine hvidevarer pga. kalk</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">Det er måske ikke nødvendigt hvis:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-red-500">•</div>
                      <span>Du bor i et område med blødt eller middelhårdt vand (under 10°dH)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-red-500">•</div>
                      <span>Du bor i lejebolig eller planlægger at flytte inden for kort tid</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-red-500">•</div>
                      <span>Du ikke oplever nævneværdige problemer med kalk</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-red-500">•</div>
                      <span>Du ikke har plads til installation eller adgang til afløb</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-5">
                <p className="font-medium mb-2">Økonomisk perspektiv:</p>
                <p className="mb-4">
                  Et blødgøringsanlæg koster typisk mellem 4.000-20.000 kr. at købe og installere. Med en levetid på 10-20 år
                  og årlige besparelser på 1.000-3.000 kr. (afhængigt af husstandens størrelse og vandhårdhed), vil anlægget
                  typisk tjene sig selv hjem på 3-7 år.
                </p>
                <p>
                  Besparelserne kommer fra reducerede udgifter til:
                </p>
                <ul className="mt-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-500">•</div>
                    <span>Rengøringsmidler og afkalkningsprodukter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-500">•</div>
                    <span>Mindre energiforbrug til opvarmning af vand</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-500">•</div>
                    <span>Længere levetid på hvidevarer og VVS-installationer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-500">•</div>
                    <span>Mindre forbrug af vaskemiddel og skyllemiddel</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-lg font-medium text-center mb-4">
                Vil du vide mere om de forskellige modeller på markedet?
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/test-blødgøringsanlæg" 
                  className="cta-button"
                >
                  Se vores test og sammenligninger <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-16">
        <CTASection 
          title="Klar til at finde det rette anlæg til dit hjem?" 
          buttonText1="Se anbefalede modeller"
          buttonLink1="/test-blødgøringsanlæg"
          buttonText2="Læs om installation"
          buttonLink2="/installation"
        />
      </div>
    </div>
  );
};

export default GuidePage;
