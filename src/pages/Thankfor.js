import React from "react";
import PropTypes from "prop-types";
import "./Thankfor.css";
Thankfor.propTypes = {};
function Thankfor(props){
    return(
        <div  className="page-header section-dark" style={{ 
          backgroundImage:
            "url(https://cdnb.artstation.com/p/assets/images/images/007/382/309/large/nastya-friday-game-background-1.jpg?1505758821)"
        }}>
          <div className="container">
            <div className="row row-thankfor">
                <img className="img-success" src="https://png.pngtree.com/svg/20170510/418329c59c.png"/>
                <h2 className="h2-thankfor">Cảm ơn bạn đã mua hàng</h2>
            </div>
            <div className="row row-thankfor">
                <button className="btn-continue btn col-lg-6">Tiếp tục mua hàng</button>
            </div>
          </div>
        </div>
    );
}
export default Thankfor;