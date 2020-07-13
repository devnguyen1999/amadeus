import React from "react";
import $ from 'jquery';


import Ratings from 'react-rating';
import { getToken } from "../../Utils/Common";

export default class ThongTinGame extends React.Component{

    constructor() {
        super();
    
        this.state = {
            
            AverageVote: 0,
            value: 1,
            title:'',
            mess:'',
        };
        this.setName = this.setName.bind(this);
        this.setAgree=this.setAgree.bind(this);
      }

      setName(e){
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            title:e.target.value
        })
    }
    setAgree(e){
      e.preventDefault();
      console.log(e.target.value);
      this.setState({
          mess:e.target.value
      })
      }


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

        $('#formdanhgia').hide();
        $('#danhgia').on('click',function () {
          $('#formdanhgia').show();
      })

      $('#huydanhgia').on('click',function () {
        $('#formdanhgia').hide();
      })
       
      //////
   
        
    };


    render() {
      
    let danhgia;
    if(getToken() != null){
      danhgia =<button className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 btn text-white mb-3" id="danhgia" style={{background: "rgba(0, 240, 255, 0.6)",borderradius: "20px",}}>Viết đánh giá của bạn</button>
    }
    else{
      danhgia = <p className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 btn text-white mb-3"style={{background: "rgba(0, 240, 255, 0.6)",borderradius: "20px",}}> Hãy đăng nhập để có thể gửi đánh giá của bạn cho chúng tôi</p>
    }


    //// Gui đánh giá
    const SendReviews = () => {
  
      const token = getToken();
      if (token) {
        return fetch("https://amadeuss.herokuapp.com/reviews/post", {
          method: "POSt",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify({
            title: this.state.title,
            vote: this.state.value,
            content:this.state.mess,
            productId:this.props.DATA.id,
            
          })
        })
        .then((response) => {
          console.log(this.state.title);
          console.log(this.state.value);
          console.log(this.state.mess);
          console.log(response);
          alert("Cảm ơn bạn đã gửi đánh giá");
          window.location.reload();
          
        })
        .catch((error) => {
            console.log(error.response.data.message);
            alert("lỗi khi gửi đánh giá")
        })
      }
    }
    ///




    var arr = this.props.DATA.category.map((e,key) => <p className="btn btn-danger ml-1" key={key}>{e}</p>);
        return (
    
       <div className="container-fluid">
             <div>
           <p className="text-light" style={{fontSize:"25px"}}>Thông tin game:</p>
           <div className="jumbotron p-5" style={{background: "rgba(60, 60, 60, 0.5)"}}>
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
            <div className="jumbotron p-2 column" style={{background: "rgba(60, 60, 60, 0.5)",}}>
              <div className="container-fluid justify-content-center">
                  <p className="text-light text-center mb-0">Đánh giá trung bình</p>
                  <p className="text-warning text-center pt-0" style={{fontSize:"40px",fontWeight:"bold",}}>{this.props.DATA.vote}/5</p>
                  
           
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                  {/*https://www.npmjs.com/package/material-ui-rating  */}
                 
                  <Ratings
                    emptySymbol={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_star.svg/1200px-OOjs_UI_icon_star.svg.png" with="35" height="35" style={{fontSize:10}} className="icon" />}
                    fullSymbol={<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png" style={{fontSize:10}} with="35" height="35" className="icon" />}
                    
                    initialRating={this.props.DATA.vote}
                    readonly />
                    </div>
                    
                    <p className="text-light text-center ">Chia sẽ ý kiến về sản phẩm:</p>
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                    {danhgia}
                    </div>
                </div>  



           </div>
        </div>

        <div className="jumbotron p-3" id="formdanhgia" style={{background: "rgba(60, 60, 60, 0.5)"}}>
        
        <div>
        <p className="text-cauhinh">+ Đánh giá của bạn về sản phẩm:</p>  
        <Ratings
        emptySymbol={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_star.svg/1200px-OOjs_UI_icon_star.svg.png" with="25" height="25" style={{fontSize:10}} className="icon" />}
        fullSymbol={<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png" style={{fontSize:10}} with="25" height="25" className="icon" />}
        onChange={(rate) => this.setState({value:rate})}
        {...this.props} initialRating={this.state.value} />
      
      </div>
        <p className="text-cauhinh">+ Tiêu đề:</p>  
           
            <input
              name="title"
              className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 " style={{background: "rgba(255, 255, 255, 0.1)"}}
              placeholder="Nhập Tiêu đề"
              type="text"
              value={this.state.title} onChange = {this.setName}
              
            />



            <p className="text-cauhinh">+ Viết đánh giá:  </p>
           
            <textarea
              name="comment"
              className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 " style={{background: "rgba(255, 255, 255, 0.1)"}}
              placeholder="Viêt đánh giá"
              type="text"
              value={this.state.mess} onChange = {this.setAgree}

            />

            <button  className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mr-2 mb-2 mt-5 btn-danger text-white " onClick={SendReviews}  style={{background: "#D63031"}}>Gửi</button>
            

            <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2 mt-5 text-white     hihihi" id="huydanhgia"  style={{background: "rgba(255, 255, 255, 0.1)"}}>Hủy</button>
         
        </div>
        {/*Bình luận */}
        <div className="jumbotron p-2"  style={{background: "rgba(60, 60, 60, 0.5)"}}>

            {this.props.DATA.reviews.map((value,key) =>{
                return( <div className="media border p-3" key={key}>      
                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{width:60}} />
                <div className="media-body">
                  <h5 className="text-warning">{value.userId.username}   <small><i className="text-light" style={{fontSize:12}}>   {value.createAt}</i></small></h5>
                <p className="text-success">{value.title}   <small><Ratings
                    emptySymbol={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_star.svg/1200px-OOjs_UI_icon_star.svg.png" with="15" height="15" style={{fontSize:10}} className="icon" />}
                    fullSymbol={<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png" style={{fontSize:10}} with="15" height="15" className="icon" />}
                    initialRating={value.vote}
                    readonly /></small>  </p>
                <p className="text-light">{value.content}</p>      
                </div>
                </div>)
            })}
                
        </div>

       </div>
        )
    }
}