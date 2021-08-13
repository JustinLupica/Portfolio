import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h3 className="purple">My Story</h3>
        <p className="about-me-story">
          I was just about to start high school when I discovered my love for
          creating and bringing ideas to life, and this led me down the road of
          learing 3d computer animation and dabbling in programming.
          <br />
          I loved the idea of being able to think or dream of something and then
          being able to see it live right in front of you was so cool to me.
          This led me down the road of learning drawing, and 3d art and
          animation.
          <br /> After I graduated high school, I decided I wanted to stick with
          my hobby and make it a career. So, I went to school for 3d Computer
          Animation. But I wanted more of an impact, and I thought "What better
          impact than to help solve people's problems?", and quickly started
          researching and falling in love with coding all over again!
          <br />
          After some studying on my own, I enrolled in Flatiron's Software
          Engineering program, and loved every second of it! Now, I absolutely
          love what I do and have come a long way on my journey!
        </p>
        <br />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
