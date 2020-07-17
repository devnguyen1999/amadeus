import React from "react";
import { getToken } from "../Utils/Common";

function ItemCart(props){
  const plus = () => {
  
    const token = getToken();
    if (token) {
      return fetch("https://amadeuss.herokuapp.com/api/cart/items", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
          productId: props.id,
          count:1
        })
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
        
      })
      .catch((error) => {
       
          console.log(error.response.data.message);
       
      })
    }
  }
  const subtract = () => {
  
    const token = getToken();
    if (token) {
      return fetch("https://amadeuss.herokuapp.com/api/cart/items", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
          productId: props.id,
          count: -1
        })
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
        
      })
      .catch((error) => {
       
          console.log(error.response.data.message);
       
      })
    }
  }
  const deleteone = () => {
  
    const token = getToken();
    if (token) {
      return fetch("https://amadeuss.herokuapp.com/api/cart/destroyitem", {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
          id: props.idItem,
        })
      })
      .then((response) => {
        console.log(response);
        window.location.reload();       
      })
      .catch((error) => {
       
          console.log(error.response.data.message);
       
      })
    }
  }
  const formatter = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })
  return(                     
                                <div className="cart-form row justify-content-center p-2 mt-1 text-white">
                                  <div className="col-md-11 col-sm-11 col-xs-11 col-10">
                                    <div className="row">
                                      <div className="col-md-3 col-sm-4 col-6 text-center d-flex align-items-center">
                                        <img className="img-cart" src={props.img} alt="img-cart" />
                                      </div>
                                      <div className="col-md-9 col-sm-8 col-6 d-flex align-items-center">
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center ">
                                            <div className="row">
                                              <div className="col-lg-6 col-md-6 text-center d-flex align-items-center">
                                                <h6 className="pt-2">{props.name}</h6>
                                              </div>
                                              <div className="col-lg-6 col-md-6 text-center d-flex align-items-center">
                                                <h6 className="pt-2 span-price">{formatter.format(props.price)}</h6>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-4 d-flex align-items-center">
                                              <div className="input-group justify-content-center">
                                                  <div className="input-group-prepend">
                                                      <button onClick={subtract} className="btn btn-outline-primary">&minus;</button>
                                                  </div>
                                                  <input className="text-center form-control input-fix" type="tel" placeholder={props.count}/>
                                                  <div className="input-group-append">
                                                      <button onClick={plus} className="btn btn-outline-primary">&#43;</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1 col-sm-1 col-xs-1 col-2 justify-content-center align-items-center d-flex"><button className="btn" onClick={deleteone}><i className="icon-danger fa fa-trash" aria-hidden="true"></i></button></div> 
                                </div>                  
  );
}  
export default ItemCart;              