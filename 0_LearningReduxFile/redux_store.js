const newBooking = (name,amount)=>{
    return {
        type:"NEW_BOOKING",
        payload:{
            name,
            amount
        }
    }
}
const cancelBooking = (name,refundamount)=>{
    return {
        type:"CANCEL_BOOKING",
        payload:{
            name,
            refundamount
        }
    }
}
const reservationHistory = (oldReservationHistory=[],action)=>{
    if(action.type==="NEW_BOOKING") return [...oldReservationHistory,action.payload]
    else if(action.type==="CANCEL_BOOKING") return oldReservationHistory.filter(record => record.name!==action.payload.name )
    return oldReservationHistory;
}
const CancelltionHistory = (oldCancelltionHistory=[],action)=>{
    if(action.type==="CANCEL_BOOKING")  return [...oldCancelltionHistory,action.payload]
    return oldCancelltionHistory;
}
const accounting = (total=100,action)=>{
    if(action.type==="NEW_BOOKING") return total+action.payload.amount
    else if(action.type==="CANCEL_BOOKING") return total-action.payload.refundamount
    return total;
}
const { createStore , combineReducers } = Redux;
const railwayCentralStore = combineReducers({
    accounting:accounting,
    CancelltionHistory:CancelltionHistory,
    reservationHistory:reservationHistory
})
const store = createStore(railwayCentralStore)
store.dispatch(newBooking("gagan",50))
store.dispatch(newBooking("baghel",50))
store.dispatch(newBooking("dhiru",50))
store.dispatch(cancelBooking("dhiru",10))
console.log(store.getState())