// 1 导入 要合并的其他管理员
import cartReducer from "./cartReducer";
// 2 引入一个 负责合并的购物车管理员对象 方法
import {  combineReducers} from "redux";
export default combineReducers({cartReducer});