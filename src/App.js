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

            
              <div class="globe_wrapper">
                <div
                  id="bug"
                  class="logo__StyledDiv-sc-slw2b8-0 logo__BadgeWrapper-sc-slw2b8-1 bigdC gcBapg"
                >
                  <div class="h-mark_wrapper">
                    <svg
                      width="47"
                      height="51"
                      viewBox="0 0 47 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-mark"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36.5556 2.73456e-06L31.3333 0V5.1H26.1111L26.1111 10.2L20.8889 10.2V15.3H26.1111L26.1111 10.2L31.3333 10.2L31.3333 25.5L20.8889 25.5V30.6L15.6667 30.6V5.1L10.4444 5.1V10.2L5.22222 10.2V15.3L1.30258e-06 15.3L0 20.4H5.22222V15.3H10.4444L10.4444 35.7L5.22222 35.7L5.22222 40.8H10.4444L10.4444 51L15.6667 51L15.6667 35.7L20.8889 35.7L20.8889 30.6L31.3333 30.6L31.3333 45.9L36.5556 45.9L36.5556 40.8H41.7778V35.7L47 35.7V30.6L41.7778 30.6L41.7778 35.7H36.5556L36.5556 2.73456e-06Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="globe"
                    class="logo__StyledDiv-sc-slw2b8-0 logo__GlobeWrapper-sc-slw2b8-2 bigdC huSARU"
                  >
                    <svg
                      width="104"
                      height="104"
                      viewBox="0 0 104 104"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M103.494 59.28C103.828 56.9012 104 54.4707 104 52C104 44.4439 102.388 37.2642 99.4901 30.786C99.0711 29.8494 98.6253 28.9275 98.1535 28.0212C89.485 11.3705 72.0703 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104C75.3774 104 95.1517 88.5737 101.699 67.3453C102.441 64.9397 103.013 62.4596 103.401 59.9191C103.433 59.7065 103.465 59.4935 103.494 59.28ZM99.0506 65.7291C100.32 61.3728 101 56.7659 101 52C101 45.0711 99.5618 38.4781 96.9677 32.5032C94.7544 33.8552 92.1735 35.0836 89.3025 36.1746C79.6824 39.8302 66.4937 42.06 52.0001 42.06C37.5065 42.06 24.3177 39.8302 14.6977 36.1746C11.8266 35.0836 9.2457 33.8552 7.03232 32.5031C4.43818 38.478 3 45.0711 3 52C3 56.7659 3.68039 61.3728 4.94935 65.729C4.99539 65.7712 5.04192 65.8135 5.08893 65.8557C7.53451 68.0529 11.1579 70.1002 15.7633 71.8503C24.9636 75.3464 37.7748 77.54 52 77.54C66.2253 77.54 79.0365 75.3464 88.2368 71.8503C92.8422 70.1002 96.4656 68.0529 98.9111 65.8557C98.9581 65.8135 99.0046 65.7713 99.0506 65.7291ZM97.2637 70.8002C94.9856 72.2246 92.3025 73.5146 89.3024 74.6546C79.6824 78.3102 66.4936 80.54 52 80.54C37.5065 80.54 24.3177 78.3102 14.6977 74.6546C11.6975 73.5146 9.01438 72.2245 6.73623 70.8002C14.1095 88.5321 31.5987 101 52 101C72.4012 101 89.8905 88.5321 97.2637 70.8002ZM88.2368 33.3703C91.1183 32.2753 93.6154 31.0639 95.6801 29.7723C87.5779 13.8822 71.0598 3 52 3C32.9402 3 16.4221 13.8821 8.31992 29.7722C10.3846 31.0639 12.8818 32.2753 15.7634 33.3703C24.9636 36.8664 37.7749 39.06 52.0001 39.06C66.2253 39.06 79.0365 36.8664 88.2368 33.3703Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div class="logo__StyledDiv-sc-slw2b8-0 logo__Spinner-sc-slw2b8-3 bigdC lkVEuf">
                      <div class="spinner"></div>
                    </div>
                    <div class="logo__StyledDiv-sc-slw2b8-0 logo__Spinner-sc-slw2b8-3 bigdC fblQoO">
                      <div class="spinner"></div>
                    </div>
                  </div>
                </div>
              </div>
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
