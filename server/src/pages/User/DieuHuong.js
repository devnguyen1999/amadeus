import React from "react";

import ThongTin from "./Thongtin.js";
import LichSu from "./LichSu.js";


export default class DieuHuong extends React.Component{
   

    renderResult = () => {
        return <ThongTin HT={this.props.HT} UserData={this.props.UserData} />
    }
    render() {
        return this.props.HT === 1 ? this.renderResult() : <LichSu UserData={this.props.UserData}/> 
    }
}
