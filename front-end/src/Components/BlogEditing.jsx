import React from 'react'
import "./BlogEditing.css"

function BlogEditing() {
    return (
        <div>
            <div className="center">
                <div className="editing">
                    <h1>Edit Your Blog</h1>
                    <form id='frm1' >
                        <div className='txt' >
                            <input type="text" required className='input' />
                            <label >Title</label>
                        </div>
                        <div className="editing">
                            <input type="text" required className='input2' />
                            <label htmlFor="">Discription</label>
                        </div>
                        <div className="editing">
                            <input type="text" placeholder='Edit Your image' />
                            {/* <label htmlFor="">Image</label> */}
                        </div>
                        <div className="editing">
                            <input type="date" required className='input3' />
                        </div>
                        <div className="editing">
                            <select name="">
                                <option value="Arts">Arts</option>
                                <option value="Sports">Sports</option>
                                <option value="Tech">Tech</option>
                                <option value="Science">Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <button>SUBMIT</button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogEditing