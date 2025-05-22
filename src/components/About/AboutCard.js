import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Senior Softare Engineer </span>
            based in <span className="purple">London, England.</span>
            <br />
            I currently work at Clear-Com where I build really awesome embedded communication systems.
            <br />
            <br />
            Apart from engineering, I also do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mixed Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Have you tried turning it off and on again?"{" "}
          </p>
          <footer className="blockquote-footer">Timeless advice</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
