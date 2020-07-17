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
function ItemBill(props){
    var url="/" + props.nameURL;
    return(
        <tbody>
                            <tr>
                                <th scope="">
                                    <div className="eclipse-text">
                                        <div>
                                            <img className="img-bill" src={props.img} />
                                        </div>
                                        <div className="text-left">
                                            <Link to={url}>{props.name}
                                            </Link>
                                        </div>
                                    </div>
                                </th>
                                <th >{formatter.format(props.price)}</th>
                                <th >{props.quantity}</th>
                                <th >{formatter.format(props.price * props.quantity)}</th>
                            </tr>
                            </tbody>
    );
}
export default ItemBill;  