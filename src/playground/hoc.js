import React from 'react'
import ReactDOM from 'react-dom';

const Info =(props)=>(
    <div>
    <h1> Info</h1>
    <p> {props.info}</p>
    </div>
)

// const WrappingComponent = (WrappedComponent)=>{
//     return(props)=>(
//         <div>
//         <p>it is a warning </p>
//         <WrappedComponent {...props}/>
//         </div>
//     )
// }
const Authentication = (WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>"please log in"</p>}
        </div>
    )
}

const AdminInfo = Authentication(Info)




ReactDOM.render(<AdminInfo isAuth = {false} info="welcom to page"/>, document.getElementById('app'))