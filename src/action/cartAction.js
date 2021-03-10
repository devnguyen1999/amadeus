import { getToken } from "../Utils/Common";
import { FECTH_CART, ADD_TO_CART, FECTH_CART_FROM_LOCALSTORAGE, PLUS_QTY, SUBTRACT_QTY, DELETE } from "./type";
export const fecthCart = () => async (dispatch) => {
  const token = getToken();
  const res = await fetch("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  dispatch({
    type: FECTH_CART,
    payload: data
  })
}
export const addToCart = (game) => async (dispatch) => {
  const itemGame = { img: '', gameName: '', qty: 0, price: 0, id: '' };
  let carts = JSON.parse(localStorage.getItem('CART')) || [];
  if (carts === null) {
    console.log(game.id);
    itemGame.id = game.id;
    itemGame.gamename = game.name;
    itemGame.img = game.imgHD;
    itemGame.price = game.price;
    itemGame.qty = 1;
    console.log(itemGame);
    carts.push(itemGame);
  }
  else {
    let item = carts.find(item => item.id === game.id);
    if (item === undefined) {
      itemGame.id = game.id;
      itemGame.gameName = game.name;
      itemGame.img = game.imgHD;
      itemGame.price = game.price;
      itemGame.qty = 1;
      carts.push(itemGame);
    }
    else {
      item.qty++;
    }
  }
  save(carts);
  dispatch(fetchCartFromLocalStorage());
  dispatch({
    type: ADD_TO_CART
  })
}
export const plus= (id) => async (dispatch) => {
  let carts = JSON.parse(localStorage.getItem('CART')) || [];
  carts.forEach(item => {
    if(item.id === id) {
      item.qty++
    }
  });
  save(carts);
  dispatch(fetchCartFromLocalStorage());
  dispatch({
    type: PLUS_QTY
  })
}
export const subtract= (id) => async (dispatch) => {
  let carts = JSON.parse(localStorage.getItem('CART')) || [];
  carts.forEach(item => {
    if(item.id === id) {
      item.qty--;
      if(item.qty <1) {
        item.qty++;
      }
    }
  });
  save(carts);
  dispatch(fetchCartFromLocalStorage());
  dispatch({
    type: SUBTRACT_QTY
  })
}
export const deleteOne = (id) => async (dispatch) => {
  let carts = JSON.parse(localStorage.getItem('CART')) || [];
  carts.forEach(item => {
    if(item.id === id) {
      carts.splice(carts.indexOf(item),1);
    }
  });
  save(carts);
  dispatch(fetchCartFromLocalStorage());
  dispatch({
    type: DELETE
  })
}
const save = (carts) => {
  localStorage.setItem('CART', JSON.stringify(carts));
}

export const fetchCartFromLocalStorage = () => async (dispatch) => {
  const carts = JSON.parse(localStorage.getItem('CART'));
  dispatch({
    type: FECTH_CART_FROM_LOCALSTORAGE,
    payload: carts
  })
}
