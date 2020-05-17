import React, { Component } from "react";
import "./styles.scss";
import axios from "axios";
class BulkSearch extends Component {
  state = {
    tags: [],
    questions: [],
    model: "",
    models: ["LinearSVCOneVsRest", "LinearSVCModel"],
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
      .post("https://questions-auto-tagging.herokuapp.com/api/predict", {
        questions: this.state.questions,
        model: this.state.model,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <section class='domain_search_area p_100' id='bulk-search'>
          <div class='container'>
            <div
              class='main_title color_white'
              style={{ paddingBottom: "40px" }}
            >
              <h2>BULK SEARCH</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim.
              </p>
            </div>
            <div class='domain_inner'>
              <div class='domain_search_box'>
                <textarea
                  type='text'
                  class='form-control'
                  placeholder='Enter Questions (Every Question must end with ?)'
                  rows='10'
                  onChange={(e) => this.onChangeQuestion(e)}
                ></textarea>
              </div>

              <div class='domain_inner'>
                <div
                  class='domain_search_box p-4'
                  style={{ justifyContent: "center" }}
                >
                  <select
                    class='select_dropdown'
                    style={{ width: "30%" }}
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
                    style={{ width: "20%" }}
                    onClick={this.onClick}
                  >
                    Get Results
                  </button>
                  {/* <button className='bulk-btn domain_search_box'>
                    Get Result
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BulkSearch;
