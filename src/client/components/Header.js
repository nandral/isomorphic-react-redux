import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="col-9">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <h4>Cars</h4>
        </Link>
        <div className="nav-item align-right">
          <Link to="/search" className="btn btn-info">
            Search
          </Link>
        </div>
      </nav>
    </div>
  );
};
