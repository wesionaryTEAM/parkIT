import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [thunk];
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    user: userReducer,//user key ma store gareko
    UI: uiReducer

});

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ),);

export default store;
