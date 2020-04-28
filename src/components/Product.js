import React from "react";
import "./Product.css";

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

function Product(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 my-2">
      <div className="card bg-dark text-white">
        <a
          href={
            "/san-pham/" + toSlug(props.prTitle) + "-" + props.prId + ".html"
          }
        >
          <img className="card-img-top px-2 pt-2" src={props.prImg} alt />
        </a>
        <div className="card-body px-2 py-0 m-0">
          <div className="card-title m-0 p-0 d-flex flex-column">
            <a
              href={
                "/san-pham/" +
                toSlug(props.prTitle) +
                "-" +
                props.prId +
                ".html"
              }
            >
              <h5 className="m-0 my-auto text-center">{props.prTitle}</h5>
            </a>
          </div>
          <div className="d-flex">
            <span className="card-text ml-3 mr-auto my-auto">
              {props.prPrice}
            </span>
            <i
              type="button"
              className="btn fas fa-cart-plus text-white mr-3 ml-auto my-auto px-0 pt-0"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
