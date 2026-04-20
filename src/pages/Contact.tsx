import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 italic tracking-tight">Get in Touch</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Have a question or want to visit our campus? We're here to help you. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-school-blue mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-gold shrink-0 border border-slate-100 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">Campus Location</h5>
                    <p className="text-slate-600 leading-relaxed max-w-xs">
                      Anglo Arabic School, Ajmeri Gate, <br />
                      Delhi - 110006, India
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-gold shrink-0 border border-slate-100 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">Call Us</h5>
                    <div className="space-y-1">
                      <p className="text-slate-600">+91 11 2323 3562 (Main Office)</p>
                      <p className="text-slate-600">+91 11 2323 0302 (Admissions)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-gold shrink-0 border border-slate-100 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">Email Addresses</h5>
                    <div className="space-y-1">
                      <p className="text-slate-600">info@angloarabic.edu.in</p>
                      <p className="text-slate-600">admissions@angloarabic.edu.in</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-gold shrink-0 border border-slate-100 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">Office Hours</h5>
                    <p className="text-slate-600">Monday — Saturday: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h3 className="text-xl font-serif font-bold text-school-blue mb-6">Follow Our Socials</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-school-blue hover:text-white transition-all transform hover:scale-110 shadow-sm border border-slate-100">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-school-gold/10 rounded-3xl border border-school-gold/20">
              <div className="flex gap-4 items-center mb-4">
                <MessageCircle size={24} className="text-school-gold-dark" />
                <h4 className="font-bold text-school-blue">WhatsApp Support</h4>
              </div>
              <p className="text-sm text-slate-600 mb-6">Need a quick answer? Chat with our team directly on WhatsApp.</p>
              <Button size="sm" variant="gold" className="w-full">Chat with us on WhatsApp</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-10 rounded-[40px] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-serif font-bold text-school-blue mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Your Full Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-school-gold transition-colors shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Email Address</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-school-gold transition-colors shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Subject</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-school-gold transition-colors shadow-sm text-slate-500">
                  <option value="">General Inquiry</option>
                  <option value="admissions">Admissions related</option>
                  <option value="academics">Academic question</option>
                  <option value="alumni">Alumni network</option>
                  <option value="jobs">Job Opportunity</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Your Message</label>
                <textarea rows={6} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-school-gold transition-colors shadow-sm" placeholder="How can we help you?"></textarea>
              </div>
              <div className="pt-4">
                <Button size="lg" className="w-full">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full relative">
        <img 
          src="https://picsum.photos/seed/map-2/1920/1080" 
          alt="Map View" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-school-blue/5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 pointer-events-auto">
             <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-slate-100">
               <h4 className="font-serif font-bold text-school-blue text-xl mb-2 italic">Visit the Heritage</h4>
               <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Our campus is open for visits by prior appointment. Please call our admissions team to schedule a guided tour.</p>
               <Button variant="outline" size="sm" className="w-full">Open in Google Maps</Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
