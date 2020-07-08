import React from "react";
import { Link } from "react-router-dom";
function ItemHistory (props){
    var statusOrder = "";
    if(props.paid == false){
        statusOrder ="Chưa hoàn thành";
    } else{
        statusOrder ="Hoàn thành";
    }
    const formatter = new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
    var link = "bill/" + props._id;
    return(
        <tbody style={{background: "rgba(255, 255, 255, 0.4)"}}>
                    <tr>

                    <th scope="row">
                    <Link to={link}>
                        <div className="eclipse-text-short">{props._id}</div>
                    </Link>
                    </th>

                    <th scope="col">{props.createAt}</th>
                    <th scope="col">{formatter.format(props.total)}</th>
                    <th scope="col">{statusOrder}</th>
                    </tr>
                </tbody>
    );
}
export default ItemHistory;    