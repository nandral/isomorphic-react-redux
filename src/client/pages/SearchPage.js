import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { make: "", model: "" };

    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    // console.log(this.props.match);
    const { makes, models } = this.props;
    const { make, model } = this.state;
    const disableButton = make && model ? false : true;
    return (
      <div>
        <div className="col-8 mt-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Make</label>
              <select
                className="form-control"
                value={this.state.make}
                onChange={this.handleMakeChange}
              >
                <option />
                {this.renderMakes()}
              </select>
            </div>
            <div className="form-group">
              <label>Model</label>
              <select
                disabled={this.state.make ? false : true}
                className="form-control"
                value={this.state.model}
                onChange={this.handleModelChange}
              >
                <option />
                {this.renderModels()}
              </select>
            </div>
            <div className="btn-toolbar">
              <button disabled={disableButton} type="submit" className="btn btn-primary mr-3">
                Submit
              </button>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderMakes() {
    return this.props.makes.map(make => {
      return (
        <option key={make.id} value={make.id}>
          {make.name}
        </option>
      );
    });
  }
  renderModels() {
    if (!this.state.make) return;
    return this.props.models[this.state.make].map(model => {
      return (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      );
    });
  }

  handleMakeChange(event) {
    this.setState({ make: event.target.value });
  }

  handleModelChange(event) {
    this.setState({ model: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // this.props.history.push(`/make/model/${this.state.model}`);
    this.props.history.push(`/make/model/${this.state.model}`);
  }
}

function mapStateToProps({ makes, models }) {
  const modelsGroupByMake = _.groupBy(models, "makeId");
  return { makes, models: modelsGroupByMake };
}
export default {
  component: connect(mapStateToProps)(SearchPage)
};
