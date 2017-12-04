import React, { Component } from "react";
import { connect } from "react-redux";
const Home = props => {
  // console.log(props.match);
  const car = props.carOfTheWeek;
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="alert alert-light col-9" role="alert">
        <h2>Car of the week</h2>

        <h5 className="alert-heading">{car.name}</h5>
        <img src={car.imageUrl} className="img-fluid" alt="Responsive image" />
        <p>{car.review}</p>
        <hr />
        <p className="mb-0">${car.price}</p>
      </div>
    </div>
  );
};

function mapStateToProps({ carOfTheWeek }) {
  return { carOfTheWeek };
}
export default {
  component: connect(mapStateToProps)(Home)
};
