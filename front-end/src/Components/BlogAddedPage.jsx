import react from 'react'
import "./BlogAdd.css"
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



function BlogAddedPage() {
    const userTitleRef = useRef()
    const userDiscriptionRef = useRef()
    const userDateRef = useRef()
    const userImageRef = useRef()

    const categoreyRef = useRef()

    const navigate = useNavigate()



    async function addBlog() {
        let obj = { title: userTitleRef.current.value, discription: userDiscriptionRef.current.value, date: userDateRef.current.value, imageurl: userImageRef.current.value, categorey: categoreyRef.current.value }
        console.log(obj)


        console.log(userTitleRef.current.value)
        console.log(userDiscriptionRef.current.value)
        console.log(userDateRef.current.value)
        console.log(userImageRef.current.value);


        let response = await axios.post("http://localhost:5000/blogadded", obj)
        console.log(response)
        if (response.data.sucess) {
            alert("Added Blog Sucussfully ")
            navigate("/home")
        } else {
            alert("validation error")
        }
    }
    return (
        <div className='blog-container2' >
            <div className='contact-box' >
                <div className="left">
                    <div className="right">
                        <h2 className='head' >Blog Adding Page</h2>
                        <input type="text" ref={userTitleRef} className='field' placeholder='enter your blog title' name='title' />
                        <textarea className='field area' ref={userDiscriptionRef} name='discription' placeholder='Enter your blog' ></textarea>
                        <input type="date" ref={userDateRef} className='field ' name='date' placeholder='Created at' />
                        <input type="text" ref={userImageRef} className='field' name='imageurl' placeholder='image' />
                        <select name="" ref={categoreyRef} id="">
                            <option value="Arts">Arts</option>
                            <option value="Sports">Sports</option>
                            <option value="Tech">Tech</option>
                            <option value="Science">Science</option>
                            <option value="Others">Others</option>
                        </select>
                        <button className='btn' onClick={addBlog} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAddedPage