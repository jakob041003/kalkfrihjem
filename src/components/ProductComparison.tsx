
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  capacity: string;
  type: string;
  warranty: string;
  image: string;
  isTopPick?: boolean;
  link: string;
}

interface ProductComparisonProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ 
  products, 
  title = "Sammenlign de bedste blødgøringsanlæg", 
  subtitle = "Vi har udvalgt de bedste modeller, så du kan træffe det rette valg" 
}) => {
  return (
    <div className="w-full py-10">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-poppins font-bold mb-3">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-poppins">Produkt</th>
              <th className="px-4 py-3 text-left font-poppins">Pris</th>
              <th className="px-4 py-3 text-left font-poppins">Kapacitet</th>
              <th className="px-4 py-3 text-left font-poppins">Type</th>
              <th className="px-4 py-3 text-left font-poppins">Garanti</th>
              <th className="px-4 py-3 text-center font-poppins"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr 
                key={product.id} 
                className={`border-b hover:bg-gray-50 transition-colors ${
                  product.isTopPick ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="mr-4 w-16 h-16 flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      {product.isTopPick && (
                        <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mt-1">
                          Bedste valg
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium">{product.price}</td>
                <td className="px-4 py-4">{product.capacity}</td>
                <td className="px-4 py-4">{product.type}</td>
                <td className="px-4 py-4">{product.warranty}</td>
                <td className="px-4 py-4 text-center">
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center text-sm hover:bg-blue-600 transition-colors"
                  >
                    Se pris <ArrowRight size={16} className="ml-1" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center">
        <Link
          to="/test-blødgøringsanlæg"
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
          Se komplet sammenligning af alle modeller <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductComparison;
