import React from "react";
import "../styles/LandingPage.css";

import { Button, Container, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beachWoman from "../images/women-on-beach.jpg";
import placeholderImg from "../images/clock-and-calendar.jpg";

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
            <span
              style={{
                background: "rgb(255, 255, 255, 0.4)",
                padding: "0.3rem",
              }}
            >
              Keep track of what matters.
            </span>
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
                <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>
                  Be the friend you want to have.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  PocketRM remembers the important things, so you don't have to.
                  Never miss another birthday, anniversary, or important day for
                  the people in your life.
                </p>
              </div>
              <div className="landing-text">
                <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>
                  Dating and Networking made easy.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  Met a recruiter at a coffee shop? On so many dating apps you
                  can't keep track of all the fish in your sea? PocketRM stores
                  these connections in a way that makes it easy to keep track of
                  who is who.
                </p>
              </div>
            </Col>
            <Col floated="right" width={6}>
              <Image size="large" src={beachWoman} alt="friends-on-beach" />
            </Col>
            <hr className="solid"></hr>
          </Row>
          <Row data-aos="fade-up">
            <Col floated="right" width={6}>
              <Image size="large" src={placeholderImg} alt="demo" />
            </Col>
            <Col width={8}>
              <div className="landing-text">
                <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>
                  Be the friend you want to have.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  PocketRM remembers the important things, so you don't have to.
                  Never miss another birthday, anniversary, or important day for
                  the people in your life.
                </p>
              </div>
              {/* <div className="landing-text">
                <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>
                  Dating and Networking made easy.
                </h3>
                <p style={{ fontSize: "1.33em" }}>
                  Met a recruiter at a coffee shop? On so many dating apps you
                  can't keep track of all the fish in your sea? PocketRM stores
                  these connections in a way that makes it easy to keep track of
                  who is who.
                </p>
              </div> */}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
