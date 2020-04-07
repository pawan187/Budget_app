import React from 'react' ;
import {connect} from 'react-redux';
import { DateRangePicker , SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/lib/initialize'
import moment from 'moment';
import {setTextFilter , sortByAmount , sortByDate ,setStartDate , setEndDate}  from '../actions/filterActions'
class ExpenseFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focused : null,
            focused1 : null,
            endDate : this.props.filter.endDate,
            startDate : this.props.filter.startDate
        }
    }
    onDatesChange = (startDate)=>{
        this.props.dispatch(setStartDate(startDate))
        this.setState({startDate : startDate})
    }
    onFocusChange = ({focused})=>{
        this.setState({focused : focused})
    }
    onDateschange2 = (endDate)=>{
        this.setState ( {endDate : endDate})
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange2 = ({focused})=>{
        this.setState({focused1 : focused})
    }
    render(){
        return (
            <div className="container alert-light">
                <h3>Apply some filters on data</h3>
                    <div className="row">
                        <p className="col">Search by text : 
                        <input type="text" placeholder="search something" value={this.props.filter.text} onChange={(e)=>{
                            // console.log(e.target.value);
                            this.props.dispatch(setTextFilter(e.target.value))
                        }}></input>
                        </p>
                        
                    </div>
                    <div className="row">
                        <p className="col">sort by :
                        <select value={this.props.filter.sortBy} onChange={(e)=>{
                                if(e.target.value=='date'){
                                    this.props.dispatch(sortByDate())
                                }else{
                                    this.props.dispatch(sortByAmount())
                                }
                            }}>
                            <option value='amount'>amount</option>
                            <option value='date'>date</option>
                        </select>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col"> search between dates : </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            starts with :
                            <SingleDatePicker
                            date={this.state.startDate} // momentPropTypes.momentObj or null
                            onDateChange={this.onDatesChange} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                            numberOfMonths = {1}
                            isOutsideRange = {()=>{false}}
                            showClearDate = {true}
                            id="your_unique_id" // PropT
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            ends with :
                            <SingleDatePicker

                            date={this.state.endDate} // momentPropTypes.momentObj or null
                            onDateChange={this.onDateschange2} // PropTypes.func.isRequired
                            focused={this.state.focused1} // PropTypes.bool
                            onFocusChange={this.onFocusChange2} // PropTypes.func.isRequired
                            numberOfMonths = {1}
                            isOutsideRange = {()=>{false}}
                            showClearDate = {true}
                            id="your_d" // PropT
                            />
                        </div>
                    </div>
                </div>
             ) 
    }
}

const mapStateToProps = (state)=>{
    return { filter : state.filter }
}
export default connect(mapStateToProps)(ExpenseFilter) ;