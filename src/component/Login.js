import e from 'express'
import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/login';

function Login({startLogin}) {

    function onClick(e) {

        
            e.preventDefault();
      }

      const handleChange = (e)=> {
        const value = e.target.value

      }
    return (
        <div>
            <p>Login Page</p>
                <form onSubmit={startLogin} className="login-form">
                    <div>
                     <label>
                            Acolyte
                            <input
                                type="text"
                                name="level"
                                value="acolyte"
                                onChange={handleChange}
                            />
                            </label>
                            <label>
                            Master
                            <input
                                type="text"
                                name="level"
                                value="master"
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                    <button onClick={onClick}> Login</button>
                </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    startLogin: ()=> dispatch(startLogin())
}
export default connect(undefined,mapDispatchToProps)(Login)
