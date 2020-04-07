import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {startAddExpense } from '../actions/expenseActions'
const AddExpense =  (props)=>(
    <div>
        <h3> Add expense</h3>
        <ExpenseForm 
        onSubmit = {  (expense)=>{
          props.dispatch(startAddExpense(expense))
          props.history.push('/dashboard')
        }}
        />
      </div>
  )
  export default connect()(AddExpense);