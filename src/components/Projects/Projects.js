import React from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/react-dashboard-01.png";
import instagram from "../../Assets/Projects/instagram_feed.jpeg";
import movieApp from "../../Assets/Projects/react-movie-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col lg={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram Clone"
              description="I built this Instagram clone using React for the front end UI, with Tailwind CSS for the styling. For the backend, I used Firebase to store users, and photos, and to perform suthentication tasks."
              link="https://musing-hypatia-273476.netlify.app/"
              github="https://github.com/JustinLupica/instagram-clone"
              icons={["React", "JavaScript", "Tailwind CSS", "Firebase"]}
              git
              push
            />
          </Col>
          <Col lg={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="Created a business admin dashboard using React for the UI. This was a fun, personal project that I ended up donating to a family business to use "
              link="https://secret-atoll-88700.herokuapp.com/"
              github="https://github.com/JustinLupica/react-admin-dashboard"
              icons={["React", "JavaScript", "CSS 3"]}
            />
          </Col>

          <Col lg={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie Viewer (Netflix UI)"
              description="A movie veiwer app that I built with React, and Bootstrap for styling. This app features a 'Netflix'-like UI, as it features a horizontal scroll section."
              link="https://morning-escarpment-99053.herokuapp.com/"
              github="https://github.com/JustinLupica/react-movie-app"
              icons={["React", "JavaScript", "Bootstrap"]}
            />
          </Col>

          {/* <Col lg={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
              icons={["React", "JavaScript"]}
            />
          </Col>

          <Col lg={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
              icons={["React", "JavaScript"]}
            />
          </Col>
          <Col lg={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              icons={["React", "JavaScript"]}
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
