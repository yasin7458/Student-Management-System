import { createStore, combineReducers } from "redux";
import authReducer from "../reducer/authReducer";
import studentReducer from "../reducer/studentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    students: studentReducer
});

const store = createStore(rootReducer);

export default store;