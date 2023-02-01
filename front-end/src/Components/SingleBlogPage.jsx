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

                </div>

            </div>
        </div>
    )
}

export default SingleBlogPage