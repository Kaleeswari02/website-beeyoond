'use client';
import Link from 'next/link';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
        <div className="container-fluid mt-xl-5" style={{ backgroundColor: '#000000' }}>
      <div className="container footer-container mt-xl-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-xl-4">
            <div className="comapny-info mt-xl-4 p-3">
                 <img src="/images/logo.png" alt="Description of image" width={150} height={60} className="logo-footer"/>
              <p className="footer-para p-xl-3">
                Beetech Solution (Pvt.) Ltd is a premier provider of innovative IT-enabled solutions and services,
                catering to both local and international clients.
              </p>
              <div className="soc-icons mb-xl-3">
                <span className="social-i">
                  <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  </Link>
                </span>
                <span className="social-i">
                  <Link href="https://www.instagram.com/p/DJoxDdohR6f/?img_index=5&igsh=bjYxZHlpZzVibDB1" target="_blank">
                  <FontAwesomeIcon icon={faInstagram}/>
                  </Link>
                </span>
                <span className="social-i">
                  <Link href="https://www.linkedin.com/company/beeyoondgaming/?originalSubdomain=in" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin}/>
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="col-xl-4">
            <div className="services-content-footer mt-xl-5">
              <h2 className="footer-head">What We Do</h2>
              <br />
              <p className="footer-para">2D Art Team</p>
              <p className="footer-para">3D Art Team</p>
              <p className="footer-para">Video Editing</p>
              <p className="footer-para">Creative Strategy</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-xl-4">
            <div className="footer-contact mt-xl-5">
              <h2 className="footer-head">Our Contacts</h2>
              <br />
              <p>
                <a href="tel:9942998598" target="_blank" className="footer-para mt-xl-4" style={{ textDecoration: 'none' }}>
               &nbsp;9942998598
                </a>
              </p>
              <p>
                <a href="mailto:business@beeyoondgaming.com" className="footer-para" style={{ textDecoration: 'none' }}>
                &nbsp;business@beeyoondgaming.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/dir/Hashcodex+-+Hashcodexperts+Infoservices+Private+Limited+%7C+Fintech+Software+Development+Company,+Annai+Therasa+Street,+Madurai,+Tamil+Nadu/9.9330861,78.0924716/@9.932748,78.053762,13z/data=!4m9!4m8!1m5!1m1!1s0x474a4c1d497ffdad:0x9682c1eb205f8fb2!2m2!1d78.0950476!2d9.9327505!1m0!3e0?entry=ttu"
                  target="_blank"
                  className="footer-para"
                  style={{ textDecoration: 'none' }}
                >
                   &nbsp;Annai Therasa Street<br />
                  Kalavasal, Madurai, <br />
                  Tamil Nadu 625016
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyrights p-3">
        <p>© 2025 beeyoondgaming. All rights reserved.</p>
      </div>
    </div>
    </>

  );
}
