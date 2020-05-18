import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import axios from "axios";
// import art from "../../img/banner/server-shap.png";
import "./styles.scss";
class Search extends Component {
  state = {
    tags: null,
    type: null,
    questions: [],
    model: "",
    barPercentage: 70,
    models: ["LinearSVCOneVsRest", "LinearSVCModel"],
    multi_labelled: false,
    loading: "none",
  };

  onChangeSwitch = (e) => {
    console.log(e.target.value);
    this.setState({ multi_labelled: !this.state.multi_labelled });
  };
  onChangeQuestion = (e) => {
    // console.log(e.target.value);
    let arr = [];
    arr.push(e.target.value);
    this.setState({ questions: arr });
  };
  onSelectModel = (e) => {
    // console.log(e.target.value);
    this.setState({
      model: e.target.value,
    });
  };
  onClick = () => {
    // console.log(this.state);
    this.setState({ loading: "start", barPercentage: 10 });
    axios
      .post("/api/predictor", {
        questions: this.state.questions,
        model: this.state.model,
        multi_labelled: this.state.multi_labelled,
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          this.setState({ barPercentage: 100 });
        }, 500);
        this.setState({ barPercentage: 60 });
        setTimeout(() => {
          this.setState({
            tags: response.data.prediction,
            loading: "finished",
          });
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="search-bg">
        {/* p_100 for padding 100px */}
        <section class="domain_search_area p_100" id="single-search">
          <div class="container">
            <div class="main_title color_white" style={{ paddingBottom: "30px" }}>
              <h2>SEARCH QUESTION TAG HERE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua Ut enim.
              </p>
            </div>

            <div class="custom-control custom-switch pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
                value={!this.state.multi_labelled}
                onChange={(e) => {
                  this.onChangeSwitch(e);
                }}
              />
              <label class="custom-control-label" for="customSwitch1" style={{ color: "#fff" }}>
                Mutilable
              </label>
            </div>
            <div class="domain_inner">
              <div class="domain_search_box">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Question"
                  onChange={(e) => this.onChangeQuestion(e)}
                />
                <select
                  className="select_dropdown selectpicker"
                  onChange={(e) => this.onSelectModel(e)}
                >
                  <option selected disabled value="">
                    Models
                  </option>
                  {this.state.models.map((m) => (
                    <option value={m}>{m}</option>
                  ))}
                </select>
                <button class="btn btn-default tag-btn" type="button" onClick={this.onClick}>
                  Get Tag
                </button>
              </div>
            </div>
            <div>
              {this.state.loading == "start" && (
                <div
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    maxWidth: "850px",
                    margin: "auto",
                  }}
                >
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={this.state.barPercentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: this.state.barPercentage + "%" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            {this.state.tags !== null && (
              <div
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
                class="main_title color_white"
              >
                <p style={{ fontSize: "20px" }}>
                  Predicted Tag:{" "}
                  {Array.isArray(this.state.tags[0].tag) ? (
                    this.state.tags[0].tag.map((t, index) => (
                      <span key={index} className="badge badge-light m-2 ">
                        {t + " "}
                      </span>
                    ))
                  ) : (
                    <span className="badge badge-light m-2 ">{this.state.tags[0].tag}</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
