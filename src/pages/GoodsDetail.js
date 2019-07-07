import React, { Component, Fragment } from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import { getGoodsInfo } from "../request";
class GoodsDetail extends Component {
  state = {
    imgHeight: 146,
    // 轮播图
    imglist: [],
    goodsinfo: {}
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    getGoodsInfo(id)
      .then(res => {
        this.setState({ imglist: res.imglist, goodsinfo: res.goodsinfo });
      })
  }

  render() {
    const { goodsinfo } = this.state;
    return (
      <Fragment>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >商品详情</NavBar>
        {/* 轮播图 开始 */}
        <Carousel
          autoplay
          infinite
        >
          {this.state.imglist.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.original_path}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 轮播图 结束 */}
        {/* 商品信息 开始 */}
        <div className="goods_info">
          {/* 标题 */}
          <div className="goods_title">{goodsinfo.title}</div>
          {/* 子标题 */}
          <div className="goods_sub_title">{goodsinfo.sub_title}</div>
          {/* 价格 */}
          <div className="goods_price">
            <span className="before_price">￥{goodsinfo.market_price}</span>
            <span className="news_price">￥{goodsinfo.sell_price}</span>
          </div>

          {/* 商品 参数 开始*/}
          <div className="goods_parameter">
            <div className="goods_parameter_title">商品参数</div>
            {/* 编号 */}
            <div className="goods_no">商品编号：{goodsinfo.goods_no}</div>
            {/* 库存 */}
            <div className="goods_stock_quantity">库存：{goodsinfo.stock_quantity}</div>
            {/* 时间 */}
            <div className="goods_time">上架时间：{goodsinfo.add_time}</div>
            {/* 内容 */}
            <div className="goods_content" dangerouslySetInnerHTML={{ __html: goodsinfo.content }} />
          </div>
          {/* 商品参数 结束 */}
          {/* 商品信息 结束 */}
        </div>

        <div className="footer_bar">
          <div className="bar_item  contacter ">
            <span className="iconfont icon-kefu"></span>
            <div className="bar_name">客服</div>
          </div>
          <div className="bar_item  shopping_cart">
            <span className="iconfont icon-gouwuche"></span>
            <div className="bar_name">购物车</div>
            <span className="mark"> {8} </span>
          </div>
          <div className="bar_item btn_cart_add ">
            加入购物车
          </div>
          <div className="bar_item btn_buy ">
            立即购买
          </div>
        </div>

        <style jsx>{`
        div.goods_info {
          background-color:#fff;
          padding-bottom:50px;
  div.goods_title {
    font-weight: 600;
    font-size: 16px;
    padding: 5px;
  }

  div.goods_sub_title {
    padding: 5px;
    font-size: 15px;
    color: #666;
  }

  div.goods_price {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    span.before_price {
      color: #666;
      text-decoration: line-through;
    }

    span.news_price {
      color: red;
      font-size: 16px;
    }
  }

  div.goods_parameter {
    div.goods_parameter_title {
      font-weight: 600;
      font-size: 16px;
      padding: 5px;
    }

    div.goods_no {
      padding: 5px;
    }

    div.goods_stock_quantity {
      padding: 5px;
      span{
        color: red;
        font-size: 15px;
      }
    }

    div.goods_time {
      padding: 5px;
    }

    div.goods_content {
    }
  }
}

div.footer_bar {
  background-color:#fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #666;
  .bar_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-size: 14px;
    flex:1;
  }

  .shopping_cart {
  position: relative;
  .mark {
    position: absolute;
    padding: 3px 3px;
    background-color: orangered;
    color: #fff;
    font-size: 12px;
    top: 0;
    left: 50%;
    border-radius: 50%;
  }
}


  div.bar_item.btn_cart_add {
    background-color: #ff976a;
    color: #fff;
    font-size: 18px;
    flex:2;
  }

  div.bar_item.btn_buy {
    background-color: #ff4444;
    color: #fff;
    font-size: 18px;
    flex:2;
  }
}


          `}</style>
      </Fragment>
    );
  }
}
export default GoodsDetail;

