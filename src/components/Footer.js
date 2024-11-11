import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>Aadhi Shankara Grand Mart</h5>
            <p>Contact us: 123-456-7890</p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/offers">Offers</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Follow Us</h5>
            <p>Social media links</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
