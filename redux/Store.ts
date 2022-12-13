import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "./Reducer";

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof reducer>;

export default store