
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-poppins font-bold text-primary">
          KalkfriHjem<span className="text-gray-600 text-sm">.dk</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/">Forside</NavLink>
          <NavLink to="/test-blødgøringsanlæg">Test</NavLink>
          <NavLink to="/blødgøringsanlæg-guide">Guide</NavLink>
          <NavLink to="/installation">Installation</NavLink>
          <NavLink to="/kalk-i-danmark">Kalkkort</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Forside</MobileNavLink>
            <MobileNavLink to="/test-blødgøringsanlæg" onClick={() => setMobileMenuOpen(false)}>Test</MobileNavLink>
            <MobileNavLink to="/blødgøringsanlæg-guide" onClick={() => setMobileMenuOpen(false)}>Guide</MobileNavLink>
            <MobileNavLink to="/installation" onClick={() => setMobileMenuOpen(false)}>Installation</MobileNavLink>
            <MobileNavLink to="/kalk-i-danmark" onClick={() => setMobileMenuOpen(false)}>Kalkkort</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
