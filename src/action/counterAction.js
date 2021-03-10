import { COUNT_ITEM_CART } from "./type";

export const countItemInCart = () => async (dispatch) => {
    // const token = getToken();
    // const res = await fetch("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // });
    // let counts = 0;
    // const data = await res.json();
    // data.items.forEach(item => {
    //   counts += item.count;
    // })
    let count = 0;
    let carts = JSON.parse(localStorage.getItem('CART')) || [];
    carts.forEach(item => {
      count += item.qty;
    });
    dispatch({
      type: COUNT_ITEM_CART,
      payload: count
    })
  }