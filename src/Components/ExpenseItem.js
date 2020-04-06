import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
const ExpenseItem  = ({ createdAt, id , description , note, amount})=>(
    <div>
    <Link to={'/edit/' + id} ><h1>description : {description} </h1></Link> 
        <p>note : {note} </p> 
        <p>amount : {amount/100}</p>
        <p> CreatedAt : {createdAt}</p>
    </div>
)
export default ExpenseItem;