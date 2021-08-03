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

  // const splitProps = props.icons.split(",");
  // console.log(splitProps);
  // Look at the props.icons and filter through the skillsData array and only keep the JSON objects that match the props
  // console.log(props.icons);
  // for (let i = 0; i < props.icons.length; i++) {
  //   console.log(props.icons[i]);
  // }

  // let icons = skillsData.skills.icons.filter(function (icon) {
  //   return icon.class === props.icons.forEach();
  // });
  // console.log(icons);

  // skillsData.skills.icons.filter(checkIcon)

  // function checkIcon(icon) {
  //   if (icon === props.icon)
  // }

  // const techStack = skillsData.skills.icons.map(function (icon, i) {
  //   if (icon.name === props.icon) {
  //     return (
  //       <li className="list-inline-item mx-3" key={i}>
  //         <span>
  //           <div className="text-center skills-tile">
  //             <i className={icon.class} style={{ fontSize: "400%" }}>
  //               <p
  //                 className="text-center"
  //                 style={{ fontSize: "30%", marginTop: "4px" }}
  //               >
  //                 {icon.name}
  //               </p>
  //             </i>
  //           </div>
  //         </span>
  //       </li>
  //     );
  //   }
  // });
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
            <Card.Footer></Card.Footer>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
export default ProjectCards;
