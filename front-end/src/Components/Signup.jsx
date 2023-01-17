import React from 'react'
import "./SignupPage.css"

function Signup() {
    return (
        <div className='cont' >
            <div className='form' >
                <h2>SIGN-IN</h2>
                <div className='inputs-labels' >
                    <label htmlFor="">
                        <span>Name</span>
                        <input type="text" name='name' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" name='email' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Phone Number</span>
                        <input type="number" name='number' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Password</span>
                        <input type="password" name='password' />
                    </label>
                </div>
                <button className='submit' type='button' >Sign In</button>
            </div>


        </div>

        // <div className='details-container' >
        //     <div className='signup-card' >
        //         <h1 className='title' >SIGNUP</h1>
        //         <div className='inputs' >
        //             < input type="text" className='first' placeholder='Enter Your Name' /> <br />
        //             < input type="password" className='second' placeholder='Enter Your Password' /> <br />
        //             <input type="email" className='third' placeholder='Enter Your Email' /> <br />
        //             <input type="number" className='last' placeholder='Enter Your Phone Number' /> <br />
        //         </div>
        //         <div className='btn-contanier' >
        //             <button className='btn' >Sign-Up</button>
        //         </div>
        //     </div>
        // </div>

    )
}

export default Signup