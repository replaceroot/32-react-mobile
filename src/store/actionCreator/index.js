import { CART_CHECK  } from "../actionTypes";


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