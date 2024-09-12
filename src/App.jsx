import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Model from './components/Model.jsx';
import * as Sentry from '@sentry/react';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App); // App;
