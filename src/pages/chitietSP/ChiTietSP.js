import React from "react";
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import DieuHuong from "./ThongTin.js"


  

export default class ChiTietSP extends React.Component{
    constructor(props) {
        super(props);
       this.state = {HienThi : true}
        
    }

render() {
 

  return (
        <div className="container-fluid p-2" style={{ 
            backgroundColor: "black",
          }}>
              {/*carosell */}
            <div>
            <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselId" data-slide-to={0} className="active" />
                <li data-target="#carouselId" data-slide-to={1} />
                <li data-target="#carouselId" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img
                    src="https://compass-ssl.xbox.com/assets/05/75/0575153b-9efa-4620-8afe-b6980200f60f.jpg?n=215489_Page-Hero-1084_1920x720.jpg"
                    className="img-fluid"
                    alt="First slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://i.imgur.com/6mjaYdD.png"
                    className="img-fluid"
                    alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://i.imgur.com/R095ZFO.jpg"
                    className="img-fluid"
                    alt="Third slide"
                    />
                </div>
                </div>
                <a
                className="carousel-control-prev"
                href="#carouselId"
                role="button"
                data-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a
                className="carousel-control-next"
                href="#carouselId"
                role="button"
                data-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div>
                </div>

              {/*sản phẩm */}
              
            <div className="container mt-3">
            <div className="jumbotron row p-4" style={{background: "rgba(60, 60, 60, 0.5)",}}>

                <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game" >
               
                <img src="https://steamcdn-a.akamaihd.net/steam/apps/524220/header.jpg?t=1582673822"  alt="" className="img-game-2 p-3"/>
               
                </div>

                <div className="col-xl-6 col-lg-6 col-md-5 column ">
                    <h2 className="text-light">Nier Automata</h2>
                    <p className="text-light eclipse-text">Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.</p>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-4 column">
                    <p className="text-light text">Giá sản Phẩm: </p>
                    <p className="text-warning gia">1.200.000 VNĐ</p>
                <div className="column justify-content-center">
                    <button className="col-12 btn btn-danger text-white">Mua ngay</button>
                    <button className="col-12 btn text-white" style={{background: "#00B894"}}>Thêm vào giỏ hàng</button>
                </div>
                </div>
                
            </div>
              </div>

                     {/*Button  */}
             <div className="container mb-3">
                    <div className="jumbotron row p-4 row" style={{background: "black",}}>
                    <button className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 btn-danger text-white" onClick={() => this.setState({HienThi: true})} >Thông tin game</button>
                    <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2  text-white" onClick={() => this.setState({HienThi: false})}  style={{background: "rgba(255, 255, 255, 0.1)"}}>Cấu hình yêu cầu</button>
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

