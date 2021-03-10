import {createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {gamesReducer} from './reducers/gameReducers'
import {cartReducer} from './reducers/cartReducer'
import {counterReducer} from './reducers/counterReducer'
const initalState = {};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    combineReducers({
        games: gamesReducer,
        cart: cartReducer,
        counter: counterReducer
    }),
    initalState,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;