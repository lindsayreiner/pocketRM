import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beachWoman from "../images/women-on-beach.jpg";

export default function LandingPage() {
  return (
    <>
      <Container text className="hero container">
        {/* <Header
                    as='h1'
                    content='PocketRM'
                    inverted
                    className='bizName'
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        color: 'black'
                    }}
                /> */}
        <h2
          className="slogan"
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            color: "black",
          }}
        >
          Keep track of what matters.
        </h2>
        <a href="./Login">
          <Button primary size="huge" className="getStartedBtn" color="violet">
            Get Started
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </a>
      </Container>
      {/* <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href='#'>Case Studies</a>
            </Divider> */}
      <div style={{ padding: "8em 0em" }} vertical>
        <Row>
          <Col width={8}>
            <h3 style={{ fontSize: "2em" }}>
              Never forget your family and friends special moments.
            </h3>
            <p style={{ fontSize: "1.33em" }}>
              PocketRM remembers the important things, so you don't have to.
              Never forget another birthday, anniversary,
            </p>
            <h3 style={{ fontSize: "2em" }}>
              Dating and Networking made easy.
            </h3>
            <p style={{ fontSize: "1.33em" }}>
              Met a recruiter at a job fair? On so many dating apps you can't
              keep track of all the fish in your sea? PocketRM stores these
              contacts in groups that make it easy to keep track of who is who.
            </p>
          </Col>
          <Col floated="right" width={6}>
            <img src={beachWoman} alt="friends-on-beach" />
          </Col>
        </Row>
        <Row>
          <Col textAlign="center">
            <Button size="huge" color="violet">
              Check Them Out
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
