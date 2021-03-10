import { FECTH_GAME, FILER_GAME_BY_TYPE, ORDER_GAME, SEARCH_GAME } from "../action/type";

export const gamesReducer = (state = {}, action) => {
    switch (action.type) {
        case FECTH_GAME:
            return { items: action.payload }
        case FILER_GAME_BY_TYPE:
            return {
                ...state,
                type: action.payload.type,
                filteredItems: action.payload.items
            }
        case ORDER_GAME:
            return {
                ...state,
                filteredItems: action.payload.items
            }
        case SEARCH_GAME:
            return {
                ...state,
                searchItems: action.payload
            }
        default:
            return state;
    }
}