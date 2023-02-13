import React, { useEffect, useState } from 'react'
import "./CateBlog.css"
import CateSingleCard from './CateSingleCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CategoryBlog() {
    const [cateBlog, SetCateBlog] = useState()
    const { categorey } = useParams()
    console.log(categorey)




    async function cateeBlogs() {
        let response = await axios.get(`http://localhost:5000/blog-by-category/${categorey}`)
        console.log(response)
        if (response.data.sucess) {
            SetCateBlog(response.data.allBlog)
        }

    }
    useEffect(() => {
        cateeBlogs()
    }, [])

    return (
        <div className='hero' >
            <nav>
                <h2 className='logo' >Cate <span>Garys</span> </h2>
                <ul className='sprts' >
                    <li><a href="">Sports</a></li>
                    <li><a href="">Arts</a></li>
                    <li><a href="">Tech</a></li>
                    <li><a href="">Others</a></li>
                </ul>
            </nav>
            <div className='card-lists' >
                {
                    cateBlog && cateBlog.map((a) => {
                        return <CateSingleCard blogCate={a} />
                    })
                }
            </div>

        </div>
    )
}


export default CategoryBlog