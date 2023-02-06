import { ActionTypes } from "../contants/action-types";



export const productReducer = (state = {} , {type , payload} ) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
}  

export const selectProductReducer = (state= {} , {type , payload} ) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
}

export const addProductReducer = (state=[] , {type , payload} ) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            if(state.filter((item)=> item.id===payload.id).length===0)
            return [...state,payload]
        case ActionTypes.EDIT_CART_PRODUCT:
            return state.map((item)=>{if(item.id==payload.id) {item.quantity=payload.quantity } return item})
        case ActionTypes.REMOVE_PRODUCT_FROM_CART:
            let temp = [...state]
            temp.splice(payload,1)
            return [...temp]
        default:
            return state;
    }
}  