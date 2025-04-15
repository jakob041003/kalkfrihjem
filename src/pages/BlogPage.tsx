
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: '1',
      title: 'Derfor kan kalk øge din elregning med 20%',
      excerpt: 'Kalk i vandet er ikke kun irriterende for synet - det kan også koste dig dyrt på elregningen. Læs hvordan kalkaflejringer påvirker dine elektriske apparater og hvordan du kan spare penge med blødt vand.',
      image: 'https://via.placeholder.com/600x400',
      date: '15. marts 2025',
      author: 'Martin Jensen',
      slug: 'kalk-elregning-besparelse',
      categories: ['Økonomi', 'Energi']
    },
    {
      id: '2',
      title: '5 grunde til din vaskemaskine ikke holder så længe som den burde',
      excerpt: 'Er du træt af at udskifte vaskemaskiner oftere end nødvendigt? Kalk er en af de største syndere når det kommer til forkortet levetid for dine hvidevarer. Lær hvordan du kan forlænge levetiden markant.',
      image: 'https://via.placeholder.com/600x400',
      date: '2. februar 2025',
      author: 'Louise Nielsen',
      slug: 'vaskemaskine-levetid-kalk',
      categories: ['Hvidevarer', 'Vedligehold']
    },
    {
      id: '3',
      title: 'Er blødgøringsanlæg lovligt i Danmark? Her er reglerne',
      excerpt: 'Der er mange myter omkring lovligheden af blødgøringsanlæg i Danmark. Vi gennemgår de aktuelle regler og krav, så du kan være sikker på at din installation er lovlig og sikker.',
      image: 'https://via.placeholder.com/600x400',
      date: '20. januar 2025',
      author: 'Jens Petersen',
      slug: 'bloedgoeringsanlaeg-lovgivning',
      categories: ['Lovgivning', 'Installation']
    },
    {
      id: '4',
      title: 'Sådan påvirker hårdt vand din hud og dit hår - og hvad du kan gøre ved det',
      excerpt: 'Oplever du tør hud, irritation eller livløst hår? Årsagen kan være det hårde vand i din vandhane. Få eksperternes råd til at beskytte din hud og dit hår mod kalkens udtørrende effekt.',
      image: 'https://via.placeholder.com/600x400',
      date: '5. januar 2025',
      author: 'Mette Hansen',
      slug: 'haardt-vand-hud-haar',
      categories: ['Sundhed', 'Personlig pleje']
    },
    {
      id: '5',
      title: 'Salt vs. saltfri blødgøringsanlæg - hvad skal du vælge?',
      excerpt: 'De to hovedtyper af blødgøringsanlæg har hver deres fordele og ulemper. Vi sammenligner teknologierne og hjælper dig med at vælge den rigtige løsning til dit hjem og dine behov.',
      image: 'https://via.placeholder.com/600x400',
      date: '10. december 2024',
      author: 'Anders Madsen',
      slug: 'salt-vs-saltfri-anlaeg',
      categories: ['Produktguide', 'Teknologi']
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Blog - Nyttig viden om blødgøringsanlæg og kalkfrit vand
          </h1>
          
          <div className="bg-light-gray p-6 rounded-lg mb-10">
            <p className="text-lg">
              Velkommen til vores blog, hvor vi deler viden, tips og råd om alt, der vedrører kalk i vandet, 
              blødgøringsanlæg og hvordan du kan få et mere kalkfrit hjem.
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
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Af {blogPosts[0].author}
                    </div>
                    
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
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Af {post.author}
                    </div>
                    
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
