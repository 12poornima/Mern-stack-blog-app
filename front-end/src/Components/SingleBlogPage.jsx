import React from 'react'
import { useLocation } from 'react-router-dom'
import "./SingleBlogpage.css"

function SingleBlogPage() {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>
            <div className="single-card">
                <div className="single-box">
                    <h1 className='title-head' >{location.state.title
                    }</h1>
                    <p className='para-lorem' >{location.state.discription
                    }</p>
                    <img src={location.state.imageurl} className='image' alt="" />
                    <div className='cat' >
                        categorey={location.state.categorey
                        }
                    </div>
                    <div className='cmnt-lists' >
                        <div className='cmnt-cardz' >
                            <h1 className='addyour' >Add Your Comments</h1>
                            <input type="text" placeholder='Name' className='cmntname' />
                            <textarea name="" placeholder='Enter Your Comments' className='textarea' id="" cols="30" rows="10"></textarea>
                            <button className='cmnt-btn' >Submit</button>
                        </div>
                    </div>
                    <div className="viewcmnt">
                        <div className="cmnt_read">
                            <h3 className='user-name'>Poornima</h3>
                            <p className='cmnt-para' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam, ratione saepe commodi laudantium nam quae reiciendis impedit eius optio consequuntur aperiam cum excepturi fugit pariatur voluptates incidunt provident blanditiis?</p>
                            <button className='view-cmnt' >View New Comments</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SingleBlogPage