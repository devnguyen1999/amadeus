import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {};

function Product(props) {
  return (
    // <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-4">
    //   <div className="card">
    //     <img
    //       className="card-img-top"
    //       src="https://www.wykop.pl/cdn/c3201142/comment_ad6nE26h717bOaDBZvzNkrNcJp8mGHF8.jpg"
    //       alt="Product Image"
    //     />
    //     <div className="card-body">
    //       <h4 className="card-title">Grand Theft Auto V</h4>
    //       <p className="card-text">500.000VND</p>
    //     </div>
    //   </div>
    // </div>
    <div className="col-sm-12 col-md-6 col-lg-4 my-2">
      <div className="card">
        <img
          className="card-img-top"
          src="https://www.wykop.pl/cdn/c3201142/comment_ad6nE26h717bOaDBZvzNkrNcJp8mGHF8.jpg"
          alt="Product Image"
        />
        <div className="card-body">
          <h4 className="card-title">Grand Theft Auto V</h4>
          <p className="card-text">500.000VND</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
