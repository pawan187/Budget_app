import React from 'react'
import {NavLink} from 'react-router-dom'
import {startLogout} from '../actions/auth'
import { connect } from 'react-redux'
const Header = (props)=>(
    <header>
      <h1>Budget App</h1>
      <NavLink activeClassName="is-active" exact={true} to='/dashboard'>home</NavLink>
      <NavLink activeClassName="is-active" to='/create'>create</NavLink>
      <NavLink activeClassName="is-active" to='/help'>help</NavLink>
      <button onClick={props.startLogout}>Log out</button>
    </header>
  )

  const mapDispatchtoProps = (dispatch)=>({
    startLogout : ()=> dispatch(startLogout())
  })
  export default connect(undefined,mapDispatchtoProps)(Header);