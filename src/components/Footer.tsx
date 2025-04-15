
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Check } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">KalkfriHjem.dk</h3>
            <p className="text-gray-600 mb-4">
              Din uafhængige guide til de bedste blødgøringsanlæg på markedet. Vi hjælper danske boligejere med at finde den rette løsning til kalkfrit vand.
            </p>
            <div className="flex items-center text-gray-600">
              <Mail size={18} className="mr-2" />
              <span>kontakt@kalkfrihjem.dk</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/test-blødgøringsanlæg" className="text-gray-600 hover:text-primary">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/blødgøringsanlæg-guide" className="text-gray-600 hover:text-primary">
                  Guide
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-600 hover:text-primary">
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/kalk-i-danmark" className="text-gray-600 hover:text-primary">
                  Kalkkort
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Trust elements */}
          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">Hvorfor vælge os</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Anbefalet af 500+ boligejere</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">100% uafhængig test</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Grundig research og test</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Årligt opdaterede anbefalinger</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer and copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500 text-center">
            <p className="mb-2">
              Denne side indeholder affiliate-links – vi får muligvis kommission, hvis du køber via vores links.
            </p>
            <p>
              © {new Date().getFullYear()} KalkfriHjem.dk | Alle rettigheder forbeholdes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
