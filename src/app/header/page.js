"use client"
import { useEffect, useState } from 'react';
import "./header.css";
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleOffcanvas = () => setIsOpen(!isOpen);
    const [isScrolled, setIsScrolled] = useState(false);
    const navLinkClass = `nav-item ${isScrolled ? 'text-dark' : 'text-white'}`;
    // curser-animation
    
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
      <>
      {/* <div className={`container-fluid fixed-top transition-all ${isScrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black'}`} style={{ transition: '0.3s ease' }}></div>
      <div className={`container-fluid fixed-top transition-all ${isScrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black'}`} style={{ transition: '0.3s ease , cursor: pointer;' }}> */}
      <div className={`container-fluid fixed-top transition-all ${isScrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black'}`}></div>
      <div className={`container-fluid header-fluid fixed-top transition-all ${isScrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black'}`} >
  <div className="container mt-xl-3">
    <div className="row">
      <div className="col-xl-2">
        <Link href="/">
        <img className='logo-image-bg' src='/images/logo.png' alt="Description of image" width={150} height={60}/>
        </Link>
      </div>
      <div className="col-xl-8">
        <nav className="navbar-area">
          <ul className="nabar-section">
            <li><Link className={navLinkClass} href="/">Home</Link></li>
            <li><Link className={navLinkClass} href="#">About us</Link></li>
            <li><Link className={navLinkClass} href="#">Services</Link></li>
            <li><Link className={navLinkClass} href="/portfolio">Portfolio</Link></li>
            <li><Link className={navLinkClass} href="#">Testimonials</Link></li>
            <li><Link className={navLinkClass} href="#">Careers</Link></li>
            <li><Link className={navLinkClass} href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="col-xl-2 mt-xl-2">
      <a href="tel:9942998598">
  <button
    className={`contact-btn ${isScrolled ? 'text-black' : 'text-white'}`}>
    Contact Us
  </button>
</a>
      </div>
    </div>
  </div>
</div>

      </>
    )
}