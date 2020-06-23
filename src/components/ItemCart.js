import React from "react";
import { Link } from "react-router-dom";

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
                      <tr>
                        <td>
                          <img
                            alt=""
                            className="img-fluid img-fluid-cart"
                            src={props.prCartImg}
                          />
                        </td>
                          <td className="wordbreak"><p>{props.prCartTitle}</p></td>
                        <td>{props.prCartPrice}</td>
                        <td>
                          <div className="input-group input-group-cart mb3">
                          <a className="btn btn-outline-primary">
                              -
                            </a>
                            <div className="form-control form-control-cart text-center">
                              1
                            </div>
                            <a className="btn btn-outline-primary">
                              +
                            </a>
                          </div>
                        </td>
                        <td>500.000</td>
                        <td><i className="icon-danger fas fa-trash"></i></td>
                      </tr>                   
  );
}  
export default ItemCart;              