import { CART_CHECK } from "../actionTypes";

const defaultState = {
  cartList: [
    {
      id: 0,
      price: 199,
      num: 100,
      isChecked: true,
      title: "小米暖手器",
      img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg"
    },
    {
      id: 1,
      price: 1199,
      num: 1100,
      isChecked: true,
      title: "相机",
      img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200214471783.jpg"
    }
  ]
}
export default (state = defaultState, action) => {

  switch (action.type) {
    case CART_CHECK:
      // 1 深拷贝一份state
      let newState = JSON.parse(JSON.stringify(state));
      let { id } = action.value;
      // 2 或要操作的购物车对象的索引
      let index = newState.cartList.findIndex(v => v.id === id);
      // 3 修改购物车对象的选中状态 取反 
      newState.cartList[index].isChecked = !newState.cartList[index].isChecked;
      return newState;
    default:
      break;
  }

  return state;
}