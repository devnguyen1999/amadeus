import React from "react";
import { Link } from "react-router-dom";
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
                                            <img alt={props.img} className="img-bill" src={props.img} />
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