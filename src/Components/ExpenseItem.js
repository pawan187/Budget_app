import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
const ExpenseItem  = ({ createdAt, id , description , note, amount})=>(
    <div className="list-group-item card">
        <div className="card-header">
            <h4 >{description} </h4>
        </div> 
        <div className="card-header"> 
            <div className="row">
                <h5 className="col card-title">Amount : {amount/100}</h5>
                <Link className=" col btn btn-primary" to={'/edit/' + id} >edit</Link>
            </div>
            <p className="card-text">Note : {note} </p> 
            <p className="card-text"> CreatedAt : {moment(createdAt).format("DD MMM YYYY hh:mm a")}</p>
        </div>
    </div>
)
export default ExpenseItem;