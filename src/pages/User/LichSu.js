import React from "react";


import axios from "axios";
import ItemHistory from "./itemHistory";

export default class LichSu extends React.Component{
   state={
    ListOrders:[{
      paid: false,
      _id:"",
      userId: "",
      email:"",
      products:[{
        _id:"",
        productId:{
            _id:"",
            name:"",
            nameURL:"",
            img:"",
            price:0,
            id:"",
        },
        nameURL:"",
        quantity: 0,
        price: 0,
      }],
      total: 0,
      createAt:"",
      __v: 0
     }]
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
        console.log('data', ListOrders);
        this.setState({ListOrders});
      }).catch((error) => {
        console.log("error",error);
      })
    }
  }
   
    render() {
        return (
       <div className="container-fluid" >
          <table className="table table-striped text-light table-bordered text-tb" style={{background: "rgba(60, 60, 60, 0.6)"}}>
                <thead>
                    <tr className="text-warning"  style={{background: "rgba(255, 255, 255, 0.3)"}}>
                    <th scope="col">Đơn hàng</th>
                    <th scope="col">Ngày mua</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Tình trạng</th>
                    </tr>
                </thead>
                {this.state.ListOrders.map((value,key) =>{
                  return(
                    <ItemHistory
                      key={key}
                      _id={value._id}
                      createAt={value.createAt}
                      total={value.total}
                      paid ={value.paid}
                    />
                  )
                })}
                </table>
       </div>
        )
    }
}