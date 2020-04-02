import { createStore } from 'redux'
const increment = (({ incrementBy = 1}={})=>({
    type : "INCREMENT",
    incrementBy
}))
const decrement = (({ decrementBy = 1}={})=>({
    type : "DECREMENT",
    decrementBy
}))
const set = (({ count = 1}={})=>({
    type : "SET",
    count
}))
const reset = (()=>({type:"RESET"}))

const countReduce = (state = {count : 0 },action)=>{
    switch(action.type){
    case "INCREMENT" :
        return {
            count : state.count + action.incrementBy
        };
    case "DECREMENT":
        return {
            count : state.count - action.decrementBy
        };
    case "SET":
        return {
            count : action.count
        };
    case "RESET" : 
        return {
            count : 0
        }
    default :
    return state
}   
}
const store = createStore(countReduce)
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())}
)
// console.log(store.getState())

store.dispatch(increment({incrementBy : 9}));
store.dispatch(decrement({ decrementBy : 2}));


store.dispatch(set({    count : 10}))
store.dispatch(reset())

unsubscribe();