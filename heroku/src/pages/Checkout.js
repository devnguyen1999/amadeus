import React from "react";
import Footer from "../components/Footer";
import $ from 'jquery';
import { getUser, getToken } from "../Utils/Common";
import axios from "axios";
import Header from "../components/Header";
import bag from "../Asset/Img/empty-cart.png"
import { Link } from "react-router-dom";
export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      ListCart: {
        items: [
          {
            _id: "",
            userId: "",
            productId: {
              _id: "",
              name: "",
              nameURL: "",
              img: "",
              price: 0,
              id: "",
            },
            count: 0,
            createdAt: "",
            updatedAt: "",
            __v: 0,
          },
        ],
      },
      email: '',
      order: {
        message:'',
        orderId:'',
      },
      link:'',
    };
    this.setEmail = this.setEmail.bind(this);
  }
  setEmail(e){
    e.preventDefault();
        this.setState({
          email:e.target.value
        })
  };
  componentDidMount() {
    $('#email').hide();
    $('#fr').on('click', function(){
      $('#email').show();
    });
    $('#yrself').on('click', function(){
      $('#email').hide();
    });
    const token = getToken();
    if (token) {
      axios
        .get("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const ListCart = response.data;
          this.setState({ ListCart });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }
  render() {
    const formatter = new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });

    const createOrder = async () => {
      var fremail = this.state.email;
      const user = getUser();
      var email ="";
      if(fremail != null && fremail !=''){
        email = fremail;
      } 
      else{
        email= user.email;
      }
      const token = getToken();
      if (token) {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const data ={
          email: email
        }
        return axios.post('https://amadeuss.herokuapp.com/order/post',data,config).then((response) => {
          const order = response.data;
          this.setState({order});
          payment();
        }).catch((error) => {
          console.log('error', error);
        });
      }
    };
    const payment = () =>{
      const token = getToken();
        fetch('https://amadeuss.herokuapp.com/payment', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderId: this.state.order.orderId})
          }).then(function(response) {
            return response.json();
          }).then((data) => {
            const link = data.payUrl;
            this.setState({link});
            if(this.state.link == null){
              window.location.replace('/undefine');
            }
            else{
              window.location.href= this.state.link;
            }
          }).catch((error) => {
            window.location.replace('/undefine');
          });
    };
    const sum = () => {
      var sum = 0;
      this.state.ListCart.items.forEach((item) => {
        sum += item.productId.price * item.count;
      });
      return sum;
    };
    const checked = () => {
      if(this.state.ListCart.items.length != 0){
        return(
          <div className="container mt-4">
        <div className="row">
          <div className="col-lg-9">
            <div className="cart-form">
              <div className="payment">
                <h5>Chọn hình thức thanh toán</h5>
                <form>
                  <div className="radio">
                    <input type="radio" id="momo" name="pay" checked/>
                    <label for="momo">Thanh toán qua momo</label>
                    <img
                      alt="icon momo"
                      className="img-fluid img-icon-momo"
                      src="https://static.mservice.io/img/logo-momo.png"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="cart-form mt-2 mb-2">
              <div className="buyfor">
                <h5>Bạn mua cho ai?</h5>
                <form>
                  <div className="radio">
                      <input type="radio" id="yrself" name="payfor"/>
                      <label for="yrself">Mua cho bản thân</label><br></br>
                      <input type="radio" id="fr" name="payfor" />
                      <label for="fr">Mua cho người khác</label><br></br>
                      <div id="email">
                        <label for="mail">Nhập email của người bạn muốn mua cho</label><br></br>
                        <input type="email" id="mail" name="mail" value={this.state.email} onChange={this.setEmail}/>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
              <div className="cart-form text-center">
              <h5 className="text-white p-3">Hoá đơn</h5>
              <br />
                <div>
                  <table className="table-bill table text-white text-center">
                    <thead>
                    </thead>
                    <tbody>
                    {this.state.ListCart.items.map((value,key) =>{
                        return(
                          <tr key={key}>
                            <th>{value.productId.name}</th>
                            <td>x {value.count}</td>
                          </tr>
                        )
                    })}
                      <tr>
                      <th>Thành tiền</th>
                      <td>{formatter.format(sum())}</td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            <div className="mt-4">
                <button onClick={createOrder} className="btn-danger btn col-lg-12">
                  Thanh toán
                </button>
            </div>
          </div>
        </div>
      </div>
        )
      }
      else{
        return(
          <div className="row justify-content-center">
              <div className="empty-form col-lg-6 text-center m-4 p-2">
                  <h3 className="mt-3">Oop! Không có sản phẩm nào trong giỏ hàng của bạn</h3>
                  <img className="ml-4 img-fluid" src={bag} />
                <Link className="px-0 mx-0 col-lg-12" to="/">
                  <a className="h4">Trở lại cửa hàng</a>
                </Link>
              </div>
            </div>
        )
      }
    };
    return (
      <div>
        <Header />
    <div
      className="page-header section-dark"
      style={{
        backgroundImage:
          "url(https://cdnb.artstation.com/p/assets/images/images/007/382/309/large/nastya-friday-game-background-1.jpg?1505758821)",
      }}
    >
      {checked()}
    </div>
    <Footer />
    </div>
    );
  }
}
