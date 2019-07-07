import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {  getGoodsInfo} from "../request";

class GoodsDetail extends Component {

  componentDidMount() {
    const {id}=this.props.match.params;
    getGoodsInfo(id)
    .then(res=>{
      console.log(res);
    })
  }

  render() {
    return (
      <Fragment>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >商品详情</NavBar>

      </Fragment>
    );
  }
}
export default GoodsDetail;

