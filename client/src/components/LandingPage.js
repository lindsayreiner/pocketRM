import React from "react";
import "../styles/LandingPage.css";

import { Button, Container, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beachWoman from "../images/women-on-beach.jpg";

export default function LandingPage() {
  return (
    <>
      <section>
        <Container className="hero container" data-aos="">
          <h2
            className="slogan"
            style={{
              fontSize: "2.25em",
              fontWeight: "normal",
              marginTop: "1.5em",
              color: "black",
            }}
          >
            Keep track of what matters.
          </h2>
          <a href="/register">
            <Button className="getStartedBtn btn-lg" color="violet">
              Get Started <FontAwesomeIcon icon="arrow-right" />
            </Button>
          </a>
        </Container>
        <div
          style={{ padding: "6em 0em" }}
          className="landing-body"
          data-aos="fade-up"
        >
          <Row>
            <Col width={8}>
              <div className="landing-text">
                <h3 style={{ fontSize: "2em" }}>
                  Never forget special moments.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  PocketRM remembers the important things, so you don't have to.
                  Never forget another birthday, anniversary,
                </p>
              </div>
              <div className="landing-text">
                <h3 style={{ fontSize: "2em" }}>
                  Dating and Networking made easy.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  Met a recruiter at a job fair? On so many dating apps you
                  can't keep track of all the fish in your sea? PocketRM stores
                  these contacts in groups that make it easy to keep track of
                  who is who.
                </p>
              </div>
            </Col>
            <Col floated="right" width={6}>
              <Image size="large" src={beachWoman} alt="friends-on-beach" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
