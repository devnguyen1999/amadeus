import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";



export default class ThongTin extends React.Component{
    constructor(props) {
        super(props);
       this.state = {thaypass: this.props.HT}
       
    }


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
        return  (
            <div className="container-fluid">
                {/*Thông tin  */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="Info">
            <p className="text-cauhinh">+ Họ và Tên:  <span className="span-text text-light">Nguyễn Hoàng Thanh Linh</span></p>
            <p className="text-cauhinh">+ Ngày Sinh:  <span className="span-text text-light">15/05/1999</span></p>
            <p className="text-cauhinh">+ Số CMND:  <span className="span-text text-light">12345678910</span></p>
            <p className="text-cauhinh">+ SỐ điện thoại:  <span className="span-text text-light">19001009</span></p>
            <p className="text-cauhinh">+ Email đăng kí:  <span className="span-text text-light">Otaku-key@gmail.com</span></p>
            <p className="text-cauhinh">+ Địa chỉ:  <span className="span-text text-light">Ninh Thuận</span></p>
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 btn-danger text-white" id='changeinfo'>Chỉnh sửa</button>
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2 btn-danger text-white" id='changepass'>Thay đổi mật khẩu</button>
            </div>


                {/*Đổi pass */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="Change">
            <p className="text-light" style={{fontSize:"25px"}}>Thay đổi mật khẩu: </p>
                
            <input type="password" className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 " id="PassOld" placeholder="Nhập mật khẩu cũ" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <input type="password" className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="PassNew" placeholder="Nhập mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            <input type="password" className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="PassNew2" placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
         
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 mt-5 btn-danger text-white  hihihi " >Lưu Thay đổi</button>
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2 mt-5 text-white     hihihi"  style={{background: "rgba(255, 255, 255, 0.1)"}}>Hủy</button>
            
            </div>



              {/*Đổi thông tin */}
            <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)"}} id="ChangeInfo">
            <p className="text-light" style={{fontSize:"25px"}}>Thay đổi Thông Tin: </p>

            <p className="text-cauhinh">+ Họ và Tên:</p>  
            <input type="text"  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 "  placeholder="Họ và tên" style={{background: "rgba(255, 255, 255, 0.1)"}} />
            
            <p className="text-cauhinh">+ Ngày sinh:  </p>
            <input type="date"  className="form-control  col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" id="Date" placeholder="DD/MM/YY" style={{background: "rgba(255, 255, 255, 0.1)"}} />    


                        
            <p className="text-cauhinh">+ Số CMND:  </p>
            <input type="text"  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3"  placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
         
            <p className="text-cauhinh">+ Số điện thoại:  </p>
            <input type="text"  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3"  placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />
         
            <p className="text-cauhinh">+ Email đăng kí:  </p>
            <input type="email"  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3" placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />

            <p className="text-cauhinh">+ Địa chỉ: </p>
            <input type="text"  className="form-control text-light col-xl-4 col-lg-5 col-md-8 col-10 col-sm-8 mt-3"  placeholder="Nhập lại mật khẩu mới" style={{background: "rgba(255, 255, 255, 0.1)"}} />

            <button className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 mt-5 btn-danger text-white  hihihi " >Lưu Thay đổi</button>
            <button className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2 mt-5 text-white     hihihi"  style={{background: "rgba(255, 255, 255, 0.1)"}}>Hủy</button>
            
            </div>


            </div>
        );
}}