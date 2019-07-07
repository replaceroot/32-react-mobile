import React, { Component, Fragment } from 'react';
import { getGoods,getGoodsGroup } from "../request";
import { Carousel, WingBlank } from 'antd-mobile';
class Home extends Component {
  state = {
    imgHeight: 176,
    // 轮播图
    sliderlist: [],
    // 推荐商品
    toplist: [],
    // 商品列表
    goodsgrouplist: []
  }
  componentDidMount() {
    getGoods()
      .then(res => {
        this.setState({
          sliderlist: res.data.message.sliderlist,
          toplist: res.data.message.toplist,
        });
      })

      getGoodsGroup()
      .then(res=>{
        this.setState({ goodsgrouplist: res.data.message  });
      })
  }

  render() {
    console.log(this.props.history);
    return (
      <Fragment>
        <h1 onClick={()=>this.props.history.push("/GoodsDetail/100")}>跳转</h1>

        <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <div
              key={val.id}
              onClick={()=>this.props.history.push("/GoodsDetail/"+val.id)}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* 推荐商品开始 */}
        <div className="recommonent">
          <div className="recommonent_title">推荐商品</div>
          <div className="recommonent_content">
            {this.state.toplist.map(v =>
              <div onClick={()=>this.props.history.push("/GoodsDetail/"+v.id)} className="rec_item" key={v.id} >
                <div className="rec_item_img_wrap">
                  <img src={v.img_url} alt="" />
                </div>
                <div className="rec_item_goods_wrap">
                  <div className="rec_item_title">
                    {v.title}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 推荐商品结束 */}
        {/* 商品列表 开始 */}
        <div className="goods_list">
          {this.state.goodsgrouplist.map(v1=>
          <div key={v1.level1cateid} className="goods_group">
            <div className="goods_group_title">{v1.catetitle}</div>
            <ul className="goods_group_content">
              {v1.datas.map(v2=>
              <li key={v2.artID} onClick={()=>this.props.history.push("/GoodsDetail/"+v2.artID)}>
                <img src={v2.img_url} alt=""/>
                <div className="goods_name">{v2.artTitle}</div>
                <div className="goods_price_row">
                  <span className="sell_price"> ￥ {v2.sell_price}</span>
                  <span className="market_price">￥ {v2.market_price}</span>
                </div>
                <div className="goods_hot_sell">热卖中 <span>{v2.stock_quantity} 件</span></div>
              </li> )}
            </ul>
          </div>
            )}
        </div>
        {/* 商品列表 结束 */}
        <style jsx>{`  
        .recommonent {
  .recommonent_title {
    padding: 10px;
    color: #666;
    font-size: 14px;
  }

  .recommonent_content {
    padding: 10px;
    background-color: #fff;
    .rec_item {
      padding: 5px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .rec_item_img_wrap {
        flex: 1;
      }

      .rec_item_goods_wrap {
        flex: 6;
        overflow: hidden;
        font-size: 16px;
        .rec_item_title {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
div.goods_list {
  div.goods_group {
    div.goods_group_title {
      padding: 10px;
      color: #666;
      font-size: 14px;
    }

    ul.goods_group_content {
      display: flex;
      flex-wrap: wrap;
      padding: 0 5px;
      li {
        width: 50%;
        background-color: #fff;
        padding: 5px;
        &:nth-child(odd){
          border-right: 1px solid #ccc;
        }
        border-bottom: 1px solid #ccc;
        img {
          width: 80%;
          margin: 0 auto;
        }

        div.goods_name {
          color: #000;
          font-size: 13px;
          

          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          

        }

        div.goods_price_row {
          padding: 5px 0;

          display: flex;
          justify-content: space-between;
          span.sell_price {
            color: red;
            font-size: 15px;
          }

          span.market_price {
            color: #666;
            text-decoration: line-through;
          }
        }

        div.goods_hot_sell {
          padding: 5px 0;
   
          span {
            font-size: 15px;
            color: red;
          }
        }
      }
    }
  }
}
        `}</style>
      </Fragment>

    );
  }
}
export default Home;