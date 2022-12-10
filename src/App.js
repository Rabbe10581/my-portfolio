import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Banner from './pages/Banner/Banner';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
