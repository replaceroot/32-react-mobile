import { CART_CHECK, CART_ALL_CHECK } from "../actionTypes";

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
      {
        // 1 深拷贝一份state
        let newState = JSON.parse(JSON.stringify(state));
        let { id } = action.value;
        // 2 或要操作的购物车对象的索引
        let index = newState.cartList.findIndex(v => v.id === id);
        // 3 修改购物车对象的选中状态 取反 
        newState.cartList[index].isChecked = !newState.cartList[index].isChecked;
        return newState;
      }
    case CART_ALL_CHECK:
      {
        /* 
        1 获取全选按钮状态
        2 循环遍历购物车对象
        3 修改购物车对象的选中状态
        4 返回新的state
         */
        let newState = JSON.parse(JSON.stringify(state));
        // 遍历循环购物车对象
        // forEach 里面修改循环项 的时候 也会修改到源数组
        newState.cartList.forEach(v => v.isChecked = action.value.isChecked);
        return newState;
      }
    default:
      break;
  }

  return state;
}