import React from "react";
import Card from "react-bootstrap/Card";
import { FaPlaystation, FaPlaneDeparture } from "react-icons/fa";
import { GiFamilyHouse, GiAmericanFootballHelmet } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi! I am <span className="purple">Justin Lupica </span>
            from <span className="purple"> Toledo, OH.</span>
            <br />I am a Software Engineering Graduate from Flatiron, with a
            passion for <span className="purple"> Front End Development</span>
            <br />
            <br />
            When I'm not coding, here are some other activities that I love to
            do!
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <GiFamilyHouse /> Spending time with my
              <span className="purple"> wife and kids</span>
            </li>
            <li className="about-activity">
              <FaPlaystation /> Playing Games
            </li>
            <li className="about-activity">
              <FaPlaneDeparture /> Traveling
            </li>
            <li className="about-activity">
              <GiAmericanFootballHelmet /> Being a diehard
              <span className="purple"> Cincinnati Bengals </span>
              fan!
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
