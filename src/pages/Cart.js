import React, { Component, Fragment } from 'react';

import { NavBar,Icon } from "antd-mobile";

// 1 引入 路由  withRouter
import { withRouter } from "react-router-dom";

class Cart extends Component {
  render() {
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
// 2 把路由信息对象也传递到了cart组件中 
export default withRouter(Cart);