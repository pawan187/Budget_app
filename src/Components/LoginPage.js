import React from 'react';
import {connect } from 'react-redux'
import {startLogin} from '../actions/auth'
export const LoginPage = (props)=>(
    <div>
        <button onClick={props.startLogin}>Login</button>
    </div>
)
const mapDispatchtoProps = (dispatch)=>({
    startLogin : ()=> dispatch(startLogin())
})
export default connect(undefined , mapDispatchtoProps)(LoginPage);