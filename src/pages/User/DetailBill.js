import React from "react";
import axios from 'axios';
import Footer from "../../components/Footer.js";
import Header from "../../components/Header";
import "../../Asset/css/bootstrap.css";
import "./DetailBill.css"
import ItemBill from "./itemBill.js";
export default class DetailBill extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Order:{
            paid: false,
            _id:"",
            userId: "",
            email:"",
            products:[{
            _id:"",
            productId:"",
            nameURL:"",
            quantity: 0,
            price: 0,
            }],
            total: 0,
            createAt:"",
            __v: 0
            },
            ListOrders:[{
                paid: false,
                _id:"",
                userId: "",
                email:"",
                products:[{
                  _id:"",
                  productId:"",
                  nameURL:"",
                  quantity: 0,
                  price: 0,
                }],
                total: 0,
                createAt:"",
                __v: 0
               }]
        };
    };
    getToken(){
        return sessionStorage.getItem("accessToken") || null;
    }
    componentDidMount() {
        const token = this.getToken();
        if(token){
          axios.get("https://amadeuss.herokuapp.com/order/get", {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(response => {
            const ListOrders = response.data;
            this.setState({ListOrders});
            this.state.ListOrders.forEach((item) =>{
                if(item._id == this.props.match.params._id){
                    this.state.Order = item;
                    this.setState(this.state.Order);
                }
            });
            console.log('data', ListOrders);
            console.log('order', this.state.Order);
          }).catch((error) => {
            console.log("error",error);
          })
        }
    }
    render() {
        return(
            <div>
            <Header/>            
         <div
           className=""
           style={{
             backgroundColor: "black",
           }}
         >
                <div className="container flex justify-content-center text-white margin-top-100">
                    <div className="col-lg-9">
                        <div className="row text-white">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-left">
                            <h6>Chi tiết đơn hàng - {this.state.Order._id}</h6>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-right">
                                <h6>Ngày đặt hàng: {this.state.Order.createAt}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <h6>ĐỊA CHỈ NGƯỜI NHẬN</h6>
                                <div className="p-1 bill-infor" style={{backgroundColor: "white",}}>
                                    <strong>{this.state.Order.email}</strong>   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <h6>HÌNH THỨC GIAO HÀNG</h6>
                                <div className="p-1 bill-infor" style={{backgroundColor: "white",}}>
                                    <p>Nhận hàng qua email: {this.state.Order.email}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <h6>HÌNH THỨC THANH TOÁN</h6>
                                <div className="p-1 bill-infor" style={{backgroundColor: "white",}}>
                                    <p>Pay</p>
                                </div>
                            </div>
                        </div>
                        <div className="row p-3">
                        <table className="table table-hover" style={{backgroundColor: "white"}}>
                            <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tạm tính</th>
                            </tr>
                            </thead>
                            {this.state.Order.products.map((value, key) =>{
                                return(
                                    <ItemBill
                                        key={key}
                                        productId={value.productId}
                                        price ={value.price}
                                        quantity={value.quantity}
                                    />
                                )
                            })}
                            <div className="flex">
                            <tfoot className="flex">  
                                <tr className="">
                                    <td className="text-right">Tổng cộng</td>
                                    <td className="text-right">{this.state.Order.total}</td>
                                </tr>
                            </tfoot>
                            </div>
                        </table>
                        </div>
                    </div>
                </div>
           <Footer />
         </div>
       </div>
        );
    }
}