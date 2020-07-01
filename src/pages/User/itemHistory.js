import React from "react";
import { Link } from "react-router-dom";
function ItemHistory (props){
    var statusOrder = "";
    if(props.paid == false){
        statusOrder="Chưa hoàn thành"
    } else{
        statusOrder="Hoàn thành"
    }
    return(
        <tbody style={{background: "rgba(255, 255, 255, 0.4)"}}>
                    <tr>
                    <th scope="row">{props._id}</th>
                    <th scope="col">{props.createAt}</th>
                    <th scope="col">{props.total}</th>
                    <th scope="col">{statusOrder}</th>
                    </tr>
                </tbody>
    );
}
export default ItemHistory;    