import React from "react";
import PropTypes from "prop-types";
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import ThongTinGame from "./ChiTietGame.js"
import CauHinh from "./CauHinh.js"

export default class Comment extends React.Component{
   

    
    render() {
        return (
            <div>
            <div class="media">
              <div class="media-left">
              <img src="" class="media-object" style="width:60px"/>
              </div>
              <div class="media-body">
      <h4 class="media-heading">username</h4>
              <p>comment</p>
              </div>
          </div>
          <hr></hr>
        </div>
        )
    }
}

