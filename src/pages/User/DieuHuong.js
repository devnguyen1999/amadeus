import React from "react";

import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import ThongTin from "./Thongtin.js";
import LichSu from "./LichSu.js";
import UaThich from "./UaThich.js";

export default class DieuHuong extends React.Component{
   

    renderResult = () => {
        return <ThongTin HT={this.props.HT} />
    }
    render() {
        return this.props.HT === 1 ? this.renderResult() :  this.props.HT=== 2 ? <LichSu /> : <UaThich />
    }
}
