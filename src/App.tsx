import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesStrip from './components/FeaturesStrip';
import Services from './components/Services';
import Materials from './components/Materials';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <Services />
        <Materials />
        <Statistics />
        <Testimonials />
        <Process />
        <FAQ />
        <Projects />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
