import React from "react";
import { Link } from "react-router-dom";
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


const IDda =(ID) =>{
  return ID;
}

const formatter = new Intl.NumberFormat('vi-VI', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

function Product(props) {
  return (
    <div className="col-6 col-md-4 px-2 my-2">
      <div className="card bg-dark text-white px-2 pt-2 h-100">
        <Link to={props.prURL}>
          <img className="card-img-top" src={props.prImg} alt="Product"/>
        </Link>
        <div className="card-body d-flex flex-column px-2 py-0 m-0">
          <div className="card-title d-inline-flex w-100 h-100 mx-0 my-2">
            <div className="card-title-link m-auto text-center">
              <Link
                className="d-inline"
                to={props.prURL} 
              >
                <h5 className="text-white p-0 m-0 d-inline">
                {props.prTitle}
                </h5>
              </Link>
            </div>
          </div>
          <div className="d-flex mt-auto">
            <span className="card-text ml-3 mr-auto my-auto">
              {formatter.format(props.prPrice)}
            </span>
            <i
              type="button"
              className="fas fa-cart-plus fa-2x text-white mr-3 ml-auto my-auto p-1"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;