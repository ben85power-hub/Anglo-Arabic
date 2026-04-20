import { motion } from 'motion/react';
import { BookOpen, Globe, Microscope, Palette, Calculator, Music, Heart, Briefcase, GraduationCap, ChevronRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Academics() {
  const streams = [
    {
      title: "Science Stream",
      icon: <Microscope className="text-blue-500" />,
      subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English Core", "Computer Science / Economics"],
      desc: "For future engineers, doctors, and research scientists."
    },
    {
      title: "Commerce Stream",
      icon: <Calculator className="text-green-500" />,
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English Core"],
      desc: "Ideal for future entrepreneurs, CAs, and business leaders."
    },
    {
      title: "Humanities & Arts",
      icon: <Palette className="text-purple-500" />,
      subjects: ["History", "Political Science", "Syllabus Choice", "Economics", "English Core"],
      desc: "For future diplomats, journalists, and creative thinkers."
    }
  ];

  return (
    <div className="bg-sleek-body pb-24">
      {/* Header */}
      <section className="bg-white border-b-4 border-school-gold py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-5xl md:text-6xl font-bold text-school-blue mb-8">Academic Curriculum</h1>
             <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
               Our educational framework is built on the CBSE curriculum, enhanced with heritage values and modern innovative teaching methodologies.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Levels of Education */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              level: "Primary School", 
              grades: "Grades I - V", 
              focus: "Foundational literacy, numeracy, and activity-based learning.",
              icon: <Heart size={32} className="text-school-gold" />,
              details: ["Holistic Child Development", "Introduction to Languages", "EVS & Basic Math", "Art & Craft Workshops"]
            },
            { 
              level: "Secondary School", 
              grades: "Grades VI - X", 
              focus: "Building analytical skills, scientific enquiry, and mathematical depth.",
              icon: <BookOpen size={32} className="text-school-gold" />,
              details: ["Critical Thinking", "Laboratory Experiments", "Language Proficiency", "ICT & Computer Skills"]
            },
            { 
              level: "Senior Secondary", 
              grades: "Grades XI - XII", 
              focus: "Specialized streams for professional career paths and higher education.",
              icon: <GraduationCap size={32} className="text-school-gold" />,
              details: ["Stream Specialization", "Career Counseling", "Competitive Exam Prep", "Leadership Programs"]
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-school-blue mb-1">{item.level}</h3>
              <p className="text-sm font-bold text-school-gold-dark uppercase tracking-widest mb-4">{item.grades}</p>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed font-light">{item.focus}</p>
              <ul className="space-y-3">
                {item.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-500">
                    <ChevronRight size={14} className="text-school-gold shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Streams Deep Dive */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Senior Secondary Streams</h2>
            <div className="w-20 h-1 bg-school-gold mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {streams.map((stream, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-3xl"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  {stream.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{stream.title}</h3>
                <p className="text-slate-400 text-sm mb-8 font-light italic">"{stream.desc}"</p>
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-school-gold">Core Subjects</h4>
                  <ul className="space-y-2">
                    {stream.subjects.map((sub, j) => (
                      <li key={j} className="text-sm text-white/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-school-gold rounded-full"></div>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="lg:w-1/2">
             <h2 className="text-4xl font-serif font-bold text-school-blue mb-8">Beyond Academics</h2>
             <p className="text-slate-600 font-light text-lg mb-10 leading-relaxed italic">
               "Education is not just about books, it's about discovering the infinite potential within."
             </p>
             <div className="grid grid-cols-2 gap-8">
               {[
                 { name: 'Sports Excellence', icon: <Trophy size={20} className="text-school-gold" />, desc: 'Cricket, Football, Athletics' },
                 { name: 'Creative Arts', icon: <Palette size={20} className="text-school-gold" />, desc: 'Painting, Sculpture, Craft' },
                 { name: 'Performing Arts', icon: <Music size={20} className="text-school-gold" />, desc: 'Music, Drama, Heritage Dance' },
                 { name: 'Future Skills', icon: <Briefcase size={20} className="text-school-gold" />, desc: 'Robotics, Coding, STEM' },
               ].map((c, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex items-center gap-3 font-bold text-slate-800">
                     {c.icon} {c.name}
                   </div>
                   <p className="text-xs text-slate-500">{c.desc}</p>
                 </div>
               ))}
             </div>
             <div className="mt-12">
               <Button variant="outline" size="md">View Annual Event Calendar</Button>
             </div>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/sport/400/500" alt="Sports" className="rounded-2xl h-80 w-full object-cover shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/art/400/400" alt="Art" className="rounded-2xl h-48 w-full object-cover shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/music/400/400" alt="Music" className="rounded-2xl h-48 w-full object-cover shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/lab-2/400/500" alt="STEM" className="rounded-2xl h-80 w-full object-cover shadow-lg" referrerPolicy="no-referrer" />
              </div>
           </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
           <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-school-gold/10 rounded-2xl flex items-center justify-center text-school-gold shrink-0">
                 <Download size={32} />
               </div>
               <div>
                 <h4 className="text-xl font-serif font-bold text-school-blue">Academic Resources</h4>
                 <p className="text-sm text-slate-500">Download the detailed syllabus, book lists, and exam schedules for 2026.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <Button variant="outline">NCERT Syllabus 2026</Button>
               <Button variant="primary">Download Prospectus</Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

const Trophy = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
