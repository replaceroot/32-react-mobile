import React, { Component, Fragment } from 'react';
import { NavBar, Icon, SwipeAction, List, Checkbox, Button } from "antd-mobile";
// 1 引入 路由  withRouter
import { withRouter } from "react-router-dom";
import { cartCheck } from "../store/actionCreator";
import { connect } from "react-redux";


const CheckboxItem = Checkbox.CheckboxItem;


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
                    {/* 复选框 */}
                    <div className="cart_chk_row">
                      <CheckboxItem checked={v.isChecked} onChange={()=>this.props.hanleCartCheck(v.id)}  />
                    </div>
                    {/* 商品图片 */}
                    <div className="cart_goods_img_row">
                      <img src={v.img_url} alt="" />
                    </div>
                    {/* 商品信息 */}
                    <div className="cart_goodsinfo_row">
                      <div className="goods_name">{v.title}</div>
                      <div className="goods_price">￥{v.price}</div>
                    </div>
                    {/* 工具栏 */}
                    <div className="cart_tool_row">
                      <Button type="primary" inline size="small" >-</Button>
                      <span className="goods_num">{v.num}</span>
                      <Button type="primary" inline size="small" >+</Button>
                    </div>
                  </div>

                </SwipeAction>
              </List>

            </div>
          )}
        </div>
        {/* 购物车内容 结束 */}
        {/* 底部工具栏 开始 */}
        <div className="btm_tool">
          {/* 全选 */}
          <div className="all_check_row">
            <CheckboxItem checked={this.props.allCheck}>全选</CheckboxItem>
          </div>
          {/* 总价 */}
          <div className="total_price_row">
            合计 <span className="total_price">￥{199}</span>
          </div>
          {/* 结算 */}
          <div className="count_row">
            去结算({10})
          </div>
        </div>
        {/* 底部工具栏 结束 */}
        <style jsx>{`div.cart_content {
  div.cart_item {
    div.cart_item_inner {
      padding: 10px 0;
      display: flex;
      div.cart_chk_row {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div.cart_goods_img_row {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
        }
      }

      div.cart_goodsinfo_row {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div.goods_name {
        }

        div.goods_price {
        }
      }

      div.cart_tool_row {
        flex: 4;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .goods_num {
          padding: 3px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
div.btm_tool {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 50px;
  background-color: #fff;
  div.all_check_row {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.total_price_row {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    span.total_price {
      color: orangered;
      font-size: 15px;
      font-weight: 600;
    }
  }

  div.count_row {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    background-color: orangered;
  }
}
`}</style>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {cartList}=state.cartReducer;
  return {
    // props.cartList
    cartList: cartList,
    // 当所有的购物车对象的选中状态都为true时 全选就true
    allCheck:cartList.every(v=>v.isChecked)
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    hanleCartCheck:(id)=>{
      dispatch(cartCheck(id));
    }
  }
}


// 2 把路由信息对象也传递到了cart组件中 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));