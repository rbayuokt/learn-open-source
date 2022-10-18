import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Constants/gaya.scss";

//komponen
import KartuNama from "./Components/KartuNama";

//data
import { members } from "./data";
import Logo from "./Components/Logo";
import TitleLogo from "./Components/TitleLogo";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12} className="text-center">
            {/* <a
              href="https://github.com/rbayuokt/learn-open-source"
              target="_nblank"
            >
              <img
                src="/hacktoberfest.svg"
                className="img-fluid mx-auto d-block py-5"
                width="450"
                alt=""
              />
            </a> */}
            <Logo />
            <TitleLogo />
          </Col>
        </Row>

        <Row className="mt-5">
          {members.map((datana, index) => (
            <KartuNama
              key={index}
              name={datana.name}
              quotes={datana.quotes}
              link={datana.link}
              linkText={datana.linkText}
            />
          ))}
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={12} lg={12}>
            <div className="py-4">
              <span className="text-center">
                Made With ❤️‍ in Cimahi <br /> by @rbayuokt
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
