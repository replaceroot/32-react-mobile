import React from "react";
import { TabBar } from 'antd-mobile';

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
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span className="iconfont icon-gouwuche" />}
            title="Cart"
            key="Cart"
            badge={1}
            selected={this.props.match.url === "/Cart"}
            onPress={() => { this.props.history.push("/Cart") }}

          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="Mine"
            key="Mine"

            selected={this.props.match.url === "/Mine"}
            onPress={() => { this.props.history.push("/Mine") }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MyLayout;


