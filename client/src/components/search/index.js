import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import axios from "axios";
// import art from "../../img/banner/server-shap.png";
import "./styles.scss";
class Search extends Component {
  state = {
    tags: null,
    questions: [],
    model: "",
    progressBar: 70,
    models: ["LinearSVCOneVsRest", "LinearSVCModel"],
    multi_labelled: false,
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
    axios
      .post("https://tagspredictor.herokuapp.com/api/predictor", {
        questions: this.state.questions,
        model: this.state.model,
        multi_labelled: this.state.multi_labelled,
      })
      .then((response) => {
        console.log(response);
        this.setState({ tags: response.data.prediction });

        // this.setState({ tag: response.data.tag });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className='search-bg'>
        {/* p_100 for padding 100px */}
        <section class='domain_search_area p_100' id='single-search'>
          <div class='container'>
            <div class='main_title color_white'>
              <h2>SEARCH QUESTION TAG HERE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim.
              </p>
            </div>

            <div class='custom-control custom-switch pb-2'>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customSwitch1'
                value={!this.state.multi_labelled}
                onChange={(e) => {
                  this.onChangeSwitch(e);
                }}
              />
              <label
                class='custom-control-label'
                for='customSwitch1'
                style={{ color: "#fff" }}
              >
                Mutilable
              </label>
            </div>
            <div class='domain_inner'>
              <div class='domain_search_box'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter Question'
                  onChange={(e) => this.onChangeQuestion(e)}
                />
                <select
                  class='select_dropdown'
                  onChange={(e) => this.onSelectModel(e)}
                >
                  <option selected disabled value=''>
                    Models
                  </option>
                  {this.state.models.map((m) => (
                    <option value={m}>{m}</option>
                  ))}
                </select>
                <button
                  class='btn btn-default tag-btn'
                  type='button'
                  onClick={this.onClick}
                >
                  Get Tag
                </button>
              </div>
            </div>
            <div>
              {this.state.tags == null && (
                <div
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    maxWidth: "850px",
                    margin: "auto",
                  }}
                >
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped bg-success progress-bar-animated'
                      role='progressbar'
                      aria-valuenow={this.state.progressBar}
                      aria-valuemin='0'
                      aria-valuemax='100'
                      style={{ width: this.state.progressBar + "%" }}
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
                class='main_title color_white'
              >
                <p style={{ fontSize: "20px" }}>
                  Predicted Tag:{" "}
                  {this.state.tags.map((tag) => (
                    <span key={tag} className='badge badge-light m-2 '>
                      {"*" + tag.tag + " "}
                    </span>
                  ))}
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
