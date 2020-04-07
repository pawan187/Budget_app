import React from 'react';
import {connect } from 'react-redux'
import {startLogin} from '../actions/auth'
import Popup from "reactjs-popup";
export const LoginPage = (props)=>(
        <div className="to-center">
            <h3>We use google login :</h3>
            <button className="btn btn-primary" onClick={props.startLogin}>Login</button>
        </div>
)
const mapDispatchtoProps = (dispatch)=>({
    startLogin : ()=> dispatch(startLogin())
})
export default connect(undefined , mapDispatchtoProps)(LoginPage);