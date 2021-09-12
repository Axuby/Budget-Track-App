import uuid  from "uuid"

export  const startLogin = (loginDetails ={
    name:"",
    password:"",
    email:""
}) => ({
    type:"LOGIN_DETAILS",
    loginDetails: {
        id:uuid(),
        name,
        password,
        email
    }
})

export const logout = ()=>({
    type:"LOGOUT"
})