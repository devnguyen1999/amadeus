import React from "react";
import "./DetailBill.css";
function ItemBill(props){
    return(
        <tbody>
                            <tr>
                                <td>
                                    <div className="product-bill flex">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">
                                            <img className="img-fluid img-bill" src="https://salt.tikicdn.com/cache/200x200/ts/product/fe/86/89/e1db1ea5e96c3e80812d605a6c807c97.jpg" />
                                        </div>
                                        <div className="text-overflow">
                                            <p className="">{props.productId}</p>
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