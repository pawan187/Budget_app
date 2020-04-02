import {createStore , combineReducers} from 'redux';
import expenseReducer from '../Reducers/expenseReducer';
import filterReducer from '../Reducers/filterReducer';

export default ()=>{
    const store = createStore(
        combineReducers({
            expense : expenseReducer , 
            filter : filterReducer
            }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    return store;
    }