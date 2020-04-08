import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {startAddExpense } from '../actions/expenseActions'
const AddExpense =  (props)=>(
    <div className="container">
        <h3> Add expense</h3>
        <ExpenseForm 
        onSubmit = {  (expense)=>{
          props.dispatch(startAddExpense({...expense , uid : props.uid}))
          props.history.push('/dashboard')
        }}
        />
      </div>
  )
  const mapStatetoProps = (state)=>({
    uid : state.auth.uid
  })
  export default connect(mapStatetoProps)(AddExpense);