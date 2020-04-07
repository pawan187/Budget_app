import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
// const now = moment();
// console.log(now.format("MMM Do, YYYY"))
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description :props.expense ? props.expense.description :'',
            note : props.expense ? props.expense.note:'',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            focused : false,
            error : ''
        } 
    }
    onDescriptionChange = (e)=>{
        const description = e.target.value
        this.setState({description : description})
    }
    onNoteChange =(e)=>{
        const note = e.target.value
        this.setState ({note : note})
    }
    onAmountChange = (e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({amount : amount})
        }
    }
    onDatechange = (createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt :createdAt}))
        }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({focused : focused}))
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.description ==='' || !this.state.amount){
            this.setState({error : "please enter description and amount"})
        }else{
            this.setState({error : ''})
            this.props.onSubmit({
                description : this.state.description,
                note : this.state.note,
                amount : parseFloat(this.state.amount,10)*100,
                createdAt : this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return ( 
            <div className="container">
            {this.state.error && <p>{this.state.error}</p> }
            <form  onSubmit = {this.onSubmit}>
             <div className="form-group">
             <label htmlFor="description" >description </label>
             <input  id="description" className="form-control" type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder = "please enter" autoFocus />
             </div>
             <div className="form-group">
             <label htmlFor="amount" >amount </label>
                <input id="amount" className="form-control" type='text' value={this.state.amount} onChange={this.onAmountChange} placeholder = 'amount' />             
             </div>
             <div className="form-group">
             <label htmlFor="note" >note</label>
                <textarea id="note" className="form-control" type='text' value={this.state.note} onChange={this.onNoteChange} placeholder = 'add a note' />
             </div>
             <div className="form-group">
                Pick a date   : 
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDatechange} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths = {1}
                    isOutsideRange = {()=>{false}}
                    id="your_unique_id" // PropTypes.string.isRequired,
                />
            </div>
             <button className="form-control btn-primary" onClick={this.handClick}>add</button>
            </form>
            </div>
        )
    }
}
