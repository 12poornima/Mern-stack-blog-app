import React from 'react'
import "./Loginpage.css"

function LoginPage() {
    return (
        <div className='cont' >
            <div className='form' >
                <h2>LOGIN</h2>
                <div className='inputs-labels' >
                    {/* <label htmlFor="">
                        <span>Name</span>
                        <input type="text" name='name' /> <br />
                    </label> */}
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" name='email' /> <br />
                    </label>
                    {/* <label htmlFor="">
                        <span>Phone Number</span>
                        <input type="number" name='number' /> <br />
                    </label> */}
                    <label htmlFor="">
                        <span>Password</span>
                        <input type="password" name='password' />
                    </label>
                </div>
                <button className='submit' type='button' >Login</button>
            </div>


        </div>
    )
}

export default LoginPage