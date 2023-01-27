import react from 'react'
import "./BlogAdd.css"

function BlogAddedPage() {
    return (
        <div className='container2' >
            <div className='contact-box' >
                <div className="left">
                    <div className="right">
                        <h2 className='head' >Blog Adding Page</h2>
                        <input type="text" className='field' placeholder='enter your blog title' />
                        <textarea className='field area' placeholder='Enter your blog' ></textarea>
                        <input type="date" className='field ' placeholder='Created at' />
                        <button className='btn' >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAddedPage