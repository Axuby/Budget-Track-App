import uuid  from "uuid"

export  const signup = (signupDetails = {
    name:"",
    password:"",
    email:""
}) => ({
    type:"SIGN_UP",
    signupDetails: {
        id:uuid(),
        password,
        name,
        email
    }
})

export const signin = (signinDetails) => ({
    type:"SIGN_IN",
    signinDetails:{
        name,
        password
    }
})

export const logout = ({id})=>({
    type:"LOGOUT",
    id
})