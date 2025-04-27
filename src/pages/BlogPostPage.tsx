
import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  const blogPost = {
    title: 'Guide: Sådan vælger du det bedste blødgøringsanlæg til dit hus i 2025',
    date: '15. marts 2025',
    content: `
      <h2>Introduktion</h2>
      <p>At vælge det rigtige blødgøringsanlæg til dit hjem er en vigtig beslutning, der kan have stor betydning for både din dagligdag og din økonomi. I denne omfattende guide gennemgår vi alle de vigtige faktorer, du skal overveje, når du skal vælge det bedste blødgøringsanlæg til dit hus.</p>

      <h2>Faktorer at overveje ved valg af blødgøringsanlæg</h2>
      
      <h3>1. Husets størrelse og vandforbrug</h3>
      <p>Dit vandforbrug og husets størrelse er afgørende faktorer for valg af anlæg. Et for lille anlæg vil ikke kunne følge med, mens et for stort anlæg vil være en unødig omkostning.</p>
      
      <h3>2. Vandets hårdhed i dit område</h3>
      <p>Jo hårdere vand, des mere effektivt skal anlægget være. Tjek vandets hårdhed i dit område, før du vælger anlæg.</p>
      
      <h3>3. Teknologivalg: Salt vs. Saltfri</h3>
      <p>Der findes både traditionelle saltbaserede anlæg og moderne saltfri alternativer. Hver type har sine fordele og ulemper, som du bør kende til.</p>
      
      <h3>4. Installationskrav</h3>
      <p>Undersøg installationskravene og om dit hus er forberedt til den type anlæg, du overvejer. Nogle anlæg kræver mere plads eller særlige tilslutningsmuligheder.</p>
      
      <h3>5. Driftsomkostninger</h3>
      <p>Se på de løbende omkostninger til drift, vedligeholdelse og eventuelle forbrugsstoffer som salt eller filtre.</p>

      <h2>Anbefalede anlæg til forskellige hustyper</h2>
      <p>Forskellige hustyper har forskellige behov. Her er vores anbefalinger baseret på husstørrelse:</p>
      
      <h3>Små huse (op til 140m²)</h3>
      <ul>
        <li>Kompakte anlæg med kapacitet op til 2,5 m³/time</li>
        <li>Fokus på energieffektivitet</li>
        <li>Pladsbesparende design</li>
      </ul>
      
      <h3>Mellemstore huse (140-200m²)</h3>
      <ul>
        <li>Anlæg med kapacitet på 2,5-3,5 m³/time</li>
        <li>God balance mellem pris og ydelse</li>
        <li>Mulighed for app-styring</li>
      </ul>
      
      <h3>Store huse (over 200m²)</h3>
      <ul>
        <li>Højtydende anlæg med kapacitet over 3,5 m³/time</li>
        <li>Avancerede styremuligheder</li>
        <li>Indbygget vandanalyse</li>
      </ul>

      <h2>Konklusion</h2>
      <p>Valget af det rette blødgøringsanlæg afhænger af mange faktorer. Ved at overveje ovenstående punkter og matche dem med dit behov, kan du træffe et velovervejet valg, der giver dig den bedste løsning for dit hjem.</p>
    `,
    categories: ['Købsguide', 'Produkttest']
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              {blogPost.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar size={16} className="mr-2" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex gap-2 mb-6">
              {blogPost.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
