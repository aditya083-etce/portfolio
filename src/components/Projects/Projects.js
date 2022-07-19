import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogify from "../../Assets/Projects/blogify.png";
import hungerstop from "../../Assets/Projects/hungerstop.png";
import arjs from "../../Assets/Projects/arjs.png";
import xylo from "../../Assets/Projects/xylo.png";
import clima from "../../Assets/Projects/clima.png";
import spaceinvaders from "../../Assets/Projects/spaceinvaders.png";

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
              imgPath={blogify}
              isBlog={false}
              title="BLOGIFY"
              description="This is a simple college blog app where blogs, interview experience and
              notices can be posted and shared. A strong authentication system is implemented using cfrf token
              and bcrypt library. Used NodeJS and MongoDB to support the backend."
              ghLink="https://github.com/aditya083-etce/collegeApp"
              demoLink="https://college-644-blog.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungerstop}
              isBlog={false}
              title="HUNGER STOP"
              description="This is Food Delivery App with secure login and sign up features using passport library and sessions.
              There is an admin side and customers side. Dynamic AJAX call along with Socket is implemented on delivery
              status update and on order booking.
              Used NodeJS server and MongoDB as database."
              ghLink="https://github.com/aditya083-etce/HungerStop"
              demoLink="https://hunger-stop-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arjs}
              isBlog={false}
              title="MUSIC MAKER ARJS"
              description="Used ARJS library to implement this marker based Augmented Reality project.
              Only the basic barcode marker is used.Howler JS library is used to control the audio for drum, guitar, mic
              and piano."
              ghLink="https://github.com/aditya083-etce/PlayWithARjsMusic"
              demoLink="https://music-marker-arjs.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceinvaders}
              isBlog={false}
              title="SPACE INVADERS"
              description="This is a game made using Python Pygame library.
              To make it challenging, difficulties will increase as you level up and also added a few realistic sounds to make it exciting"
              ghLink="https://github.com/aditya083-etce/Space-Invaders"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xylo}
              isBlog={false}
              title="XYLOPHONE"
              description="This is a Piano Player made using Flutter. It just shows the basic functionality of Flutter Widgets. It is Android and IOS compatible."
              ghLink="https://github.com/aditya083-etce/Xylophone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clima}
              isBlog={false}
              title="CLIMA"
              description="This is a Weather App made using Flutter. 
              It can fetch the weather of any city. A search system is implemented which triggers the OpenWeatherMap API. 
              It is Android and IOS compatible."
              ghLink="https://github.com/aditya083-etce/Clima" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
