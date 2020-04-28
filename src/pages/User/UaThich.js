import React from "react";

import $ from 'jquery';
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";



export default class UaThich extends React.Component{
   
   
    render() {
        return (
       <div className="container-fluid" >
           {/*san3 pham63 1 */}
         <div className="container row p-3 mb-3 ml-0" style={{background: "rgba(60, 60, 60, 0.6)"}}>
         <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game" >         
               <img src="https://steamcdn-a.akamaihd.net/steam/apps/524220/header.jpg?t=1582673822"  alt="" className="img-game-2 p-3"/>
               </div>
            <div className="col-xl-6 col-lg-6 col-md-5 column ">
                <h2 className="text-light">Nier Automata</h2>   
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 column">
                <p className="text-warning " style={{fontSize:20,fontWeight:"bold"}}>1.200.000 VNĐ</p>
                <button className="col-12 btn btn-danger text-white">Bỏ ưa thích</button>
            </div>
            </div>

             {/*san3 pham63 1 */}
         <div className="container row p-3 mb-3 ml-0" style={{background: "rgba(60, 60, 60, 0.6)"}}>
         <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game" >         
               <img src="https://steamcdn-a.akamaihd.net/steam/apps/524220/header.jpg?t=1582673822"  alt="" className="img-game-2 p-3"/>
               </div>
            <div className="col-xl-6 col-lg-6 col-md-5 column ">
                <h2 className="text-light">Nier Automata</h2>   
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 column">
                <p className="text-warning " style={{fontSize:20,fontWeight:"bold"}}>1.200.000 VNĐ</p>
                <button className="col-12 btn btn-danger text-white">Bỏ ưa thích</button>
            </div>
            </div>

             {/*san3 pham63 1 */}
         <div className="container row p-3 mb-3 ml-0" style={{background: "rgba(60, 60, 60, 0.6)"}}>
         <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game" >         
               <img src="https://steamcdn-a.akamaihd.net/steam/apps/524220/header.jpg?t=1582673822"  alt="" className="img-game-2 p-3"/>
               </div>
            <div className="col-xl-6 col-lg-6 col-md-5 column ">
                <h2 className="text-light">Nier Automata</h2>   
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 column">
                <p className="text-warning " style={{fontSize:20,fontWeight:"bold"}}>1.200.000 VNĐ</p>
                <button className="col-12 btn btn-danger text-white">Bỏ ưa thích</button>
            </div>
            </div>

      
       </div>
        )
    }
}