import React from 'react'
import {connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectorExpense from '../selectors/expenses'
import ExpenseFilter from './ExpenseFilter'

class ExpenseList  extends React.Component{
    totalValue = (expenses)=>{
        let sum = 0
        expenses.forEach(element => {
            sum = sum + element.amount
        });
        return sum/100
    }
    render(){
        return(
            <div>
            <h1>Viewing {this.props.expenses.length} item of value : { this.totalValue(this.props.expenses) }</h1>
            <ExpenseFilter />
            <h3>expense list</h3>
            <ul>
            {
                this.props.expenses.map((element)=>{
                    return <ExpenseItem key={element.id} {...element} />
                })
            }
            </ul>
            </div>
        )
    }
}
const ConnectedComponene  = connect((state)=>(
    {
        expenses : selectorExpense(state.expense,state.filter),
   }
))(ExpenseList)
export default ConnectedComponene;