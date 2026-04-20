import { motion } from 'motion/react';
import { CheckCircle2, FileText, Calendar, CreditCard, ChevronRight, HelpCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Admissions() {
  return (
    <div className="pt-12 pb-24 bg-sleek-body">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-school-gold/10 text-school-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-school-gold/30">
            Now Open: Academic Session 2026-2027
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-school-blue mb-6">Join Our Legacy</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Start your journey towards academic excellence and holistic development. Our admission process is designed to be transparent, fair, and comprehensive.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Steps and Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* Admission Steps */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-3xl font-serif font-bold text-school-blue mb-10">Admission Process</h2>
              <div className="space-y-10 relative before:content-[''] before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {[
                  { 
                    title: 'Online Application', 
                    desc: 'Fill out the digital application form with student details and academic history.',
                    icon: <FileText size={20} />
                  },
                  { 
                    title: 'Entrance Evaluation', 
                    desc: 'Students will appear for a diagnostic test based on the previous year\'s curriculum.',
                    icon: <Calendar size={20} />
                  },
                  { 
                    title: 'Personal Interaction', 
                    desc: 'Shortlisted candidates and their parents will be invited for a warm interaction with the faculty.',
                    icon: <HelpCircle size={20} />
                  },
                  { 
                    title: 'Document Verification', 
                    desc: 'Submission and verification of original documents and transfer certificates.',
                    icon: <CheckCircle2 size={20} />
                  },
                  { 
                    title: 'Fee Payment', 
                    desc: 'Final admission confirmed upon payment of the registration and tuition fees.',
                    icon: <CreditCard size={20} />
                  },
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 relative z-10"
                  >
                    <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-school-gold shrink-0 shadow-sm group-hover:border-school-gold transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{idx + 1}. {step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Quick Inquiry Form */}
            <section className="bg-school-blue p-8 md:p-12 rounded-3xl shadow-xl text-white">
              <h2 className="text-3xl font-serif font-bold mb-4 text-school-gold">Quick Inquiry Form</h2>
              <p className="text-slate-300 mb-10 font-light">Have questions? Fill out this short form and our admissions counselor will get in touch within 24 hours.</p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Parent Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-school-gold transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-school-gold transition-colors" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Student Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-school-gold transition-colors" placeholder="Student Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Grade Applying For</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-school-gold transition-colors text-slate-400">
                    <option value="">Select Grade</option>
                    <option value="1">Grade I</option>
                    <option value="6">Grade VI</option>
                    <option value="9">Grade IX</option>
                    <option value="11-sci">Grade XI (Science)</option>
                    <option value="11-com">Grade XI (Commerce)</option>
                    <option value="11-art">Grade XI (Arts)</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Message (Optional)</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-school-gold transition-colors" placeholder="Ask us anything..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button variant="gold" size="lg" className="w-full md:w-auto">Submit Inquiry Request</Button>
                </div>
              </form>
            </section>
          </div>

          {/* Sidebar: Documents & Contact */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-school-blue mb-6 border-b pb-4 border-slate-100">Documents Required</h3>
              <ul className="space-y-4">
                {[
                  'Birth Certificate (Original + Copy)',
                  'Address Proof (Aadhar/Voter ID)',
                  'Last 3 years Report Cards',
                  'Transfer Certificate (Original)',
                  '5 Passport size photographs',
                  'Immunization Certificate',
                ].map((doc, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                    <div className="shrink-0 mt-1"><CheckCircle2 size={16} className="text-school-gold" /></div>
                    {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Button variant="outline" size="sm" className="w-full">Download Digital Prospectus</Button>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-xl font-serif font-bold text-white mb-6">Need Help?</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Our helpdesk is active from 8:00 AM to 4:00 PM for all admission related queries.</p>
              
              <div className="space-y-6">
                <a href="tel:+911123233562" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-school-gold group-hover:bg-school-gold group-hover:text-school-blue transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Helpline</h5>
                    <p className="font-bold">+91 11 2323 3562</p>
                  </div>
                </a>
                <a href="mailto:admissions@angloarabic.edu.in" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-school-gold group-hover:bg-school-gold group-hover:text-school-blue transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Us</h5>
                    <p className="font-bold">admissions@angloarabic.edu.in</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Secure Admissions</div>
                <div className="text-school-gold font-serif italic text-lg leading-none">AA</div>
              </div>
            </div>
            
            {/* FAQ Preview */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-school-blue mb-6">Common FAQs</h3>
              <div className="space-y-4">
                {[
                  'What is the minimum age for Grade I?',
                  'Is transport facility available?',
                  'Do you offer scholarships?',
                ].map((q, i) => (
                  <button key={i} className="w-full text-left p-4 rounded-xl border border-slate-100 hover:border-school-gold text-sm text-slate-700 flex justify-between items-center group transition-colors">
                    {q} <ChevronRight size={14} className="text-slate-400 group-hover:text-school-gold" />
                  </button>
                ))}
              </div>
              <Link to="/contact" className="block text-center mt-6 text-xs text-school-blue font-bold uppercase tracking-widest hover:text-school-gold transition-colors">View all FAQs</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
