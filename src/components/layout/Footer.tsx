import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-blue text-slate-400 pt-20 pb-10 border-t-4 border-school-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-school-gold rounded flex items-center justify-center text-school-blue p-1.5 font-bold text-xl">
                A
              </div>
              <span className="font-sans font-bold text-xl text-white tracking-widest uppercase">Anglo Arabic</span>
            </div>
            <p className="text-[0.8rem] leading-relaxed max-w-xs font-medium">
              A heritage institution dedicated to academic excellence, character building, and holistic development since 1692.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-school-blue hover:text-white rounded-full transition-all text-slate-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-school-blue hover:text-white rounded-full transition-all text-slate-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-school-blue hover:text-white rounded-full transition-all text-slate-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-school-blue hover:text-white rounded-full transition-all text-slate-400">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-school-gold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Facilities', path: '/facilities' },
                { name: 'Gallary', path: '/gallery' },
                { name: 'Alumni Association', path: '/alumni' },
                { name: 'Careers', path: '/careers' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-school-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student/Parent Resources */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-school-gold">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: 'Student Portal', path: '#' },
                { name: 'Parent Portal', path: '#' },
                { name: 'School Calendar', path: '#' },
                { name: 'Exam Schedule', path: '#' },
                { name: 'Annual Report', path: '#' },
                { name: 'School News', path: '/news' },
                { name: 'Circulars & Notices', path: '/news' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-school-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-school-gold">Contact Us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-school-gold shrink-0 mt-1" size={20} />
                <span>Ajmeri Gate, Delhi - 110006, India</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-school-gold shrink-0 mt-1" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+911123233562" className="hover:text-white transition-colors">+91 11 2323 3562</a>
                  <a href="tel:+911123230302" className="hover:text-white transition-colors">+91 11 2323 0302</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-school-gold shrink-0 mt-1" size={18} />
                <a href="mailto:info@angloarabic.edu.in" className="hover:text-white transition-colors">info@angloarabic.edu.in</a>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-700 transition-colors">
                Find on Google Maps <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 uppercase tracking-widest font-medium">
          <p>© {currentYear} Anglo Arabic Senior Secondary School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <p>Affiliated to CBSE, New Delhi</p>
        </div>
      </div>
    </footer>
  );
}
