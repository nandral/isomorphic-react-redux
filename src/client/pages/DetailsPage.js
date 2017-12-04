import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
const DetailsPage = ({ match, models }) => {
  // console.log(match);
  const car = models[match.params.id];
  if (!car) return null;
  return (
    <div className="left" style={{ marginTop: "30px" }}>
      <div className="alert alert-light col-9" role="alert">
        <h4 className="alert-heading">{car.name}</h4>
        <img src={car.imageUrl} className="img-fluid" alt="Responsive image" />
        <hr />
        <p className="mb-0">${car.price}</p>
      </div>
    </div>
  );
};

function mapStateToProps({ models }) {
  const modelsById = _.mapKeys(models, "id");
  return { models: modelsById };
}
export default {
  component: connect(mapStateToProps)(DetailsPage)
};
