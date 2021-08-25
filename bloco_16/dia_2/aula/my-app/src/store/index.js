import { createStore } from "redux";
import rootReducers from '../reducers'

//todos os reduceres são declarados no 
//combineReducers e passados p store rootReducers.
const store = createStore(rootReducers) 

export default store;