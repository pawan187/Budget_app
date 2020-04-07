import {firebase , googleProvide } from '../firebase/firebase'
export const startLogin = ()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleProvide)
    }
}
export const startLogout = ()=>{
    return()=>{
        return firebase.auth().signOut()
    }
}

export const Login = (uid)=>({
    type : "LOGIN",
    uid
})
export const Logout= ()=>({
    type : "LOGOUT",
})