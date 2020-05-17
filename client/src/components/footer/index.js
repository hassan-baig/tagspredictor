import React, { Component } from "react";
// import ftLogo from "../../img/ft-logo-3.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='footer-bg'>
        <footer class='footer_three_area' style={{ paddingTop: "0px" }}>
          <div class='ft_copyright' style={{ background: "#000" }}>
            <div class=''>
              <p
                class='copyright'
                style={{
                  color: "#fff",
                  padding: "15px 0px",
                  marginBottom: "0px",
                }}
              >
                Copyright &copy; All rights reserved | This is made
                <i
                  class='fa fa-heart-o'
                  aria-hidden='true'
                  style={{ color: "#fff" }}
                ></i>{" "}
                by
                <a href=''> Techorizon.</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
