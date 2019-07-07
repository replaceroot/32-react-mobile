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
            <div className="goods_parameter">商品参数</div>
            {/* 编号 */}
            <div className="goods_no">商品编号：{goodsinfo.goods_no}</div>
            {/* 库存 */}
            <div className="goods_stock_quantity">库存：{goodsinfo.stock_quantity}</div>
            {/* 时间 */}
            <div className="goods_time">上架时间：{goodsinfo.add_time}</div>
            {/* 内容 */}
            <div className="goods_content" dangerouslySetInnerHTML={{__html:goodsinfo.content}}  />
          </div>
          {/* 商品参数 结束 */}
          {/* 商品信息 结束 */}
        </div>
      </Fragment>
    );
  }
}
export default GoodsDetail;

