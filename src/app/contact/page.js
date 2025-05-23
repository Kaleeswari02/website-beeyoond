'use client';

import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import Header from '../header/page';

export default function Contact() {
  return (
    <>
              <Header/>
    <div>
      {/* Section 1: Banner */}
     <div
  className="text-white text-center py-5 contact-banner"
>
  <div className='contact-banner-inner' />
  <Container className='contact-banner-content'>
    <h1>Contact Us </h1>
    <p> We'd love to hear from you!</p>
  </Container>
</div>


      {/* Section 2: Image and Contact Form */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/contact-image.jpg"
              alt="Contact Illustration"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h3>Send Us a Message</h3>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" id="message" rows="4" placeholder="Your message" />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Section 3: Contact Info Cards */}
      <Container className="py-5 bg-light">
        <Row>
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <CardBody>
                <CardTitle tag="h5">Email</CardTitle>
                <CardText>contact@yourcompany.com</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <CardBody>
                <CardTitle tag="h5">Address</CardTitle>
                <CardText>123 Main St, Your City, Country</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <CardBody>
                <CardTitle tag="h5">Phone</CardTitle>
                <CardText>+1 234 567 890</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Section 4: Map and About */}
      <Container fluid className="p-0">
        <Row>
          <Col md={6} className="p-0">
            {/* Embed Google Map here */}
          </Col>
          <Col md={6} className="p-5 bg-secondary text-white">
            <h2>About Our Company</h2>
            <p>
              We specialize in 2D/3D animation, video editing, AI, and gaming solutions.
              Our mission is to deliver exceptional digital experiences that go beyond expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
