import React from "react";
import { Link } from "react-router-dom";

const toSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
};
const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
function ProductBlock(props) {
  return (
    <div className="product-block row text-white bg-dark p-2 my-2">
      <Link className="col-12 col-md-4" to={props.prCategory + "/" + toSlug(props.prTitle)}>
        <img className="w-100" src={props.prImg} alt="Product" />
      </Link>
      <div className="col-12 col-md-6">
        <Link className="text-white p-0 m-0 d-inline" to={props.prCategory + "/" + toSlug(props.prTitle)}>
          <h4>{props.prTitle}</h4>
        </Link>
      </div>
      <div className="price col-12 col-md-2 text-right">
        <span>{formatter.format(props.prPrice)}</span>
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
