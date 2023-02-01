import React from 'react'
import { useNavigate } from 'react-router-dom'

function SingleCard({ blogData }) {
    const navigate = useNavigate()


    async function cardBlog() {
        navigate("/singleblogpage", { state: blogData })

    }

    return (
        <div className="design-item" onClick={cardBlog}>
            <div className="design-img">
                <img src="https://wallpaperaccess.com/full/352112.jpg" className='image1' alt="" />
                <span className='like-btn' >like22</span>
            </div>
            <div className="design-title">
                <a href="#">{blogData.title}</a>
            </div>
        </div>
    )
}

export default SingleCard