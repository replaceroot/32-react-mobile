const defaultState={
  cartList:[
    {
      id:0,
      price:199,
      num:100,
      isChecked:true,
      title:"小米暖手器",
      img_url:"http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg"
    },
    {
      id:1,
      price:1199,
      num:1100,
      isChecked:true,
      title:"相机",
      img_url:"http://react.zbztb.cn/upload/201504/20/thumb_201504200214471783.jpg"
    }
  ]
}
export default (state=defaultState,action)=>{
  return state;
}