import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col className="text-center py-3 footer">
          
          <span>&copy; 2023 Shauna McCord Interpreting</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;