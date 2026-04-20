import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Academics from './pages/Academics';

// Placeholder Pages for now
const UnderConstruction = ({ title }: { title: string }) => (
  <div className="py-24 text-center">
    <h2 className="text-4xl font-serif font-bold text-school-blue mb-4">{title}</h2>
    <p className="text-slate-500">This section is currently being updated with the latest information. Please check back soon.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UnderConstruction title="About Us" />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<UnderConstruction title="Our Facilities" />} />
          <Route path="/student-life" element={<UnderConstruction title="Student Life" />} />
          <Route path="/results" element={<UnderConstruction title="Results & Achievements" />} />
          <Route path="/gallery" element={<UnderConstruction title="School Gallery" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
