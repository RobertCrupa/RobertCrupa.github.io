import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} SB</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
