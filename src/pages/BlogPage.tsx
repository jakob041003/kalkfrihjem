
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Guide: Sådan vælger du det bedste blødgøringsanlæg til dit hus i 2025',
      excerpt: 'Komplet guide til valg af blødgøringsanlæg. Vi gennemgår alle faktorer du skal overveje, fra husets størrelse til forskellige teknologier, så du kan træffe det bedste valg for dit hjem.',
      image: 'https://via.placeholder.com/600x400',
      date: '15. marts 2025',
      slug: 'guide-bedste-bloedgoeringsanlaeg-2025',
      categories: ['Købsguide', 'Produkttest']
    },
    {
      id: '2',
      title: 'Test: De 5 bedste blødgøringsanlæg til private huse',
      excerpt: 'Vi har testet de mest populære blødgøringsanlæg på det danske marked. Se vores grundige sammenligning af pris, kvalitet og funktioner, så du kan finde den bedste løsning til dit hjem.',
      image: 'https://via.placeholder.com/600x400',
      date: '2. februar 2025',
      slug: 'test-5-bedste-bloedgoeringsanlaeg',
      categories: ['Test', 'Sammenligning']
    },
    {
      id: '3',
      title: 'Hvor meget kan du spare med et blødgøringsanlæg? Se beregninger',
      excerpt: 'Konkrete beregninger og eksempler på besparelser ved installation af blødgøringsanlæg. Fra reduceret energiforbrug til længere levetid på hvidevarer - få det fulde økonomiske overblik.',
      image: 'https://via.placeholder.com/600x400',
      date: '20. januar 2025',
      slug: 'besparelser-bloedgoeringsanlaeg-beregninger',
      categories: ['Økonomi', 'Beregninger']
    },
    {
      id: '4',
      title: 'Salt vs. saltfri blødgøringsanlæg: Den store guide',
      excerpt: 'Grundig sammenligning af traditionelle saltbaserede anlæg og moderne saltfri alternativer. Fordele, ulemper og hvilket system der passer bedst til forskellige typer huse.',
      image: 'https://via.placeholder.com/600x400',
      date: '5. januar 2025',
      slug: 'salt-vs-saltfri-bloedgoeringsanlaeg',
      categories: ['Teknologi', 'Sammenligning']
    },
    {
      id: '5',
      title: 'Installation af blødgøringsanlæg: Trin-for-trin guide',
      excerpt: 'Alt du skal vide om installation af blødgøringsanlæg i dit hus. Fra placering og krav til VVS-arbejde og tilslutning. Få den komplette vejledning her.',
      image: 'https://via.placeholder.com/600x400',
      date: '10. december 2024',
      slug: 'installation-bloedgoeringsanlaeg-guide',
      categories: ['Installation', 'DIY']
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Guide til blødgøringsanlæg - Alt du skal vide
          </h1>
          
          <div className="bg-light-gray p-6 rounded-lg mb-10">
            <p className="text-lg">
              Find grundige guides, tests og praktiske råd om blødgøringsanlæg. Vi hjælper dig med at træffe det rigtige valg til dit hjem.
            </p>
          </div>
          
          {/* Featured post */}
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-poppins font-semibold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <div className="mb-4 flex space-x-2">
                    {blogPosts[0].categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    <Link
                      to={`/blog/${blogPosts[0].slug}`}
                      className="text-primary font-medium hover:underline flex items-center"
                    >
                      Læs mere <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover" 
                />
                
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold mb-3">
                    {post.title}
                  </h3>
                  
                  <div className="mb-3 flex space-x-2">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary font-medium hover:underline flex items-center text-sm"
                    >
                      Læs mere <ArrowRight size={14} className="ml-1" />
                    </Link>
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

export default BlogPage;
