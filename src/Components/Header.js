import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = ()=>(
    <header>
      <h1>Budget</h1>
      <NavLink activeClassName="is-active" exact={true} to='/'>home</NavLink>
      <NavLink activeClassName="is-active" to='/create'>create</NavLink>
      <NavLink activeClassName="is-active" to='/help'>help</NavLink>
    </header>
  )
  export default Header;