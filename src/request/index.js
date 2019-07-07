// 1 引入axios
import axios from "axios";


// 提取公共的url
axios.defaults.baseURL = "http://react.zbztb.cn/site"

// 过滤器 
// axios 请求过滤器
// axios 响应过滤器 
// 1 判断状态码
// 2 不希望多了一层嵌套

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  let { data } = response;
  if (data.status === 0) {
    // 成功
    return data.message;
  } else {
    console.error("数据请求失败");
    console.log(response);
    return response;
  }

}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



/**
 * 获取首页轮播图的数据
 */
export const getGoods = () => axios.get("/goods/gettopdata/goods");


/**
 * 获取首页商品列表
 */
export const getGoodsGroup = () => axios.get("/goods/getgoodsgroup");

/**
 * 获取商品的详情信息
 * @param {number} id 商品的id
 */
export const getGoodsInfo = (id) => axios.get("/goods/getgoodsinfo/" + id);


