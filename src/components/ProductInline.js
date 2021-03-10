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

function Product(props) {
  const displayCheck = () => {
    if (props.prFake === 0) {
      return (
        <div className="card-text row">
          <span className="col-12 text-center">
            <b>{formatter.format(props.prPrice)}</b>
          </span>
        </div>
      );
    } else {
      return (
        <div className="card-text row">
          <span className="col-12 col-md-6 text-center price-fake">
            {formatter.format(props.prFake)}
          </span>
          <span className="col-12 col-md-6 text-center">
            <b>{formatter.format(props.prPrice)}</b>
          </span>
        </div>
      );
    }
  };
  return (
    <div className="col-6 col-md-4 px-2 my-2">
      <div className="card bg-dark text-white px-2 pt-2 h-100">
        <Link to={toSlug(props.prTitle)}>
          <img className="card-img-top" src={props.prImg} alt="Product" />
        </Link>
        <div className="card-body d-flex flex-column px-2 py-0 m-0">
          <div className="card-title d-inline-flex w-100 h-100 mx-0 my-2">
            <div className="card-title-link m-auto text-center">
              <Link className="d-inline" to={toSlug(props.prTitle)}>
                <h5 className="text-white p-0 m-0 d-inline">{props.prTitle}</h5>
              </Link>
            </div>
          </div>
          {displayCheck()}
        </div>
      </div>
    </div>
  );
}

export default Product;
