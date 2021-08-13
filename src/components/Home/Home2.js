import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { skillsData } from "./skills_data";

function Home2() {
  const skills = skillsData.skills.icons.map(function (skills, i) {
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skills.class} style={{ fontSize: "400%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {skills.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    );
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> AM </span> I?
            </h1>
            <p className="home-about-body">
              I have a burning passion for creation and bring ideas to life.
              <br />
              <br />
              This has lead me down the road of{" "}
              <b className="purple">3d Modeling and Animation</b>, as well as
              working my way up the ladder to become a professional chef in one
              of <b className="purple">America's Top Ten Restaurants!</b>
              <br />
              <br />
              Currently, I am now pursuing more creation with the added aspect
              of wanting to solve problems and have an impact on people's lives
              through my love of design and code! 💖
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="skills-icons">
            <b className="purple skills">Some of my best skills:</b>
            <ul className="col-md-12">{skills}</ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h5>
              Feel Free To <span className="purple">Connect </span>With Me
            </h5>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JustinLupica"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/justin-lupica-124873a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Justin_Lupica"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
