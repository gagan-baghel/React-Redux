import { combineReducers } from "redux";
import { productReducer,selectProductReducer,addProductReducer } from "./productReducer";


const  reducers = combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
    cartProducts:addProductReducer
}) 

export default reducers;