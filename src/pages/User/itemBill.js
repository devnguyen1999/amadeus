import React from "react";
import "./DetailBill.css";
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
function ItemBill(props){
    var url="/" + props.nameURL;
    return(
        <tbody>
                            <tr>
                                <td>
                                    <div className="product-bill flex">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                                            <img className="img-bill" src={props.img} />
                                        </div>
                                        <div className="text-overflow col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">
                                            <Link to={url}>
                                            <p className="">{props.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                                <td>{props.price}</td>
                                <td>{props.quantity}</td>
                                <td>{props.price * props.quantity}</td>
                            </tr>
                            </tbody>
    );
}
export default ItemBill;  