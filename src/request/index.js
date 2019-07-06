// 1 引入axios
import axios from "axios";


/**
 * 获取首页轮播图的数据
 */
export const getGoods = () => axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods");


