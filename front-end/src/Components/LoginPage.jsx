import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Loginpage.css"

function LoginPage() {
    const userEmailRef = useRef()
    const userPasswordRef = useRef()
    const navigate = useNavigate()


    async function loginBtn() {
        let obj = { email: userEmailRef.current.value, password: userPasswordRef.current.value }
        console.log(userEmailRef.current.value)
        console.log(userPasswordRef.current.value)
        let response = await axios.post("http://localhost:5000/userlogin", obj)
        console.log(response)
        if (response.data.sucess) {
            alert("Sucussfully added")
            navigate("/home")

        } else (
            alert("validation error")
        )
    }
    // alert("hai")

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
                        <input type="email" name='email' ref={userEmailRef} /> <br />
                    </label>
                    {/* <label htmlFor="">
                        <span>Phone Number</span>
                        <input type="number" name='number' /> <br />
                    </label> */}
                    <label htmlFor="">
                        <span>Password</span>
                        <input type="password" name='password' ref={userPasswordRef} />
                    </label>
                </div>
                <button className='submit' type='button' onClick={loginBtn} >Login</button>
            </div>


        </div>
    )
}

export default LoginPage