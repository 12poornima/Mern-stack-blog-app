import React from 'react'
import "./SignupPage.css"

function Signup() {
    return (
        <div className='details-container' >
            <div className='signup-card' >
                <h1 className='title' >SIGNUP</h1>
                <div className='inputs' >
                    < input type="text" className='first' placeholder='Enter Your Name' /> <br />
                    < input type="password" className='second' placeholder='Enter Your Password' /> <br />
                    <input type="email" className='third' placeholder='Enter Your Email' /> <br />
                    <input type="number" className='last' placeholder='Enter Your Phone Number' /> <br />
                </div>
                <div className='btn-contanier' >
                    <button className='btn' >Sign-Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup