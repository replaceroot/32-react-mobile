import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import MyLayout from "./components/MyLayout";
import GoodsDetail from './pages/GoodsDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
        <Router>
          <Route path="/" exact render={(props) => <MyLayout  {...props}><Home  {...props} /></MyLayout>} ></Route>
          <Route path="/Cart" render={(props) => <MyLayout  {...props}><Cart /></MyLayout>} ></Route>
          <Route path="/Mine" render={(props) => <MyLayout  {...props}><Mine /></MyLayout>} ></Route>
          {/* 
          商品详情是没有tabbar
          在GoodsDetail 组件当中 没有 this.props.history这个对象
          1 render函数渲染的方式动态传递参数

           */}
          {/* <Route path="/GoodsDetail/:id" render={(props) => <GoodsDetail {...props}  />} ></Route> */}
          <Route path="/GoodsDetail/:id" component={GoodsDetail} ></Route>
        </Router>

      </Fragment>
    );
  }
}
export default App;

