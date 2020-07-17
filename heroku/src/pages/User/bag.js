import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Bag extends React.Component{
    state = {
        ListCart:{
          items:[{
          _id: "",
          userId: "",
          productId: {
                    _id: "",
                    name: "",
                    nameURL: "",
                    img: "",
                    price: 0,
                    id: ""
                },
          count: 0,
          createdAt: "",
          updatedAt: "",
          __v: 0,
        }]
        }
      };
      getToken(){
        return sessionStorage.getItem("accessToken") || null;
       }
      componentDidMount() {
        const token = this.getToken();
        if(token){
          axios.get("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(response => {
            const ListCart = response.data;
            this.setState({ListCart});
          }).catch((error) => {
            console.log("error",error);
          })
    }
  }
  render(){
    const totalNumber = () => {
        var total = 0;
        this.state.ListCart.items.forEach((item) => {
          total += item.count;
        });
        return total;
      }
    return(
        <Link className="nav-link mr-auto" to="/gio-hang">
            <a className="d-inline-block bag text-center">
                <i className="far fa-shopping-cart" />
                <span className="number">{totalNumber()}</span>
            </a>
        </Link>
    );
  }
}