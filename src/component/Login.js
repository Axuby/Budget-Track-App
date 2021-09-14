import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import '../styles/components/__login.scss'

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
                            Name
                            <input
                                type="text"
                                name="Username"
                                value="acolyte"
                                onChange={handleChange}
                            />
                            </label>
                            <label>
                            Email
                            <input
                                type="text"
                                name=""
                                value="email"
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                    g<button onClick={onClick}> Login</button>
                </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    startLogin: ()=> dispatch(startLogin())
}

const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
