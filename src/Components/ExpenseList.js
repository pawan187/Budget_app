import React from 'react'
import {connect } from 'react-redux';
import {Link } from 'react-router-dom'
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
                <div className="container">
                    <h1>Viewing {this.props.expenses.length} item of value : { this.totalValue(this.props.expenses) } rupees.</h1>
                </div>
                <ExpenseFilter />
                <div>    
                <div className="col">
                        <h2>Expense list <Link className="btn btn-primary" to='/create'>Add Expense</Link> </h2>   
                    </div>
                <ul className="list-group">
                {
                    this.props.expenses.map((element)=>{
                        return <ExpenseItem key={element.id} {...element} />
                    })
                }
                </ul>
                </div>
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