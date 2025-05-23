'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    id: "01",
    img: '/images/services-img1.jpg',
    title: 'Our Premium Services',
    text: `Beeyoond offers a one-stop creative studio delivering high-quality 2D and 3D animation, advanced video editing, and immersive game development. 
Our multidisciplinary team transforms ideas into captivating visual experiences using cutting-edge tools and technology.`,
  },
  {
    id: "02",
    img: '/images/services-img2.jpeg',
    title: 'Complete Game Development',
    text: `From the initial concept and design to development and deployment, we build end-to-end game solutions tailored for all platforms.
Whether you're aiming for mobile, PC, or immersive metaverse environments, we bring your game ideas to life with creativity and precision.`,
  },
  {
    id: "03",
    img: '/images/services-img3.jpg',
    title: 'Next-Gen 3D Animation',
    text: `Our 3D animation services are built to meet next-gen standards — from realistic character design and lifelike motion to dynamic VFX simulations.
We blend storytelling with visual excellence, delivering animations that feel immersive, fluid, and emotionally engaging.`,
  },
  {
    id: "04",
    img: '/images/services-img4.jpg',
    title: 'AI & Gaming Solutions',
    text: `Harnessing the power of artificial intelligence, we build smarter, more interactive gaming environments.
Our services include AI-driven character behaviors, procedural world generation, and intelligent content creation to enhance gameplay and realism.`,
  },
];

export const Services = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    const total = slidesData.length;

    cardRefs.current.forEach((card, index) => {
      gsap.set(card, {
        yPercent: index === 0 ? 0 : 100,
        scale: index === 0 ? 1 : 0.8,
        opacity: index === 0 ? 1 : 0,
        zIndex: total - index,
      });
    });

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
      timeline
        .to(
          cardRefs.current[i],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            zIndex: total + i,
            ease: 'power2.out',
            duration: 1,
          },
          i - 1
        )
        .to(
          cardRefs.current.slice(0, i),
          {
            scale: 0.95,
            opacity: 0,
            ease: 'power1.out',
            duration: 1,
          },
          i - 1
        );
    }
  }, { scope: containerRef }); // 🔄 Scoped GSAP to containerRef

  

  return (
    <>
      <div className="container-fluid services-start-section">
        <div className="about-head-des">
          <h1 className="text-heading pt-5">Services</h1>
        </div>
        <div className="container services-para">
          <p>
            At Beeyoond, we push the boundaries of digital
            storytelling through animation, gaming, AI, and immersive technology.
            Our team blends creativity with cutting-edge tech to deliver experiences that captivate and inspire.
          </p>
        </div>
      </div>
   <div ref={containerRef} className="services-section">
  {slidesData.map((slide, index) => (
    <div
      key={index}
      ref={(el) => (cardRefs.current[index] = el)}
      className="services-card"
    >
      <div className="container">
        <div className="services-inner row">
          {/* Left column - content */}
          <div className="services-content col-md-6">
            <h5 className="card-id">[{slide.id}]</h5>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <button
              className="read-more-btn"
              onClick={() => alert(`Read more about: ${slide.title}`)}
            >
              <span>Read More</span>
            </button>
          </div>

          {/* Right column - image */}
          <div className="services-image col-md-6">
            <img src={slide.img} alt={`slide-${index}`} className='img-fuild' />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};
