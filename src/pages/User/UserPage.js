import React from "react";
import "../../Asset/css/bootstrap.css";
import "../../Asset/css/User.css";

import DieuHuong from "./DieuHuong.js";
  

export default class User extends React.Component{
    constructor(props) {
        super(props);
       this.state = {HienThi : 1}
        
    }

render() {
 

  return (
        <div className="container-fluid p-2" style={{ 
            backgroundColor: "black",
          }}>
              {/*Avata and name user */}
          <div className="jumbotron hinhnen p-0">
                <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{height: '100%',backgroundColor:"rgba(60, 60, 60, 0.5)"}}>
                
                <img src="https://static.zerochan.net/Rory.Mercury.full.2834327.jpg" alt="" className="img-fluid rounded-circle p-0" width="120" height="100" />
                <p className="text-light text-name mt-3">Thanh Linh Nguyễn</p>
                </div>
          </div>
               {/*Button*/} 
               <div className="container mb-3 ">
                    <div className="jumbotron row p-4 row d-flex justify-content-center  " style={{background: "black",}}>
                    <button className="btn col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 mr-2 mb-2 btn-danger text-white" onClick={() => this.setState({HienThi: 1})} >Thông tin cá nhân</button>
                    <button className="btn col-xl-3 col-lg-3 col-md-3 col-4 col-sm-4 mr-2  mb-2  text-white" onClick={() => this.setState({HienThi: 2})}  style={{background: "rgba(255, 255, 255, 0.1)"}}>Lịch sử giao dịch</button>
                    <button className="btn col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 mb-2  text-white" onClick={() => this.setState({HienThi: 3})}  style={{background: "rgba(255, 255, 255, 0.1)"}}>Sản phẩm ưa thích</button>
                        </div>
            </div>

                 {/*Button  */}

                 <div className="container">
                    <DieuHuong HT={this.state.HienThi}/>
                </div>
            





        </div>
  );
}
}

