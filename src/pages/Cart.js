import React, { Component, Fragment } from 'react';

import { NavBar, Icon } from "antd-mobile";

// 1 引入 路由  withRouter
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class Cart extends Component {

  render() {
    console.log(this.props.cartList);
    return (
      <Fragment>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >购物车</NavBar>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // props.cartList
    cartList: state.cartReducer.cartList
  }
}


// 2 把路由信息对象也传递到了cart组件中 
export default connect(mapStateToProps, null)(withRouter(Cart));