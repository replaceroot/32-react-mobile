import React, { Component, Fragment } from 'react';
import { NavBar, Icon, SwipeAction, List } from "antd-mobile";

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
        {/* 购物车内容 开始 */}
        <div className="cart_content">
          {this.props.cartList.map(v =>
            <div className="cart_item" key={v.id} >
              <List>
                <SwipeAction
                  style={{ backgroundColor: 'gray' }}
                  autoClose
                  right={[
                    {
                      text: 'Cancel',
                      onPress: () => console.log('cancel'),
                      style: { backgroundColor: '#ddd', color: 'white' },
                    },
                    {
                      text: 'Delete',
                      onPress: () => console.log('delete'),
                      style: { backgroundColor: '#F4333C', color: 'white' },
                    },
                  ]}
                  onOpen={() => console.log('global open')}
                  onClose={() => console.log('global close')}
                >
            
                  <div className="cart_item_inner">

                    
                  </div>

                </SwipeAction>
              </List>

            </div>
          )}
        </div>
        {/* 购物车内容 结束 */}
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