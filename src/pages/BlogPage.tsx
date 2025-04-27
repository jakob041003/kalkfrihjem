
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogPage = () => {
  const blogPost = {
    id: '1',
    title: 'Guide: Sådan vælger du det bedste blødgøringsanlæg til dit hus i 2025',
    excerpt: 'Komplet guide til valg af blødgøringsanlæg. Vi gennemgår alle faktorer du skal overveje, fra husets størrelse til forskellige teknologier, så du kan træffe det bedste valg for dit hjem.',
    image: 'https://via.placeholder.com/600x400',
    date: '15. marts 2025',
    slug: 'guide-bedste-bloedgoeringsanlaeg-2025',
    categories: ['Købsguide', 'Produkttest']
  };

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
          
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPost.image} 
                    alt={blogPost.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{blogPost.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-poppins font-semibold mb-4">
                    {blogPost.title}
                  </h2>
                  
                  <div className="mb-4 flex space-x-2">
                    {blogPost.categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {blogPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    <Link
                      to={`/blog/${blogPost.slug}`}
                      className="text-primary font-medium hover:underline flex items-center"
                    >
                      Læs mere <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
