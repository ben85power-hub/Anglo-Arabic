import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  Info, 
  Lightbulb, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Users,
  Microscope,
  Palette,
  Trophy,
  History,
  MapPin,
  Phone
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-sleek-body">
      {/* Sticky Badge */}
      <div className="fixed top-32 left-0 z-50 bg-school-blue text-white py-2 px-6 rounded-r-full font-bold shadow-xl border border-white/20 text-sm hidden lg:block">
        ADMISSIONS OPEN 2026-27
      </div>

      {/* Hero Section - Split Grid */}
      <section className="relative min-h-[420px] lg:h-[500px] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] bg-white">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-school-blue leading-[1.1] mb-8">
              Nurturing Excellence, <br />
              Preserving Heritage.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              Experience a blend of historical legacy and 21st-century modern learning at Delhi's premier educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="md" variant="primary" href="/admissions">
                Apply for Admission
              </Button>
              <Button size="md" variant="secondary" href="/contact">
                Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right: Image & Floating Contact */}
        <div className="relative h-64 lg:h-full bg-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-school-blue/40"></div>
          
          {/* Floating Contact Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-2xl border-l-[5px] border-school-gold max-w-[280px] hidden md:block"
          >
            <h5 className="font-bold text-school-blue text-sm mb-3">Quick Contact</h5>
            <div className="space-y-1.5 text-slate-600 text-[0.8rem] font-medium">
              <p className="flex items-center gap-2"><span>📞</span> +91 11 2323 3562</p>
              <p className="flex items-center gap-2"><span>📧</span> info@angloarabic.edu.in</p>
              <p className="flex items-center gap-2"><span>📍</span> Ajmeri Gate, Delhi-06</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-school-gold py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years of Legacy', value: '330+' },
              { label: 'Affiliated Board', value: 'CBSE' },
              { label: 'Average Score', value: '98%' },
              { label: 'Success Stories', value: '4500+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-school-blue"
              >
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-semibold opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Sleek 2px gap style */}
      <section className="bg-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {[
          { 
            title: 'Academic Excellence', 
            desc: 'Rigorous CBSE curriculum taught by distinguished faculty members.', 
          },
          { 
            title: 'Modern Infrastructure', 
            desc: 'Smart classrooms, advanced labs, and state-of-the-art libraries.', 
          },
          { 
            title: 'Holistic Development', 
            desc: 'Balanced focus on sports, arts, and cultural heritage education.', 
          },
          { 
            title: 'Secure Campus', 
            desc: 'A safe, inclusive, and nurturing environment for every student.', 
          },
        ].map((feature, idx) => (
          <div 
            key={idx}
            className="bg-white p-8 md:p-10 flex flex-col justify-center gap-4 transition-colors hover:bg-sleek-accent"
          >
            <h4 className="text-lg font-bold text-school-blue leading-tight">{feature.title}</h4>
            <p className="text-slate-500 text-[0.8rem] leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Results & Programs - Keeping Existing Content with Sleek Styling */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-school-blue mb-4">Nurturing Excellence</h2>
          <div className="w-12 h-1 bg-school-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { level: 'Primary School', icon: <CheckCircle className="text-school-gold" />, desc: 'Grades I - V: Building strong foundations through activity-based learning.' },
            { level: 'Secondary School', icon: <CheckCircle className="text-school-gold" />, desc: 'Grades VI - X: Fostering critical thinking and scientific enquiry.' },
            { level: 'Senior Secondary', icon: <CheckCircle className="text-school-gold" />, desc: 'Grades XI - XII: Specialized streams for professional excellence.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-school-gold hover:-translate-y-1 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-school-blue mb-4">{item.level}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Final CTA */}
      <section className="bg-school-blue py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 italic">Start Your Journey Today</h2>
          <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
            Join a community that values history while preparing for the future. Limited seats available for the 2026 academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="gold" size="lg" href="/admissions">Apply Now Online</Button>
            <Button variant="outline" size="lg" href="/contact">Inquire via Phone</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
