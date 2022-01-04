import {combineReducers} from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({
    //accessed as 'state.products' -> the state
    products: productReducer

});

export default reducer;