import React from "react";

import $ from 'jquery';


import { getToken } from "../../Utils/Common";


export default class ThongTin extends React.Component{
    constructor(props) {
        super(props);
       this.state = {
        thaypass: this.props.HT,
        setpass1:'',
        setpass2:'',
        oldpass:'',

        Newusername:'',
        Newnickname:'',
        Newphone:'',
        Newsex:'',
        Newbirth:'',
        Newaddress:'',
        
      };
      this.setpass1 = this.setpass1.bind(this);
      this.setpass2 = this.setpass2.bind(this);
      this.oldpass = this.oldpass.bind(this);


      this.setNewusername = this.setNewusername.bind(this);
      this.Newnickname = this.Newnickname.bind(this);
      this.Newphone = this.Newphone.bind(this);
      this.Newsex = this.Newsex.bind(this);
      this.Newbirth = this.Newbirth.bind(this);
      this.Newaddress = this.Newaddress.bind(this);
       
       
    }
////set new pass
    setpass1(e){ 
      e.preventDefault();
      console.log(e.target.value);
      this.setState({
          setpass1:e.target.value
      })
  }

  setpass2(e){ 
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
        setpass2:e.target.value
    })
}



oldpass(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
      oldpass:e.target.value
  })
}
////

//// set user info
setNewusername(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newusername:e.target.value
  })
}

Newnickname(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newnickname:e.target.value
  })
}

Newphone(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newphone:e.target.value
  })
}

Newsex(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newsex:e.target.value
  })
}

Newbirth(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newbirth:e.target.value
  })
}

Newaddress(e){ 
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
    Newaddress:e.target.value
  })
}
///


    componentDidMount = () =>{

       
          
           
/////////

     
        $('#Change').hide();
         $('#ChangeInfo').hide();
        $('#changepass').on('click',function () {
            
            $('#Change').show();
            $('#Info').hide();
        })

        $('#changeinfo').on('click',function () {
            
            $('#ChangeInfo').show();
            $('#Info').hide();
        })

        $('.hihihi').on('click',function () {
            $('#ChangeInfo').hide();
            $('#Change').hide();
            $('#Info').show();
        })
    

    }
   
    
   
    render() {


//// Thay đổi password
const Updatepass = () => {
  
  const token = getToken();

  if(this.state.setpass1 === this.state.setpass2 ){
  if (token) {
    return fetch("https://amadeuss.herokuapp.com/api/user/changepassword", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body:JSON.stringify({
        password:this.state.oldpass,
        newpassword:this.state.setpass1,
      })
    })
    .then((response) => {
     
      console.log(response);
      alert("Thay đổi mật khẩu thành công!");
      window.location.reload();
      
    })
    .catch((error) => {
        console.log(error.response.data.message);
        alert("lỗi khi thay đổi mật khẩu");
    })
  }
}else{alert("Mật khẩu mới không trùng lặp");}
}
///






///////// Update user profile
const UpdateInfo = () => {
  const token = getToken();
  if (token) {
    return fetch("https://amadeuss.herokuapp.com/api/user/update", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body:JSON.stringify({
        username:this.state.Newusername,
        nickname:this.state.Newnickname,
        numphone:this.state.Newphone,
        sex:this.state.Newsex,
        datebirth:this.state.Newbirth,
        address:this.state.Newaddress,
        
      })
    })
    .then((response) => {
     
      console.log(response);
      alert("Thay đổi thông tin thành công!");
      window.location.reload();
      
    })
    .catch((error) => {
        console.log(error.response.data.message);
        alert("lỗi khi thay đổi thông tin");
    })
  }
}
///






        return  (
            <div className="container-fluid">
                {/*Thông tin  */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="Info">
            <p className="text-cauhinh">+ Tên người dùng:  <span className="span-text text-light">{this.props.UserData.username}</span></p>
            <p className="text-cauhinh">+ Ngày sinh:  <span className="span-text text-light">{this.props.UserData.datebirth}</span></p>
            <p className="text-cauhinh">+ Giới tính:  <span className="span-text text-light">{this.props.UserData.sex}</span></p>
            <p className="text-cauhinh">+ Địa chỉ:  <span className="span-text text-light">{this.props.UserData.address}</span></p>
            <p className="text-cauhinh">+ Nick name:  <span className="span-text text-light">{this.props.UserData.nickname}</span></p>
            <p className="text-cauhinh">+ Số điện thoại:  <span className="span-text text-light">{this.props.UserData.numphone}</span></p>
            <p className="text-cauhinh">+ Email đăng kí:  <span className="span-text text-light">{this.props.UserData.email}</span></p>
            <button className="btn col-xl-3 col-lg-3 col-md-6 col-6 col-sm-5 mr-2 mb-2 btn-danger text-white" id='changeinfo'>Chỉnh sửa</button>
            <button className="btn col-xl-3 col-lg-3 col-md-6 col-6 col-sm-5 mb-2 btn-danger text-white" id='changepass'>Thay đổi mật khẩu</button>
            </div>


                {/*Đổi pass */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="Change">
            <p className="text-light" style={{fontSize:"25px"}}>Thay đổi mật khẩu: </p>
                
            <input type="password" value={this.state.oldpass} onChange = {this.oldpass} className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 " id="PassOld" placeholder="Nhập mật khẩu cũ" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <input type="password" value={this.state.setpass1} onChange = {this.setpass1} className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="PassNew" placeholder="Nhập mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <input type="password" value={this.state.setpass2} onChange = {this.setpass2} className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3 mb-5" id="PassNew2" placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
           
            <button className="btn col-xl-3 col-lg-3 col-md-6 col-6 col-sm-5 mr-2 mb-2 btn-danger text-white  hihihi " onClick={Updatepass} >Lưu Thay đổi</button>
            <button className="btn col-xl-3 col-lg-3 col-md-6 col-6 col-sm-5 mb-2 text-white     hihihi"  style={{background: "rgba(255, 255, 255, 0.1)"}}>Hủy</button>
            
            </div>



              {/*Đổi thông tin */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="ChangeInfo">
            <p className="text-light" style={{fontSize:"25px"}}>Thay đổi Thông Tin: </p>

            <p className="text-cauhinh">+ Tên người dùng:</p>  
            <input type="text" value={this.state.Newusername} onChange = {this.setNewusername}  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 "  placeholder="Họ và tên" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <p className="text-cauhinh">+ Ngày sinh:</p>  
            <input type="date" value={this.state.Newbirth} onChange = {this.Newbirth}  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 "  placeholder="DD/MM/YY" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <p className="text-cauhinh">+ Giới tính:</p>  
            <input type="sex" value={this.state.Newsex} onChange = {this.Newsex} className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 "  placeholder="Giới tính" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <p className="text-cauhinh">+ Địa chỉ:</p>  
            <input type="text" value={this.state.Newaddress} onChange = {this.Newaddress}  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 "  placeholder="địa chỉ" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <p className="text-cauhinh">+ Nick name:  </p>
            <input type="text" value={this.state.Newnickname} onChange = {this.Newnickname}  className="form-control  col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="Date" placeholder="Nick name" style={{background: "rgba(255, 255, 255, 0.1)"}} />    
            <p className="text-cauhinh">+ Số điện thoại:  </p>
            <input type="phone" value={this.state.Newphone} onChange = {this.Newphone}  className="form-control  col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="Date" placeholder="Số điện thoại" style={{background: "rgba(255, 255, 255, 0.1)"}} />    


            <button onClick={UpdateInfo} className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mr-2 mb-2 mt-5 btn-danger text-white  hihihi " >Lưu Thay đổi</button>
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2 mt-5 text-white     hihihi"  style={{background: "rgba(255, 255, 255, 0.1)"}}>Hủy</button>
            
            </div>


            </div>
        );
}}