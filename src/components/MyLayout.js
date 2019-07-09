import React from "react";
import { TabBar } from 'antd-mobile';
import { connect } from "react-redux";
class MyLayout extends React.Component {
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Home"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            selectedIcon={<span className="iconfont icon-home" />}
            selected={this.props.match.url === "/"}

            onPress={() => { this.props.history.push("/") }}

          >
            {/* 当url上的路径是 /  */}
            {this.props.match.url === "/" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span className="iconfont icon-gouwuche" />}
            title="Cart"
            key="Cart"
            badge={this.props.countAll}
            selected={this.props.match.url === "/Cart"}
            onPress={() => { this.props.history.push("/Cart") }}

          >
            {this.props.match.url === "/Cart" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="Mine"
            key="Mine"

            selected={this.props.match.url === "/Mine"}
            onPress={() => { this.props.history.push("/Mine") }}
          >
            {this.props.match.url === "/Mine" && this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

const getTotalNums = (arr) => {
  let sum = 0;
  arr.forEach(v => {
    if (v.isChecked) {
      sum += v.num;
    }
  })
  return sum;
}
const mapStateToProps = (state) => {
  const { cartList } = state.cartReducer;
  return {
    // 需要结算的数量
    countAll: getTotalNums(cartList)
  }
}

export default connect(mapStateToProps, null)(MyLayout);


