import React, { Component } from "react";
import { Button, Col, Row } from "antd";
// import art from "../../img/banner/server-shap.png";
import "./styles.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <section className='server_banner_area' id='home'>
        <div className='container'>
          <div className='server_b_inner'>
            <div className='col-md-12'>
              <div className='server_text'>
                <h4>
                  AUTO TAG <span>QUESTIONS</span>
                </h4>
                <h5>Starting For Free</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>

                <a className='purchase-btn' href='#single-search'>
                  Try Now
                </a>
              </div>
            </div>
            <div>
              <div class='server_shap_img'>
                {/* <img src={art} alt='' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
