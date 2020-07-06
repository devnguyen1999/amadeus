import React from "react";
import "./ProductBlock.css";

function ProductBlock(props) {
  return (
    <div className="product-block row text-white bg-dark p-2 my-2">
      <img className="col-12 col-md-4" src={props.prImg} alt />
      <div className="col-12 col-md-6">
        <h4>{props.prTitle}</h4>
      </div>
      <div className="price col-12 col-md-2 text-right">
        <span>{props.prPrice}</span>
      </div>
    </div>
  );
}

export default ProductBlock;

{
  /* <div class="card">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Text</p>
    </div>
</div> */
}
