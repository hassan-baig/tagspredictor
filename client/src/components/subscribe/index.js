import React, { Component } from "react";
class Subscribe extends Component {
  state = {};
  render() {
    return (
      <div>
        <section class='subscribe_seven p_100'>
          <div class='container'>
            <div class='subscribe_s_inner'>
              <h4>Need To Consult With Us? Please Subscribe Now</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.There are many varia-tions of passages of Lorem
                Ipsum available, but the majority have suffered.
              </p>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter Your E-Mail'
                />
                <span class='input-group-btn'>
                  <button
                    class='btn btn-default'
                    type='button'
                    style={{ borderRadius: "2px" }}
                  >
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Subscribe;
