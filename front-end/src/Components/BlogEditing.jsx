import React, { useRef } from 'react'
import "./BlogEditing.css"

function BlogEditing() {
    const userTitleRef = useRef()
    const userDiscriptionRef = useRef()
    const userDateRef = useRef()
    const userImageRef = useRef()


    async function btnedit() {
        let obj = { title: userTitleRef.current.value, discription: userDiscriptionRef.current.value, date: userDateRef.current.value, imageurl: userImageRef.current.value, categorey: categoreyRef.current.value }
        console.log(obj)
    }
    return (
        <div>
            <div className="center">
                <div className="editing">
                    <h1 className='head-title' >Edit Your Blog</h1>
                    <form id='frm1' >
                        <div className='txt' >
                            <label >Title</label>
                            <input type="text" ref={userTitleRef} required className='input' />
                        </div>
                        <div className="editing1">
                            <label htmlFor="">Discription</label>
                            <input type="text" ref={userDiscriptionRef} required className='input2' />
                            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                        </div>
                        <div className="editing2">
                            <label htmlFor="">Image</label>
                            <input type="text" ref={userImageRef} />
                        </div>
                        <div className="editing3">
                            <input type="date" ref={userDateRef} required className='input3' />
                            {/* <label htmlFor="">Date </label> */}

                        </div>
                        <div className="custom-select">

                            <select className='select-div' >
                                <option value="0">Categary</option>

                                <option value="Arts">Arts</option>
                                <option value="Sports">Sports</option>
                                <option value="Tech">Tech</option>
                                <option value="Science">Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <button className='btn-for-sub' onClick={btnedit} >SUBMIT</button>


                    </form>
                </div>
            </div>
        </div >
    )
}

export default BlogEditing