import React, { Component } from "react";
import featureArt from "../../img/hosting-service-1.png";
import "./styles.scss";
class Features extends Component {
  state = {};
  render() {
    return (
      <div>
        <section style={{ padding: "45px 0px" }} class='hosting_service_area'>
          <div className='container'>
            {" "}
            <div
              class='server_title col-md-6 offset-md-3'
              style={{ padding: "0px" }}
            >
              <h2 style={{ padding: "0px" }}>Main Features</h2>
              <p style={{ textAlign: "center" }}>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system.
              </p>
            </div>
          </div>

          <div class='container'>
            <div class='row hosting_service_inner'>
              <div class='col-md-6'>
                <div class='h_service_left'>
                  <img src={featureArt} alt='' />
                </div>
              </div>
              <div class='col-md-6'>
                <div class='h_service_right'>
                  <div class='server_title'>
                    <h2 style={{ paddingTop: "175px" }}>
                      Multiple Models To Select
                    </h2>
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='container mt-5'>
            <div class='row hosting_service_inner'>
              <div class='col-md-6 order-2'>
                <div class='h_service_left'>
                  <img src={featureArt} alt='' />
                </div>
              </div>
              <div class='col-md-6 order-1'>
                <div class='h_service_right'>
                  <div class='server_title'>
                    <h2 style={{ paddingTop: "175px" }}>Best Model</h2>
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='container'>
            <div class='row hosting_service_inner'>
              <div class='col-md-6'>
                <div class='h_service_left'>
                  <img src={featureArt} alt='' />
                </div>
              </div>
              <div class='col-md-6'>
                <div class='h_service_right'>
                  <div class='server_title'>
                    <h2 style={{ paddingTop: "175px" }}>Bulk Search</h2>
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
