import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Luca Martinet </span>
            from <span className="blue"> Ornex, France.</span>
            <br />
            I am currently a student in software development at Epitech.
            <br />
            I am completing my Bachelor's degree in Computer Science from Epitech.
            Next year I will be doing a Master's degree in Computer Science hopefully at Cardiff Metropolitan University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(34, 131, 211)" }}>
            "If you’re not improving, you’re falling behind."{" "}
          </p>
          <footer className="blockquote-footer">Chris Bumstead</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;