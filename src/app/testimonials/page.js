'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Thomas Urban',
    quote:
      "I liked working with them because they were good. Their project management was really good. They worked in sprints, and I always communicated directly with their developer.",
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Jerry Sparkman',
    quote:
      "Browser compatibility increased markedly. Yellow’s developers met deadlines and addressed issues right away. They became a valuable partner.",
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Sofia Morel',
    quote:
      "The responsiveness and flexibility of the team helped us launch faster. We appreciated their communication and design clarity.",
    image: '/images/testimonial3.jpg',
  },
  {
    name: 'Alex Tan',
    quote:
      "They showed exceptional skill in design and user experience. Our customers noticed the difference right away.",
    image: '/images/testimonial4.jpg',
  },
  {
    name: 'Rachel Kim',
    quote:
      "Their team delivered fast and met all expectations. I’d definitely recommend them to anyone looking for a reliable dev partner.",
    image: '/images/testimonial5.jpg',
  },
];

export const Testimonials = () => {
  const containerRef = useRef();

  useEffect(() => {
    const panels = gsap.utils.toArray('.testimonial-panel');
    const totalPanels = panels.length;

    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        end: () => '+=' + containerRef.current.offsetWidth,
      },
    });

    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: panel,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="horizontal-testimonials-section" ref={containerRef}>
      {testimonials.map((item, index) => (
        <div className="testimonial-panel" key={index}>
          <div className="testimonial-content">
            <p className="quote">“{item.quote}”</p>
            <div className="author">
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
