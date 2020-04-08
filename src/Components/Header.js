import React from 'react'
import {NavLink} from 'react-router-dom'
import {startLogout} from '../actions/auth'
import { connect } from 'react-redux'
const Header = (props)=>(
    <div className="navbar navbar-light bg-primary">
      <NavLink  className="navbar-brand text-light"  to='/dashboard'><h1> Budget App </h1></NavLink>
      <button className="btn btn-primary" onClick={props.startLogout}>Log out</button>
    </div>
   )

  const mapDispatchtoProps = (dispatch)=>({
    startLogout : ()=> dispatch(startLogout())
  })
  export default connect(undefined,mapDispatchtoProps)(Header);