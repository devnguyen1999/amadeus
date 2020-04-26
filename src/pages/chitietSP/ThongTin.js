import React from "react";
import PropTypes from "prop-types";
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import ThongTinGame from "./ChiTietGame.js"
import CauHinh from "./CauHinh.js"

export default class ThongTin extends React.Component{
   

    renderResult = () => {
        return <ThongTinGame />
    }
    render() {
        return this.props.HT ? this.renderResult() : <CauHinh />
    }
}

