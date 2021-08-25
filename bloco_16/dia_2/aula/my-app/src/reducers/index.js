import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export default combineReducers({
    todoReducer,
    //se tivesse mais reducers é só importar e colocar aqui.
})