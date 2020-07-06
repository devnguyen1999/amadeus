import React from "react";


import ThongTinGame from "./ChiTietGame.js"
import CauHinh from "./CauHinh.js"

export default class ThongTin extends React.Component{
   

    renderResult = () => {
        return <ThongTinGame DATA={this.props.DATA} />
    }
    render() {
        return this.props.HT ? this.renderResult() : <CauHinh DATA={this.props.DATA} />
    }
}

