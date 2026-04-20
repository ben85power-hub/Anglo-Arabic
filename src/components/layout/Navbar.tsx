import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'History & Heritage', href: '/about#history' },
      { name: 'Principal\'s Message', href: '/about#principal' },
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Administration', href: '/about#admin' },
    ]
  },
  { 
    name: 'Academics', 
    href: '/academics',
    dropdown: [
      { name: 'Curriculum', href: '/academics#curriculum' },
      { name: 'Streams (Senior Secondary)', href: '/academics#streams' },
      { name: 'Primary School', href: '/academics#primary' },
      { name: 'Secondary School', href: '/academics#secondary' },
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Results', href: '/results' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-school-blue text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider">
          <div className="flex gap-6">
            <a href="tel:+911123233562" className="flex items-center gap-2 hover:text-school-gold transition-colors">
              <Phone size={14} /> +91 11 2323 3562
            </a>
            <a href="mailto:info@angloarabic.edu.in" className="flex items-center gap-2 hover:text-school-gold transition-colors">
              <Mail size={14} /> info@angloarabic.edu.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Ajmeri Gate, Delhi - 110006
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-school-blue border-b-4 border-school-gold shadow-lg py-4' : 'bg-school-blue border-b-4 border-school-gold py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-school-gold rounded-full flex items-center justify-center p-2 text-school-blue font-bold text-2xl transition-transform group-hover:scale-105">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-wider leading-none">Anglo Arabic</span>
                <span className="font-sans text-[10px] md:text-xs text-school-gold uppercase tracking-[0.1em] font-medium pt-1">Senior Secondary School | Estd. 1692</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group px-1">
                  <Link
                    to={link.href}
                    className={`px-2 py-2 text-xs font-medium uppercase tracking-wider transition-colors hover:text-school-gold flex items-center gap-1 ${
                      location.pathname === link.href ? 'text-school-gold' : 'text-white'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={12} className="opacity-70" />}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-school-gold overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-school-blue transition-colors border-b border-slate-100 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {location.pathname === link.href && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-school-gold-dark"
                    />
                  )}
                </div>
              ))}
              <Link
                to="/admissions"
                className="ml-4 bg-school-blue text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Apply Now 2026
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden flex items-center gap-4">
              <Link
                to="/admissions"
                className="bg-school-blue text-white px-4 py-2 rounded-md text-xs font-semibold"
              >
                Apply
              </Link>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg ${
                        location.pathname === link.href 
                        ? 'bg-slate-50 text-school-blue' 
                        : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 pl-4 border-l border-slate-200 mt-1 space-y-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-500 hover:text-school-blue"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
