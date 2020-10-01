import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Constants/gaya.scss';
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

//komponen
import KartuNama from './Components/KartuNama';

//data
import { members } from './data'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <a href="https://github.com/rbayuokt/learn-open-source" target="_nblank">
              <img src="/hacktoberfest.svg" className="img-fluid mx-auto d-block py-5" width="450" alt="" />
            </a>
          </Col>
        </Row>

        <Row className="mt-5">
          {
            members.map((datana, index) => (
              <KartuNama
                name={datana.name}
                quotes={datana.quotes}
                link={datana.link}
                linkText={datana.linkText} />
            ))
          }
        </Row>


        <Row className="mt-5">
          <Col xs={12} md={12} lg={12}>
            <div className="py-4">
              <p class="text-center">Made With ❤️‍ in Cimahi <br /> by @rbayuokt</p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
