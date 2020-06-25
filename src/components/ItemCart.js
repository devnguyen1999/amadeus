import React from "react";
import { Link } from "react-router-dom";
import "./ItemCart.css";
const toSlug = str => {
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
function ItemCart(props){
  return(                     
                                <div className="cart-form row justify-content-center align-items-center p-2 mt-1 text-white">
                                  <div className="col-lg-3 col-md-3 col-xs-3 text-center">
                                    <img className="img-cart" src={props.prCartImg} alt="img-cart" />
                                  </div>
                                  <div className="col-lg-2 col-md-2 col-xs-2 text-center">
                                    <h5 className="pt-2">{props.prCartTitle}</h5>
                                  </div>
                                  <div className="col-lg-2 col-md-2 col-xs-2 text-center">
                                    <h5 className="pt-2">{props.prCartPrice}</h5>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-3">
                                      <div className="input-group justify-content-center">
                                          <div className="input-group-prepend">
                                              <button className="btn btn-outline-primary">&minus;</button>
                                          </div>
                                          <input className="text-center form-control input-fix" type="tel" placeholder="1"/>
                                          <div className="input-group-append">
                                              <button className="btn btn-outline-primary">&#43;</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-1 col-md-1 col-xs-1 text-center"><h5 className="pt-2">Total</h5></div>
                                  <div className="col-lg-1 col-md-1 col-xs-1 justify-content-center d-flex"><i className="icon-danger fa fa-trash" aria-hidden="true"></i></div> 
                                </div>                  
  );
}  
export default ItemCart;              