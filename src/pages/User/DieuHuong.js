import React from "react";
import PropTypes from "prop-types";
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import ThongTin from "./Thongtin.js";
import LichSu from "./LichSu.js";

export default class DieuHuong extends React.Component{
   

    renderResult = () => {
        return <ThongTin HT={this.props.HT} />
    }
    render() {
        return this.props.HT ==1 ? this.renderResult() :  this.props.HT==2 ? <LichSu /> : <div>Trang ưa thích</div>
    }
}
