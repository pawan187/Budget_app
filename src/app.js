
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'  
import './Styles/style.scss';
import AppRouter , { history } from './Routers/AppRouters.js'
import configStore from './store/config-store';
import {addExpense , editExpense ,removeExpense , setExpense, clearExpense , startSetExpense, startEditExpense} from './actions/expenseActions';
import {Login , Logout} from './actions/auth'
import 'bootstrap/dist/css/bootstrap.css';
// import {setEndDate , setStartDate , sortByAmount ,setTextFilter , sortByDate} from './actions/filterActions';
// import getVisible from './selectors/expenses'
// import moment from 'moment';
import {firebase} from './firebase/firebase'
// import './playground/promises'

const store = configStore()
// const unsubscribe = store.subscribe(()=>{
// console.log(store.getState());  
// })
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
let hasRendered = false;
const RenderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById("app"));
        hasRendered = true
    }
}

ReactDOM.render(<p>loading....</p>,document.getElementById("app"));
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(Login(user.uid))
        store.dispatch(startSetExpense())
        .then(()=>{
            RenderApp()
            if(history.location.pathname ==='/'){
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(Logout())
        store.dispatch(clearExpense())
        RenderApp()
        history.push('/')
    }
})
