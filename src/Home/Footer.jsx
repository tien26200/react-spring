import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Footer Content</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Các sản phẩm liên quan</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Patek Phillipies 1996</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Orient Bambino gen 99</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Casio MTP 177</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Chupper 111</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Author: Đỗ Xuân Tiến:{" "}
              <a href="https://www.mdbootstrap.com"> doxuantien26200@gmail.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </>
    );
  }
}

export default Footer;
