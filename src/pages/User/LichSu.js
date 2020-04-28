import React from "react";

import $ from 'jquery';
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import "../../Asset/css/User.css";



export default class LichSu extends React.Component{
   
   
    render() {
        return (
       <div className="container-fluid" >
          <table class="table table-striped text-light table-bordered text-tb" style={{background: "rgba(60, 60, 60, 0.6)"}}>
                <thead>
                    <tr className="text-warning"  style={{background: "rgba(255, 255, 255, 0.3)"}}>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Ngày mua</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Tình trạng</th>
                    </tr>
                </thead>
                <tbody style={{background: "rgba(255, 255, 255, 0.4)"}}>
                    <tr>
                    <th scope="row">DH001</th>
                    <th scope="col">28/4/2020</th>
                    <th scope="col">Nier: Automata</th>
                    <th scope="col">1.200.000 VNĐ</th>
                    <th scope="col">Đã thanh toán</th>
                   
                    </tr>
                    <tr>
                    <th scope="row">DH002</th>
                    <th scope="col">28/4/2020</th>
                    <th scope="col">Nier: Automata</th>
                    <th scope="col">1.200.000 VNĐ</th>
                    <th scope="col">Đã thanh toán</th>
                    </tr>
                    <tr>
                    <th scope="row">DH003</th>
                    <th scope="col">28/4/2020</th>
                    <th scope="col">Nier: Automata</th>
                    <th scope="col">1.200.000 VNĐ</th>
                    <th scope="col">Đã thanh toán</th>
                    </tr>
                </tbody>
                </table>
       </div>
        )
    }
}