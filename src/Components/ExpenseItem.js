import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
const ExpenseItem  = ({ createdAt, id , description , note, amount})=>(
    <div>
    <Link to={'/edit/' + id} ><h1>description : {description} </h1></Link> 
        <p>note : {note} </p> 
        <p>amount : {amount}</p>
        <p> CreatedAt : {createdAt}</p>
    </div>
)

console.log(moment(151534651211)._locale)
export default ExpenseItem;