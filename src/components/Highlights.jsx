import { rightImg, watchImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    });
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section id='highlights' className='common-padding h-full w-screen overflow-hidden bg-zinc '>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>

          <div className='flex flex-wrap items-end justify-between gap-4'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch icon' className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt='right icon' className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
