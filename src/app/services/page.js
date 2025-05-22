'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    img: '/images/services1.png',
    title: 'Our Premium Services',
    text: 'We provide 2D/3D animation, video editing, and game development — all in one studio.',
  },
  {
    img: '/images/services2.png',
    title: 'Complete Game Development',
    text: 'From concept to code, we build immersive experiences.',
  },
  {
    img: '/images/services1.png',
    title: 'Next-Gen 3D Animation',
    text: 'Realistic characters, environments, and simulations.',
  },
  {
    img: '/images/services2.png',
    title: '4th Complete Game Development',
    text: 'From concept to code, we build immersive experiences.',
  },

];

export const Services = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);


  useEffect(() => {
    const total = slidesData.length;

    // Set initial state: first card visible, others below (yPercent: 100)
    cardRefs.current.forEach((card, index) => {
      if (index === 0) {
        gsap.set(card, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          zIndex: total,
        });
      } else {
        gsap.set(card, {
          yPercent: 100,
          scale: 0.8,
          opacity: 0,
          zIndex: total - index,
        });
      }
    });

    // Scroll-triggered animation timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (total - 1)}`,
        scrub: true,
        pin: true,
      },
    });

    for (let i = 1; i < total; i++) {
      timeline.to(
        cardRefs.current[i],
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          zIndex: total + i,
          ease: 'power2.out',
          duration: 1,
          onUpdate: () => {
            for (let j = 0; j < i; j++) {
              gsap.set(cardRefs.current[j], {
                yPercent: 0,
                scale: 0.95,
                opacity: 1,
                zIndex: total - j,
              });
            }
          },
        },
        i - 1
      );
    }
  }, []);

  return (

    <div ref={containerRef} className="services-section">
      <div className='container'>
        <div className='row'>

          <div className='justify-content-center'>
            <h2 className='text-white'>Our Services</h2>
            <p className='text-white'>From concept to code, we build immersive experiences.</p>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="services-card"
              >

                <div className="services-inner">
                  <div className="services-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                  </div>
                  <div className="services-image">
                    <img src={slide.img} alt={`slide-${index}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
};
