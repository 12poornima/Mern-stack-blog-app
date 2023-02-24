import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import "./SingleBlogpage.css"
import { useNavigate } from 'react-router-dom'
import CmntOneCard from './cmntOneCard';


function SingleBlogPage() {
    const [cmntBlog, setCmntBlog] = useState([])
    const navigate = useNavigate()

    const location = useLocation()
    console.log(location.state);


    const userNameRef = useRef()
    const comntTextRef = useRef()

    async function BlogBtnSubmit() {
        let obj = { userName: userNameRef.current.value, comntText: comntTextRef.current.value }
        console.log(obj)
        let response = await axios.post(`http://localhost:5000/addcmnt/${location.state._id}`, obj)
        console.log(response)
        if (response.data.sucess) {
            userNameRef.current.value = ""
            comntTextRef.current.value = ""
            alert("Comment Added Sucussfully ")
        } else {
            alert("validation error")
        }
    }
    async function editBlog() {
        navigate("/editblog", { state: location.state })
    }

    async function cmntPage() {
        let response = await axios.get(`http://localhost:5000/cmnt-blog/${location.state._id}`)
        console.log(response)
        if (response.data.sucess) {
            setCmntBlog(response.data.allCmnts)
        }
    }
    useEffect(() => {
        cmntPage()
    }, [])
    return (
        <div>
            <div className="single-card">
                <div className="single-box">
                    <h1 className='title-head' >{location.state.title
                    }</h1>
                    <p className='para-lorem' >{location.state.discription
                    }</p>
                    <im
                        g src={location.state.imageurl} className='image' alt="" />
                    <div className='cat' >
                        categorey={location.state.categorey
                        }
                    </div>
                    <button className='editBlog' onClick={editBlog} >Edit Your Blog</button>
                    <div className='cmnt-lists' >
                        <div className='cmnt-cardz' >
                            <h1 className='addyour' >Add Your Comments</h1>
                            <input type="text" ref={userNameRef} placeholder='Name' className='cmntname' />
                            <textarea name="" ref={comntTextRef} placeholder='Enter Your Comments' className='textarea' id="" cols="30" rows="10"></textarea>
                            <button className='cmnt-btn' onClick={BlogBtnSubmit} >Submit</button>
                        </div>
                    </div>

                    {
                        cmntBlog && cmntBlog.map((a) => {
                            return <CmntOneCard blogCmntss={a} />
                        })
                    }


                </div>

            </div>
        </div>
    )
}

export default SingleBlogPage