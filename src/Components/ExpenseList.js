import React from 'react'
import {connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectorExpense from '../selectors/expenses'
import ExpenseFilter from './ExpenseFilter'
const ExpenseList = (props)=>(
    <div>
    <ExpenseFilter />
    <h3>expense list</h3>
    <ul>
    {
        props.expenses.map((element)=>{
            return <ExpenseItem key={element.id} {...element} />
        })
    }
    </ul>
    </div>
)
const ConnectedComponene  = connect((state)=>(
    {
        expenses : selectorExpense(state.expense,state.filter),
   }
))(ExpenseList)
export default ConnectedComponene;