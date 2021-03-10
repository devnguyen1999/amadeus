import {COUNT_ITEM_CART } from "../action/type";

export const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNT_ITEM_CART:
            return { count: action.payload }
        default:
            return state;
    }
}