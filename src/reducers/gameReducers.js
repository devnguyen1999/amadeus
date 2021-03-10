import { FECTH_GAME, FILER_GAME_BY_TYPE, ORDER_GAME } from"../action/type";

export const gamesReducer = (state = {}, action) =>{
    switch(action.type) {
        case FECTH_GAME:
            return {items: action.payload, filteredItems: action.payload.items}
        case FILER_GAME_BY_TYPE:
            return {
                ...state,
                type :action.payload.type,
                filteredItems: action.payload.items
            }
        case ORDER_GAME:
            return {
                ...state,
                sort: action.payload.sort ,
                filteredItems: action.payload.items
            }
        default:
            return state;
    }
}