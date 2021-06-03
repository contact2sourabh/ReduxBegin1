import { createStore } from 'redux';
import rootReducer from "./Reducer/Index";


const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
export default Store;