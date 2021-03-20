import React, { Fragment } from "react";

import {
  FooterLogo,
  Footer,
  FooterCol,
  FooterBottom,
  Ul,
  Row,
  Container,
} from "./styles/footer";
const FooterComponent = () => {
  return (
    <Fragment>
      <Footer>
        <FooterLogo>
          <a href="#">Verslar</a>
        </FooterLogo>
        <Container>
          <Row>
            <FooterCol>
              <h4>company</h4>
              <Ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>get help</h4>
              <Ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>community</h4>
              <Ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>online shop</h4>
              <Ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </FooterCol>

            <FooterBottom>
              <h5 style={{color:'#fff'}}>
                copyright &copy;
                <script>document.write(new Date().getFullYear())</script>{" "}
                Verslar designed by <span>Mehmet Demircan</span>
              </h5>
            </FooterBottom>
          </Row>
        </Container>
      </Footer>
    </Fragment>
  );
};

export default FooterComponent;
