import React from 'react'
import {connect} from 'react-redux'
import {editExpense , startEditExpense ,startRemoveExpense } from '../actions/expenseActions'
import ExpenseForm from './ExpenseForm'
const EditExpense = (props)=>{
    return ( 
    <div>
        <ExpenseForm 
        expense = {props.expense}
        onSubmit = {(expense)=>{
            props.dispatch(startEditExpense({id : props.match.params.id , update : expense }))
            props.history.push('/')
        }}
        />
        <button onClick={(e)=>{
            props.dispatch(startRemoveExpense({id : props.match.params.id}))
            props.history.push('/')
        }}>remove</button>
    </div>)
}
const mapStatetoProps = (state,props)=>{
    return {
        expense : state.expense.find((expense)=>{
            return expense.id === props.match.params.id ? true : false
        })
    }
}
export default connect(mapStatetoProps)(EditExpense)