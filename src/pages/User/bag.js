import React from "react";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { countItemInCart} from '../../action/counterAction';
class Bag extends React.Component {
  render() {
    if(this.props.count === undefined) {
      this.props.countItemInCart();
    }
    const count = this.props.count;
    return (
      <Link className="nav-link mr-auto" to="/gio-hang">
        <div className="d-inline-block bag text-center">
          <i className="far fa-shopping-cart" />
              <span className="number">{count}</span>
        </div>
      </Link>
    );
  }
}
export default connect((state) => ({count: state.counter.count }), { countItemInCart })(Bag);