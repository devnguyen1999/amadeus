import React from "react";
import { connect } from "react-redux";
import { getToken } from "../Utils/Common";
import { plus, subtract, deleteOne } from '../action/cartAction'
import { countItemInCart } from '../action/counterAction'
class ItemCart extends  React.Component{
  plus = (id) => {
    this.props.plus(id);
    this.props.countItemInCart();
  }
  subtract = (id) => {
    this.props.subtract(id);
    this.props.countItemInCart();
  }
  deleteone = (id) => {
    this.props.deleteOne(id);
    this.props.countItemInCart();
  }
  formatter = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })
  render() {
    return(                     
      <div className="cart-form row justify-content-center p-2 mt-2 text-white">
        <div className="col-md-11 col-sm-11 col-xs-11 col-10">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-6 text-center d-flex align-items-center">
              <img className="img-cart" src={this.props.img} alt="img-cart" />
            </div>
            <div className="col-md-9 col-sm-8 col-6 d-flex align-items-center">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center ">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 text-center d-flex align-items-center">
                      <h6 className="pt-2">{this.props.name}</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center d-flex align-items-center">
                      <h6 className="pt-2 span-price">{this.formatter.format(this.props.price)}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-4 d-flex align-items-center">
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend">
                            <button onClick={() => this.subtract(this.props.id)} className="btn btn-outline-primary">&minus;</button>
                        </div>
                        <input className="text-center form-control input-fix" type="tel" placeholder={this.props.qty} disabled/>
                        <div className="input-group-append">
                            <button onClick={() => this.plus(this.props.id)} className="btn btn-outline-primary">&#43;</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-1 col-2 justify-content-center align-items-center d-flex"><button className="btn" onClick={()=>this.deleteone(this.props.id)}><i className="icon-danger fa fa-trash" aria-hidden="true"></i></button></div> 
      </div>                  
);
  }
  
}  
export default connect((state) => ({}), {plus,subtract,deleteOne,countItemInCart})(ItemCart);              