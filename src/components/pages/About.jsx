import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import '../layout/About.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import React from 'react';




export default function About() {
    
  return (
    <>
    <div className="main-title">
      <h1>Welcome to DevelUp!</h1>
      <h5>
        A fullstack application that allow users to create flash cards and
        organize them by categories. <strong>It's time to DevelUp!</strong>
      </h5>
    </div>

      {/* <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link> */}

            <h4 className="team-title">Meet the jamelCase 🐫  Team!</h4>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/jamel.jpg" />
              <Card.Body>
                <Card.Title>Jamel Scott Fadel</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <a href="https://github.com/Jamelscott" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/jamelfadel/" target="_blank"><FaLinkedin/></a>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="images/sol.jpg"
              />
              <Card.Body>
                <Card.Title>Sol Youn</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <a href="https://github.com/Luflos" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/sol-youn/" target="_blank"><FaLinkedin/></a>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="images/gabe.jpg"
              />
              <Card.Body>
                <Card.Title>Gabe Guevara</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <a href="https://github.com/gitgabrielguevara" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/gabriel-guevara-fullstack/" target="_blank"><FaLinkedin/></a>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="images/brian.jpg"
              />
              <Card.Body>
                <Card.Title>Brian Lee</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <a href="https://github.com/br1anlee" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/brianjoonmolee/" target="_blank"><FaLinkedin/></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
