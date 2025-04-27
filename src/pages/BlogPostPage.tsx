
import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const BlogPostPage = () => {
  const { slug } = useParams();
  
  const blogPost = {
    title: 'De 7 Bedste Blødgøringsanlæg til danske hjem i 2025 - Komplet Guide',
    metaDescription: 'Find det bedste blødgøringsanlæg til dit hjem. Omfattende guide med tests, priser og ekspertanbefalinger til forskellige hustyper og behov.',
    date: '27. april 2025',
    content: `
      <div class="introduction mb-8">
        <p class="lead text-xl text-gray-700 mb-6">
          Står du og skal vælge et blødgøringsanlæg til dit hjem? I denne omfattende guide gennemgår vi alt, hvad du skal vide for at vælge det bedste blødgøringsanlæg, der passer præcis til dine behov og dit budget.
        </p>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Indholdsfortegnelse</h2>
      <ul class="list-disc list-inside mb-8 space-y-2 text-primary">
        <li><a href="#fordele" class="hover:underline">Fordele ved et blødgøringsanlæg</a></li>
        <li><a href="#top-modeller" class="hover:underline">Top 7 bedste blødgøringsanlæg i 2025</a></li>
        <li><a href="#valgguide" class="hover:underline">Sådan vælger du det rigtige anlæg</a></li>
        <li><a href="#priser" class="hover:underline">Priser og omkostninger</a></li>
        <li><a href="#installation" class="hover:underline">Installation og vedligeholdelse</a></li>
      </ul>

      <div id="fordele" class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Fordele ved at installere et blødgøringsanlæg</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 class="text-lg font-semibold mb-3">Økonomiske fordele</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>Reducerer energiforbruget med op til 25%</li>
                <li>Forlænger levetiden på husholdningsapparater</li>
                <li>Mindre forbrug af rengøringsmidler</li>
                <li>Lavere vedligeholdelsesomkostninger</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 class="text-lg font-semibold mb-3">Praktiske fordele</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>Blødere tøj efter vask</li>
                <li>Mindre kalk på fliser og armaturer</li>
                <li>Bedre vandtryk i rør</li>
                <li>Mere skånsomt for huden</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div id="top-modeller" class="mb-12">
        <h2 class="text-2xl font-bold mb-6">De 7 Bedste Blødgøringsanlæg i 2025</h2>
        
        <div class="space-y-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Bedst i test</span>
              <h3 class="text-xl font-bold mb-2">1. BWT Perla Home</h3>
              <p class="text-gray-600 mb-4">
                BWT Perla Home topper vores liste som det bedste all-round blødgøringsanlæg til danske hjem. Med sin innovative teknologi og brugervenlige app-styring er dette anlæg særligt velegnet til moderne familieboliger.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">Fordele</h4>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li>Intelligent styring via app</li>
                    <li>Lavt saltforbrug</li>
                    <li>Kompakt design</li>
                    <li>Høj kapacitet</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Ulemper</h4>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li>Højere indkøbspris</li>
                    <li>Kræver professionel installation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4 inline-block">Bedste budget</span>
              <h3 class="text-xl font-bold mb-2">2. North Water Basic+</h3>
              <p class="text-gray-600 mb-4">
                North Water Basic+ er det perfekte valg for dig, der ønsker et effektivt blødgøringsanlæg uden at skulle investere i de dyreste modeller på markedet.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">Fordele</h4>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li>God pris/kvalitet-forhold</li>
                    <li>Enkel installation</li>
                    <li>Driftsikker</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Ulemper</h4>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li>Færre smart-funktioner</li>
                    <li>Større saltforbrug</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div id="valgguide" class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Sådan vælger du det rigtige blødgøringsanlæg</h2>
        <div class="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 class="text-lg font-semibold mb-4">1. Vurder dit vandforbrug</h3>
              <p class="text-gray-600">
                Start med at beregne husstandens vandforbrug. Et gennemsnitligt dansk hjem bruger cirka 106,5 m³ vand årligt per person. Dit vandforbrug er afgørende for, hvilken størrelse anlæg du skal vælge.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 class="text-lg font-semibold mb-4">2. Tjek vandets hårdhed</h3>
              <p class="text-gray-600">
                Undersøg vandets hårdhedsgrad i dit område. Jo hårdere vand, des vigtigere er anlæggets effektivitet. I Danmark varierer hårdheden typisk mellem 8°dH og 30°dH.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 class="text-lg font-semibold mb-4">3. Overvej pladsforhold</h3>
              <p class="text-gray-600">
                Mål op hvor anlægget skal stå. De fleste moderne blødgøringsanlæg er kompakte, men du skal stadig sikre god plads til service og saltpåfyldning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div id="priser" class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Priser og omkostninger</h2>
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 class="text-lg font-semibold mb-4">Prisoverslag for forskellige anlægstyper:</h3>
          <ul class="space-y-3">
            <li class="flex justify-between items-center">
              <span>Budget-modeller:</span>
              <span class="font-semibold">10.000 - 15.000 kr.</span>
            </li>
            <li class="flex justify-between items-center">
              <span>Mellem-klasse:</span>
              <span class="font-semibold">15.000 - 25.000 kr.</span>
            </li>
            <li class="flex justify-between items-center">
              <span>Premium-modeller:</span>
              <span class="font-semibold">25.000 - 35.000 kr.</span>
            </li>
          </ul>
        </div>
      </div>

      <div id="installation" class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Installation og vedligeholdelse</h2>
        <p class="text-gray-600 mb-6">
          Vi anbefaler altid at få en autoriseret VVS-installatør til at montere dit blødgøringsanlæg. Dette sikrer korrekt installation og at garantien bevares. Typisk tager en installation 2-4 timer.
        </p>
        <Card>
          <CardContent className="pt-6">
            <h3 class="text-lg font-semibold mb-4">Vedligeholdelsestips:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Kontroller saltbeholderen månedligt</li>
              <li>Rengør saltbeholderen årligt</li>
              <li>Tjek vandtryk og bypass-ventil hver 6. måned</li>
              <li>Få årligt serviceeftersyn af professionel</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div class="conclusion bg-primary/5 p-6 rounded-lg mt-12">
        <h2 class="text-2xl font-bold mb-4">Konklusion</h2>
        <p class="text-gray-700">
          Valget af det bedste blødgøringsanlæg afhænger af dine specifikke behov og forhold. Vores anbefaling er at vælge et anlæg fra en anerkendt producent, der passer til dit vandforbrug og budget. Husk at medregne både installations- og driftsomkostninger i din beslutning.
        </p>
      </div>
    `,
    categories: ['Købsguide', 'Test af blødgøringsanlæg', 'Vandkvalitet']
  };

  // Update document title for SEO
  React.useEffect(() => {
    document.title = blogPost.title + " | KalkfriHjem.dk";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', blogPost.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = blogPost.metaDescription;
      document.head.appendChild(meta);
    }
  }, [blogPost.title, blogPost.metaDescription]);

  return (
    <article className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogPost.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none prose-headings:font-poppins prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
