import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export const PrivateRoute = ({
    isAutheticated , 
    component:Component , 
    ...rest}
    )=>(
        <Route {...rest} component={(props)=>(
            isAutheticated ?
            (
                <div>
                    <Header />
                    <Component {...props}/>
                    <Footer/>
                </div>
            ):
            (<Redirect to="/" />)
        )}/>
    )
const mapStatetoProps = (state)=>({
    isAutheticated : !!state.auth.uid
})
export default connect(mapStatetoProps)(PrivateRoute)
