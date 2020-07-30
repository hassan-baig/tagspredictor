import React, { Component } from "react";
import "./styles.scss";
import axios from "axios";
class BulkSearch extends Component {
  state = {
    predictions: [],
    questions: [],
    model: "",
    models: ["LinearSVCOneVsRest", "LinearSVCModel"],
    loading: false,
  };
  onChangeQuestion = (e) => {
    let arr = e.target.value.split("\n");
    this.setState({ questions: arr });
  };
  onSelectModel = (e) => {
    this.setState({
      model: e.target.value,
    });
  };
  onClick = () => {
    this.setState({ loading: true });
    axios
      .post("/api/predictor", {
        questions: this.state.questions,
        model: this.state.model,
      })
      .then((response) => {
        console.log(response);
        this.setState({ predictions: response.data.prediction, loading: false });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    // console.log(this.state);
    const { predictions, loading } = this.state;
    return (
      <div>
        <section class='domain_search_area p_100' id='bulk-search'>
          <div class='container'>
            <div class='main_title color_white' style={{ paddingBottom: "40px" }}>
              <h2>BULK SEARCH</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
            <div class='domain_inner'>
              <div class='domain_search_box'>
                <textarea
                  type='text'
                  class='form-control'
                  placeholder='Enter Questions (Questions must be on seprate line)'
                  rows='10'
                  onChange={(e) => this.onChangeQuestion(e)}
                ></textarea>
              </div>

              <div class='domain_inner'>
                <div class='domain_search_box p-4' style={{ justifyContent: "center" }}>
                  <select class='select_dropdown' style={{ width: "30%" }} onChange={(e) => this.onSelectModel(e)}>
                    <option selected disabled value=''>
                      Models
                    </option>
                    {this.state.models.map((m) => (
                      <option value={m}>{m}</option>
                    ))}
                  </select>
                  <button class='btn btn-default tag-btn' type='button' style={{ width: "20%" }} onClick={this.onClick}>
                    Get Results
                  </button>
                </div>
              </div>
            </div>
            {loading && (
              <div class='spinner-border text-success mt-3' role='status'>
                <span class='sr-only'>Loading...</span>
              </div>
            )}
            {predictions.length > 0 && (
              <table className='table table-striped table-light mt-5 mb-5'>
                <thead className='table-dark'>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Question</th>
                    <th scope='col'>Tag</th>
                  </tr>
                </thead>
                <tbody>
                  {predictions.map((p, index) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{p.question}</td>
                      <td>{p.tag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default BulkSearch;
