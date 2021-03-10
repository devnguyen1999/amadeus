import { FECTH_CART, ADD_TO_CART, PLUS_QTY, SUBTRACT_QTY, DELETE, FECTH_CART_FROM_LOCALSTORAGE } from "../action/type";

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case FECTH_CART:
            return { items: action.payload }
        case FECTH_CART_FROM_LOCALSTORAGE:
            return { items: action.payload }
        case ADD_TO_CART:
            return { ...state }
        case PLUS_QTY:
            return { ...state }
        case SUBTRACT_QTY:
            return { ...state }
        case DELETE:
            return { ...state }
        default:
            return state;
    }
}