import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import gapReducer from "./gapReducers";
import thunk from "redux-thunk";
import articlesReducer from "./articlesReducers";

const initialState = {};
const reducer = combineReducers({
  articleGap: gapReducer,
  articlesList: articlesReducer,
});

const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEhancer(applyMiddleware(thunk))
);

export default store;
