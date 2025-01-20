import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import arcade from "../../Assets/Projects/arcade.jpg";
import neural from "../../Assets/Projects/neural-network.jpg";
import Rtype from "../../Assets/Projects/BeeR-Type.png";
import area from "../../Assets/Projects/area.png";
import "./projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rtype}
              isBlog={false}
              title="BeeR-Type (R-Type)"
              description="R-Type is an Epitech project for third-year level. It consists of creating a multiplayer 2D game inspired by classic arcade shoot-'em-ups, designed with a modular architecture. The project separates the server, client, and game engine to ensure scalability and maintainability while leveraging modern C++ standards, the Entity-Component-System (ECS) architecture, and robust networking protocols."
              ghLink="https://github.com/lucamartinet7/R-Type"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={area}
              isBlog={false}
              title="AREA"
              description="AREA is an Epitech project. We had to recreate the environment of IFTTT, with a backend, a web frontend and a mobile frontend."
              ghLink="https://github.com/LucaMartinet7/Area-Tek3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neural}
              isBlog={false}
              title="Neural Network"
              description="Neural Networks is an Epitech project for third year level, which consists to create neural network that can take a chess board as input, and outputs the status of the game using machine-learning-based solution."
              ghLink="https://github.com/LucaMartinet7/Neural-Network"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcade}
              isBlog={false}
              title="Arcade"
              description="The Arcade is an Epitech school project. It consists of creating a platform that allows you to play games with different graphic libraries and switch them at runtime. The project uses .so files to load the games dynamically."
              ghLink="https://github.com/LucaMartinet7/Arcade"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
