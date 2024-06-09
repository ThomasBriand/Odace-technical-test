import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { FadeTransitionIn } from './transition';
import CarouselComponent from './Caroussel';
import CarouselComponentR from './CarousselRight';
import Services from './services';
import Feedback from './FeedBack';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const images = [
    'logo-big-brain-base-png.jpg',
    'logo-big-brain-base-png.jpg',
    'logo-big-brain-base-png.jpg',
  ];

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <>
      <div className="App">
        <header className={`App-header ${isScrolled ? "header-hidden" : ""}`}>
          <Header />
        </header>
      </div>
      <div className="App">
        <video width="100%" height="90%" autoPlay loop>
          <source src={process.env.PUBLIC_URL + 'landing_video.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>Big Brain</h1>
          <p>
            We think
            <br />
            further
            <br />
            and beyond
          </p>
        </div>
        <FadeTransitionIn />
      </div>
      <div className='about'>
        <div className='projects'>
          <h1>Our Projects</h1>
        </div>
      </div>
      <div className='carousel'>
      <CarouselComponent />
      </div>
      <div className='carousel'>
      <CarouselComponentR />
      </div>
      <div className='about'>
        <div className='projects'>
          <h1>Our Services</h1>
        </div>
      </div>
      <div className='services'>
        <Services />
      </div>
      <div className='about'>
        <div className='projects'>
          <h1>Some Feedback</h1>
        </div>
        <div className='feedback'>
          <Feedback />
        </div>
      </div>
      <div className='splitter'>
      </div>
      <Footer />
    </>
  );
}

export default App;