import { ActionTypes } from "../contants/action-types";
export const setProduct = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload : products
        }
}
export const selectedProduct = (products)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload : products
    }
} 
export const removeProduct = ()=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
} 

export const addProductToCart = (product)=>{
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload:product
    }
} 
export const editProductToCart = (product)=>{
    return {
        type: ActionTypes.EDIT_CART_PRODUCT,
        payload:product
    }
}

export const removeProductFromCart = (index)=>{
    return {
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload:index
    }
} 