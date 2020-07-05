import React from "react";
import { Link } from "react-router-dom";
function ItemHistory (props){
    var statusOrder = "";
    if(props.paid == false){
        statusOrder ="Chưa hoàn thành";
    } else{
        statusOrder ="Hoàn thành";
    }
    var link = "bill/" + props._id;
    return(
        <tbody style={{background: "rgba(255, 255, 255, 0.4)"}}>
                    <tr>

                    <th scope="row">
                    <Link to={link}>
                        <div>{props._id}</div>
                    </Link>
                    </th>

                    <th scope="col">{props.createAt}</th>
                    <th scope="col">{props.total}</th>
                    <th scope="col">{statusOrder}</th>
                    </tr>
                </tbody>
    );
}
export default ItemHistory;    