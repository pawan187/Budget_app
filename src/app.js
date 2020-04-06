
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'  
import './Styles/style.scss';
import AppRouter from './Routers/AppRouters.js'
import configStore from './store/config-store';
import {addExpense , editExpense ,removeExpense , setExpense , startSetExpense, startEditExpense} from './actions/expenseActions';
// import {setEndDate , setStartDate , sortByAmount ,setTextFilter , sortByDate} from './actions/filterActions';
// import getVisible from './selectors/expenses'
// import moment from 'moment';
import './firebase/firebase'
// import './playground/promises'

const store = configStore()
const unsubscribe = store.subscribe(()=>{
console.log(store.getState());  
})
// const expense = [
//     {
//         id : '684135',
//         description : 'saf',
//         note : 'adfgagradfg',
//         amount : 500,
//         createdAt : 35135168132
//     },{
//         id : '4646135',
//         description : 'saf',
//         note : 'adfgagradfg',
//         amount : 500,
//         createdAt : 35135168132
//     }
// ]
    // const one = store.dispatch(addExpense({description : 'bottle' , note : 'it is a milton bottle', amount : 200, createdAt : moment().valueOf()}))
    // const two = store.dispatch(addExpense({description : 'mobile phone' , note : 'vivo v9 mobile phone', amount : 3000, createdAt : moment().valueOf()+2*12000}))
    // const  three = store.dispatch(addExpense({description : 'recharge' , note : 'top up', amount : 500, createdAt : moment().valueOf()+4*12000}))

    // const four = store.dispatch(editExpense({id:one.expense.id , update : { amount : 300 }}))
// store.dispatch(removeExpense({id:one.expense.id}))

// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())
// store.dispatch(setTextFilter('mobile'))

// const state = store.getState()
// console.log(getVisible(state.expense,state.filter))
// console.log(Date().valueOf())
const jsx = (
    <Provider  store = {store}>
        <AppRouter />
    </Provider>
    )
ReactDOM.render(<p>loading....</p>,document.getElementById("app"));
store.dispatch(startSetExpense())
.then(()=>{
        ReactDOM.render(jsx,document.getElementById("app"));
})
