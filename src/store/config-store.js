import {createStore , combineReducers ,applyMiddleware, compose} from 'redux';
import expenseReducer from '../Reducers/expenseReducer';
import filterReducer from '../Reducers/filterReducer';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/auth'
const composeEnhancer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;


export default ()=>{
    const store = createStore(
        combineReducers({
            expense : expenseReducer , 
            filter : filterReducer,
            auth : authReducer
            }),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            composeEnhancer( applyMiddleware(thunk) )
        )
    return store;
}