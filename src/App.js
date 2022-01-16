import Hero from './components/hero/Hero';
import Social from './components/social/Social';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <Social />
        <Skills />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default App;
