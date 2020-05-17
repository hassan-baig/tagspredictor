import React, { Component } from "react";
import "./styles.scss";
class Pricing extends Component {
  state = {};
  render() {
    return (
      <div className="pricing-cards">
        <section class="row m0 pricing-area-two bg-color" id="price">
          <div class="container">
            <div class="main_title">
              <h2>PRICING PLAN</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua Ut enim.
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-4 col-xs-6">
                <div class="pricing-item price_item2">
                  <h2>BASIC</h2>
                  <h3>
                    $0 / <sub>month</sub>
                  </h3>
                  <ul class="list">
                    <li>
                      <i class="icofont icofont-check-circled"></i>Free Useable
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Easily Can Useable 10GB
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Free Secuirity Service
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Dedicated Useable Acc.
                    </li>
                  </ul>
                  <a
                    href="mailto:hassanbaigdev@gmail.com"
                    target="_blank"
                    class="btn theme_btn pricing-btn"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              {/* <div class='col-md-3 col-xs-6'>
                <div class='pricing-item price_item2'>
                  <h2>PREMIUM</h2>
                  <h3>
                    $50 / <sub>month</sub>
                  </h3>
                  <ul class='list'>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Free Useable
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Easily Can
                      Useable 10GB
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Free
                      Secuirity Service
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Dedicated
                      Useable Acc.
                    </li>
                  </ul>
                  <a href='#' class='btn theme_btn'>
                    Purchase Now
                  </a>
                </div>
              </div>
              <div class='col-md-3 col-xs-6'>
                <div class='pricing-item price_item2 orange'>
                  <h2>ULTIMATE</h2>
                  <h3>
                    $100 / <sub>month</sub>
                  </h3>
                  <ul class='list'>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Free Useable
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Easily Can
                      Useable 10GB
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Free
                      Secuirity Service
                    </li>
                    <li>
                      <i class='icofont icofont-check-circled'></i>Dedicated
                      Useable Acc.
                    </li>
                  </ul>
                  <a href='#' class='btn theme_btn'>
                    Purchase Now
                  </a>
                </div>
              </div>
              */}
              <div class="col-md-4 col-xs-6">
                <div class="pricing-item price_item2">
                  <h2>BUSINESS</h2>
                  <h3>
                    $5 / <sub>month</sub>
                  </h3>
                  <ul class="list">
                    <li>
                      <i class="icofont icofont-check-circled"></i>Free Useable
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Easily Can Useable 10GB
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Free Secuirity Service
                    </li>
                    <li>
                      <i class="icofont icofont-check-circled"></i>Dedicated Useable Acc.
                    </li>
                  </ul>
                  <a
                    href="mailto:hassanbaigdev@gmail.com"
                    target="_blank"
                    class="btn theme_btn pricing-btn"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Pricing;
