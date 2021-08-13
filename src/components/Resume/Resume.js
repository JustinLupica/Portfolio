import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/justinLupicaResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-header">Experience</h3>
            <Resumecontent
              title="Eston's Bakery, Toledo OH -- Web Developer (Contract)"
              date="January 2020 - March 2020, June 2021 - Current"
              content={[
                "-Built a Ruby on Rails application that is able to take orders in from the front end, and associate the order with a customer and existing products in the backend database. This project was a full-stack application and used an MVC architecture file structure.",
                "-Built out the online store for the company to expand into e-commerce. Created custom website pages, sections, and features needed using HTML, CSS, JavaScript, and Liquid.",
              ]}
            />
            <Resumecontent
              title="Freelancer, Toledo OH -- Web Developer/3D Modeler"
              date="January 2020 - June 2021"
              content={[
                "-Worked on various projects for various clients building out both 3d models to be used for advertising or 3d printing purposes, as well as coding projects to help businesses become more organized or provide a service they are wanting to incorporate into their business.",
              ]}
            />
            <Resumecontent
              title="Charley's Steakhouse, Orlando FL -- Lead Grill Pit Master"
              date="July 2019 - December 2019"
              content={[
                "-Lead the Grill Pit to ensure proper stocking of products, entrees were cooked to proper temperature, work area was clean, and sanitized regularly to comply with health codes and an organized work environment.",
              ]}
            />
            <Resumecontent
              title="Chef Marcel Catering, Toledo OH -- Catering Chef, Pastry Chef"
              date="August 2015 - July 2019"
              content={[
                "-Assisted the Head Chef Marcel in various duties, such as overseeing the catering department, serving as the Pastry Chef, and working many events in many high-end locations such as pristine Country Clubs, Yacht Clubs, Museums, Welltower (formerly Health Care REIT, a fortune 500 multi-million dollar company).",
              ]}
            />
            <Resumecontent
              title="AdToons, Toledo OH -- Animator/Editor(Contract)"
              date="February 2015 - August 2015"
              content={[
                "-Provided animations and editing for Adtoons’ marketing videos. This work included editing within Premiere to sync actions on screen to a voiceover, and creating animations in After Effects and Blender/Autodesk Maya to render and edit the animations over the video.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-header">Education</h3>
            <Resumecontent
              title="Flatiron School - Software Engineering"
              date="2020 - 2021"
              content={[
                "Flatiron School is a highly intensive, and immersive software engineering program that has about a 6% acceptance rate.",
              ]}
            />
            <Resumecontent
              title="Full Sail University - 3D Computer Animation"
              date="2018-2020"
              content={[
                "Full Sail University is a leading school in the  3d computer animation industry located in Winter Park (Orlando) FL.",
              ]}
            />
            <h3 className="resume-header">Tech Skills</h3>
            <Resumecontent
              title=""
              content={[
                "Ruby: Ruby on Rails, Sinatra, ActiveRecord",
                "JavaScript(ES6): NodeJS, React, React Native, React Native Navigation, Redux, Thunk, Hooks, Electron, Express",
                "SQL: SQLite3, PostgreSQL",
                "HTML5, CSS",
                "Microsoft Office Suite",
                "3D/Design: Blender, Autodesk Maya, Substance 3d, Adobe Creative Suite (Photoshop, Premiere, After Effects)",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
