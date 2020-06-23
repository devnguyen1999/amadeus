import React from "react";

import $ from 'jquery';
import Rating from 'material-ui-rating'
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import Comment from "../chitietSP/Comment.js";


export default class ThongTinGame extends React.Component{
   
    componentDidMount = () =>{
        if($('#info').val().length < 500) {
            $('#readless').hide();
            $('#readmore').hide();
        }
        $('#readless').hide();
        $('#readmore').on('click',function () {
            $('#info').css('-webkit-line-clamp','unset');
            $('#readmore').hide();
            $('#readless').show();
        })
        $('#readless').on('click',function () {
            $('#info').css('-webkit-line-clamp','4');
            $('#readmore').show();
            $('#readless').hide();
        })

    };

    onStarRatingPress = async (rating) => {
        this.setState({
            starCount: rating,
        })
      
    }
    
    render() {
    
        //var list = this.props.DATA.category[1];///t di hoc r
        //ok//ok
        //console.log(list);
        //console.log(typeof(list));
       
        
        
    var arr = this.props.DATA.category.map(e => <p className="btn btn-danger ml-1">{e}</p>);
        return (
        
       <div className="container-fluid">
             <div>
           <p className="text-light" style={{fontSize:"25px"}}>Thông tin game:</p>
           <div className="jumbotron p-5" style={{background: "rgba(60, 60, 60, 0.5)",}}>
               <p className="text-light">Thể loại:</p>
       {arr}
       <p className="text-light">Nhà phát hành: </p>
        <p id="info" className="eclipse-info text-light" style={{fontWeight:"bold",fontSize:18}}>{this.props.DATA.producer}</p>
        <p className="text-light" style={{fontSize:"25px"}}>Nội dung game:</p>
        <p id="info" className="eclipse-info text-light">{this.props.DATA.decription}</p>

            <p className="text-primary" id="readmore">Read more...</p>
            <p className="text-primary" id="readless">Read less...</p>
           </div>
           </div>

           
            {/*đánh giá */}
        <div>
            <p className="text-light" style={{fontSize:"25px"}}>Đánh giá: </p>
           <div className="jumbotron p-5 column" style={{background: "rgba(60, 60, 60, 0.5)",}}>
              <div className="container-fluid justify-content-center">
                  <p className="text-light text-center mb-0">Đánh giá trung bình</p>
                  <p className="text-light text-center pt-0" style={{fontSize:"40px",fontWeight:100,}}>5/5</p>
                  
           
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                  {/*https://www.npmjs.com/package/material-ui-rating  */}
                  <Rating
                    icon={{fontSize:10}}
                    Component={{with:'30%'}}
                    readOnly={true}
                    value={5}
                    max={5}
                    onChange={(value) => console.log(`Rated with value ${value}`)}
                    /></div>
                    <p className="text-warning text-center " style={{fontWeight:"bold",fontSize:25}}>(156)</p>
                    <p className="text-light text-center ">Chia sẽ ý kiến về sản phẩm:</p>
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                    <button className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 btn text-white" style={{background: "rgba(0, 240, 255, 0.6)",borderradius: "20px",}}>Viết đánh giá của bạn</button>
                    </div>
                    

                </div>  
           </div>
        </div>

        {/*Bình luận */}
        <div>
        
      


  

        
        </div>

       </div>
        )
    }
}