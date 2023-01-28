import react from 'react'
import "./BlogAdd.css"
import axios from 'axios'

function BlogAddedPage() {



    async function addBlog() {
        let response = await axios.post("http://localhost:5000/blogadded")
        console.log(response)
        alert("Added Blog Sucussfully ")
    }
    return (
        <div className='container2' >
            <div className='contact-box' >
                <div className="left">
                    <div className="right">
                        <h2 className='head' >Blog Adding Page</h2>
                        <input type="text" className='field' placeholder='enter your blog title' name='title' />
                        <textarea className='field area' name='discription' placeholder='Enter your blog' ></textarea>
                        <input type="date" className='field ' name='date' placeholder='Created at' />
                        <button className='btn' onClick={addBlog} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAddedPage