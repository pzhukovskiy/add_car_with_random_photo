import {createStore, combineReducers} from "redux";
import counterReducer from "../reducer/reducer";

const rootReducers = combineReducers({
    item: counterReducer
});

export const store = createStore(rootReducers);