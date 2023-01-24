import React from 'react'
import { useRef } from 'react'
import "./SignupPage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const userNameRef = useRef()
    const userEmailRef = useRef()
    const userPhoneRef = useRef()
    const userPasswordRef = useRef()
    const navigate = useNavigate()

    async function clickButton() {
        let obj = { name: userNameRef.current.value, email: userEmailRef.current.value, phone: userPhoneRef.current.value, password: userPasswordRef.current.value }
        // alert("suecssfully added signup")
        console.log(userNameRef.current.value)
        console.log(userEmailRef.current.value)
        console.log(userPhoneRef.current.value)
        console.log(userPasswordRef.current.value)
        let response = await axios.post("http://localhost:5000/usersignup", obj)
        console.log(response)
        if (response.data.sucess) {
            alert("Sucussfully added")
            navigate("/login")

        } else (
            alert("validation error")
        )
    }
    return (
        <div className='cont' >
            <div className='form' >
                <h2>SIGN-IN</h2>
                <div className='inputs-labels' >
                    <label htmlFor="">
                        <span>Name</span>
                        <input type="text" ref={userNameRef} name='name' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" ref={userEmailRef} name='email' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Phone Number</span>
                        <input type="number" ref={(userPhoneRef)} name='number' /> <br />
                    </label>
                    <label htmlFor="">
                        <span>Password</span>
                        <input type="password" ref={userPasswordRef} name='password' />
                    </label>
                </div>
                <button className='submit' type='button' onClick={clickButton} >Sign In</button>
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