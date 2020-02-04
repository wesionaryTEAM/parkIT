import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
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
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

const persistor = persistStore(store)

export { store, persistor };
