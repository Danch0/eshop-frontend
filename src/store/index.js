import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/countReducer';
import dessertReducer from "./reducers/dessertReducer";
import snackReducer from "./reducers/snackReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  desserts: dessertReducer,
  snacks: snackReducer
});
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;