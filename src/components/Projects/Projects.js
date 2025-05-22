import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ros2 from "../../Assets/Projects/ros2.png";
import stratosource from "../../Assets/Projects/strato.png";
import pragueCycle from "../../Assets/Projects/pragueCycle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stratosource}
              isBlog={false}
              title="StratoSource"
              description="A procurement and supply chain risk management tool tailored for UAV drone manufacturers. Built during the London Defence Tech Hackathon 2025."
              ghLink="https://www.linkedin.com/posts/robert-crupa_londondefencetechhackathon-activity-7330523112213475330-moxG?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfh0PMBBOUzT-KOltW_6tSGgsJ-Q8k2Sd0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pragueCycle}
              isBlog={false}
              title="PragueCycle"
              description="A smart bin solution for Prague's waste management system. Using a raspberry Pi and a camera for image recognition. Built during the Prague Collabothon 2023."
              ghLink="https://github.com/CaffeinOverflow/collabothon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ros2}
              isBlog={false}
              title="Ros2 Autonomous Rover"
              description="Trained a deep reinforcement learning agent to navigate a simulated environment using the ROS2 framework. The agent was able to learn how to navigate the environment and avoid obstacles using the DQN algorithm."
              ghLink="https://github.com/RobertCrupa/Snake_Game_AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
