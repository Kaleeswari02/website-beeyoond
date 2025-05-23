
"use client";
import { Container, Row, Col, Button } from "reactstrap";
import "./home.css";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div className="heroSec ">
      <img src="/images/banner01.png" alt="banner-image" className="banner-img-set"/>
      <div className="overlay"/>

      <Container className="mb-xl-5">
        <Row className="hero-overlay-content">
          <Col xl={12} className="mt-xl-3">
            <h1 className="heading">
            Where Imagination <br /> <span className="text-span">Meets Innovation</span>
            </h1>
            <div className="cube-video"> <img src="/video/banner-cube.gif" alt=""  className="video-sec"/></div>
            {/* <p className="subheading">
            Beeyoond creates stunning 2D/3D animations, immersive metaverse experiences, next-gen games, and smart AI-powered solutions.
            </p>
            <Link href="/get-started" passHref>
              <button className="banner-ctn-btn">Get Started &nbsp;	<span><img src="/images/Animation - 1747636373440.gif" alt="img" className="banner-btn"/></span></button>
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default HomeSection;