
"use client";
import { Container, Row, Col, Button } from "reactstrap";
import "./home.css";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div className="heroSection ">
      <video
        autoPlay
        muted
        loop
        className="videoBackground"
        src="/video/banner.mp4" // Place your video in public/videos/
        type="video/mp4"
      />
      <div className="overlay"/>

      <Container className="">
        <Row className=" align-items-center hero-overlay-content">
          <Col md={6} className="mt-xl-3">
            <h1 className="heading">
            Where Imagination Meets Innovation
            </h1>
            <p className="subheading">
            Beeyoond creates stunning 2D/3D animations, immersive metaverse experiences, next-gen games, and smart AI-powered solutions.
            </p>
            <Link href="/get-started" passHref>
              <button className="banner-ctn-btn">Get Started &nbsp;	<span><img src="/images/Animation - 1747636373440.gif" alt="img" className="banner-btn"/></span></button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default HomeSection;