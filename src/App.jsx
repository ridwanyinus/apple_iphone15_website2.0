import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Model from './components/Model.jsx';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <button className='text-white' onClick={() => methodDoesNotExist()}>
      Break the world
    </button>
  );

  // return (
  //   <main className='bg-black'>
  //     <Navbar />
  //     <Hero />
  //     <Highlights />
  //     <Model />
  //   </main>
  // );
};

export default Sentry.withProfiler(App); // App;
