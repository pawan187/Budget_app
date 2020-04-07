import React from 'react';
import ReactDOM from 'react-dom';
import {Router, BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'  
import Expense from '../Components/Expense'
import AddExpense from '../Components/AddExpense'
import EditExpense from '../Components/EditExpense'
import HelpExpense from '../Components/HelpExpense'
import Error from '../Components/Error'
import  LoginPage from '../Components/LoginPage';
import {createBrowserHistory} from 'history'
import PrivateRoute from './PrivateRoute'
export const history =  createBrowserHistory()
 export default ()=>(
    <Router  history={history}>
      <div> 
        <Switch>
          <Route path="/" component={LoginPage} exact={true}/> 
          <PrivateRoute path="/dashboard" component={Expense} />
          <PrivateRoute path="/create" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <Route component={Error}/> 
        </Switch>
      </div>
    </Router>
  )