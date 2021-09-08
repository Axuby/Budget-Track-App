import e from 'express'
import React from 'react'

function Login(props) {

function onClick(e) {
    e.preventDefault();
}




    return (
        <div>
            {props}
            <p>Login Page</p>
        <form>
            <button onClick={onClick}>Login</button>
        </form>

        </div>
    )
}

export default Login
