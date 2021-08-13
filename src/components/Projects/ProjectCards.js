import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { skillsData } from "../Home/skills_data";

function ProjectCards(props) {
  console.log(props.icons);
  const techStack = [];
  props.icons.forEach(function (skill) {
    skillsData.skills.icons.filter((icon) => {
      if (skill == icon.name) {
        techStack.push(icon);
      }
    });
  });

  const icons = techStack.map(function (icon, i) {
    console.log("icon", icon);
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={icon.class} style={{ fontSize: "200%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {icon.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    );
  });

  return (
    <Card className="project-card-view" style={{ width: "22rem" }}>
      <Container fluid>
        <Row>
          <Col>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                {props.description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Button
              variant="primary"
              size="sm"
              href={props.link}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp;
              {props.isBlog ? "View Blog" : "View Project"}
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-secondary"
              size="sm"
              href={props.github}
              target="_blank"
            >
              <AiFillGithub /> &nbsp; View Github
            </Button>
          </Col>
          <Card.Footer style={{ paddingTop: "30px" }}>{icons}</Card.Footer>
        </Row>
      </Container>
    </Card>
  );
}
export default ProjectCards;
