import { CART_CHECK, CART_ALL_CHECK  } from "../actionTypes";


/**
 * 改变商品的选中状态
 * @param {number} id 要操作的商品的id
 */
export const cartCheck=(id)=>{
  return {
    type:CART_CHECK,
    value:{id}
  }
}

/**
 * 实现点击全选 改变商品的选中状态
 * @param {bool} isChecked 全选按钮的状态
 */
export const cartAllCheck=(isChecked)=>{
  return {
    type:CART_ALL_CHECK,
    value:{isChecked}
  }
}