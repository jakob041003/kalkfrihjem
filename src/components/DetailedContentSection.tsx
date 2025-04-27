import React from 'react';

const DetailedContentSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-6 text-center">
            Få kalkfrit vand med det bedste blødgøringsanlæg
          </h2>
          
          <p className="mb-6">
            Kender du følelsen af at hive elkedlen op af skabet og opdage et tykt, hvidt lag kalk nederst? 
            Eller at du må skrubbe badeværelsesfliserne uge efter uge – kun for at se nye kalkstreger dukke op næsten med det samme? 
            Hårdt vand er hverdag for mange danske husstande, men det behøver ikke være sådan. Med det bedste blødgøringsanlæg 
            kan du sige farvel til genstridige kalkaflejringer, forlænge levetiden på dine hvidevarer og spare både tid og penge i det lange løb.
          </p>
          
          <h3 className="text-2xl font-poppins font-semibold mt-8 mb-4">
            Hvad er hårdt vand – og hvorfor er det et problem?
          </h3>
          
          <p className="mb-4">
            Hårdt vand indeholder store mængder calcium- og magnesiumioner. Når vandet varmes op eller fordamper, 
            udfældes disse mineraler som kalk. Resultatet er:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Kalkpletter og striber på glas, armaturer og fliser</li>
            <li>Energitab – et blot 1 mm kalklag på varmelegemer kan øge dit strømforbrug med op til 10 %</li>
            <li>Forringet kapacitet i husholdningsapparater, fordi varmelegemer og ventiler tilstoppes</li>
            <li>Tør hud og stive tekstiler, da sæbe og vaskemidler skummer dårligere i hårdt vand</li>
          </ul>
          
          <p className="mb-6">
            I de fleste danske kommuner ligger hårdheden mellem 12 °dH og 30 °dH. Allerede ved 10 °dH begynder man at kunne se og mærke ulemperne i hverdagen.
          </p>
          
          <h3 className="text-2xl font-poppins font-semibold mt-8 mb-4">
            Sådan virker et blødgøringsanlæg
          </h3>
          
          <p className="mb-6">
            Det mest udbredte design er et saltbaseret ionbytter-system. Vandet ledes gennem en beholder med harpiks­kugler. 
            Harpiksen udveksler de hårde calcium- og magnesiumioner med natriumioner, hvilket sænker hårdheden til et niveau, 
            der typisk ligger mellem 4 °dH og 8 °dH. Når harpiksen er "fuld", skylles den med en saltopløsning (regenerering), og processen starter forfra.
          </p>
          
          <p className="mb-6">
            Nye, intelligente modeller sørger selv for at tilpasse regenererings­intervallet til familiens reelle vandforbrug. 
            Det reducerer både salt- og vandspild og gør vedligeholdet nemt: Du fylder blot regenereringssalt på, når anlægget siger til.
          </p>
          
          <h3 className="text-2xl font-poppins font-semibold mt-8 mb-4">
            Fordelene ved et blødgøringsanlæg i hjemmet
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-2">1. Mindre rengøring – mere fritid</h4>
              <p>
                Kalkfrit vand efterlader ingen hvide skjolder. Du kan nøjes med en hurtig aftørring, 
                og aggressive rengøringsmidler bliver overflødige.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-2">2. Længere levetid på hvidevarer</h4>
              <p>
                Kaffemaskiner, opvaskemaskiner og vaske-/tørremaskiner slides langsommere, 
                fordi varmelegemer og pumper ikke indkapsles i kalk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-2">3. Energibesparelser</h4>
              <p>
                Ifølge Energistyrelsen kan et 2 mm kalklag i varmt­vands­beholderen øge energiforbruget med 15 %. 
                Blødgjort vand holder rørene rene, så el- eller gasforbruget falder.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-2">4. Blødere hud og tekstiler</h4>
              <p>
                Sæbe skummer bedre i blødgjort vand, så du kan bruge mindre shampoo og vaskepulver. 
                Håndklæder føles bløde, og huden mindre tør.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h4 className="font-semibold text-xl mb-2">5. Lavere klimaaftryk</h4>
              <p>
                Mindre strømforbrug og færre kemiske rengøringsmidler betyder en reel CO₂-besparelse.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-poppins font-semibold mt-8 mb-4">
            Typer af blødgøringsanlæg – fordele og ulemper
          </h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse bg-white shadow-sm rounded-lg">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 bg-gray-50 text-left">Type</th>
                  <th className="border border-gray-300 px-4 py-3 bg-gray-50 text-left">Fordel</th>
                  <th className="border border-gray-300 px-4 py-3 bg-gray-50 text-left">Ulempe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Saltbaseret ionbytter (klassisk)</td>
                  <td className="border border-gray-300 px-4 py-3">Effektiv kalkfjernelse ned til 0–6 °dH; velafprøvet teknologi</td>
                  <td className="border border-gray-300 px-4 py-3">Kræver løbende salt­påfyldning og afledning af skyllevand</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">"Saltfri" krystal-/polyfosfat</td>
                  <td className="border border-gray-300 px-4 py-3">Ingen salt, kompakt enhed</td>
                  <td className="border border-gray-300 px-4 py-3">Maskerer kalken; fjerner den ikke. Effekt begrænset ved meget hårdt vand</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">CO₂-baseret (kulsyre)</td>
                  <td className="border border-gray-300 px-4 py-3">Tilfører ingen natrium; ingen saltspild</td>
                  <td className="border border-gray-300 px-4 py-3">Højere installationspris; effekten kan variere alt efter vandkemi</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-6">
            For de fleste danske husstande giver et moderne, saltbaseret anlæg stadig det bedste forhold mellem pris, driftssikkerhed og kalkreduktion.
          </p>
          
          <h3 className="text-2xl font-poppins font-semibold mt-8 mb-4">
            Ofte stillede spørgsmål om blødgøringsanlæg
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Er blødgjort vand sundt at drikke?</h4>
              <p>
                Ja. Resthårdheden justeres, så du stadig får vigtige mineraler, men uden de negative kalkaflejringer. 
                Sundheds­styrelsen anbefaler en resthårdhed mellem 6 °dH og 10 °dH.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Smager blødgjort vand anderledes?</h4>
              <p>
                Smagen ændres kun minimalt. De fleste mennesker kan slet ikke smage forskel, 
                mens nogle oplever vandet som lidt "blødere".
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Hvor ofte skal jeg fylde salt på?</h4>
              <p>
                Det afhænger af vandforbrug og anlægstype. I en gennemsnitsfamilie på fire personer 
                er 25 kg salt nok til 2-3 måneders drift.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Kan jeg selv installere anlægget?</h4>
              <p>
                Det frarådes. Ifølge dansk lovgivning må kun autoriserede VVS-installatører ændre permanent på boligens vandinstallation.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Konklusion – din vej til et kalkfrit hjem
            </h3>
            <p className="mb-4">
              Et moderne, intelligent blødgøringsanlæg er en investering i både komfort og økonomi. 
              Du slipper for tidskrævende rengøring, din el-regning falder, og dine hvidevarer holder længere.
            </p>
            <p>
              Vælger du det bedste blødgøringsanlæg tilpasset din husstands størrelse, kan du se frem til mange års 
              problemfri drift med minimal vedligeholdelse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContentSection; 