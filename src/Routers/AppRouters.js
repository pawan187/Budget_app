import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'  
import Expense from '../Components/Expense'
import AddExpense from '../Components/AddExpense'
import EditExpense from '../Components/EditExpense'
import HelpExpense from '../Components/HelpExpense'
import Error from '../Components/Error'
import Header from '../Components/Header'  
import Footer from '../Components/Footer'
 export default ()=>(
    <BrowserRouter>
    <div> 
      <Header />
      <Switch>
        <Route path="/" component={Expense} exact={true}/>
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpExpense} />
        <Route component={Error}/> 
      </Switch>
      <Footer/>
      </div>
      </BrowserRouter>
  )