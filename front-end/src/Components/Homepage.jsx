import React from 'react'
import "./Homepage.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import SingleCard from './SingleCard'

function Homepage() {
    const [allBlogs, SetAllBlogs] = useState()
    const getAllBlog = async () => {
        let response = await axios.get("http://localhost:5000/getBlog")
        console.log(response)
        if (response.data.sucess) {
            SetAllBlogs(response.data.allBlog)
        }
    }

    const navigate = useNavigate()

    async function blogbtn() {
        navigate("/blogadded")
    }
    useEffect(() => {
        getAllBlog()

    }, [])

    async function btnCate() {
        let response = await axios.get("http://localhost:5000/blog-by-category/sports")
        console.log(response);
    }


    return (
        <div className='main' >
            <header>
                <nav className="navbar">
                    <div className="container">
                        <h1 className='navbar-brand' >Art Design</h1>
                        <div className="navbar-nav">
                            <a href="">Home</a>
                            <a href="" onClick={btnCate} >Categoryes</a>
                            <a href="">Blog</a>
                            <a href="#" onClick={blogbtn}>Blog Adding </a>
                            <a href="">About</a>
                        </div>
                    </div>
                </nav>
                <div className="banner">
                    <div className="box-container">
                        <h1 className='banner-title' >
                            <span>Art.</span>Design Blog
                        </h1>
                        <p className='paragraph-lorem' >The public is more familiar with bad design than good design. <br />  It is, in effect, conditioned to prefer bad design, because that is what it lives with. <br /> The new becomes threatening, the old reassuring.</p>
                        <div id='btn-tag' >
                            <input type="text" placeholder='Search' id='srchs' />
                        </div>

                    </div>
                </div>
            </header>
            <section className='design' id='design' >
                <div className="container-head">
                    <div className="title">
                        <h2>Arts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat sapiente quibusdam, nostrum placeat aut exercitationem, odit minima inventore illo, veritatis quo quidem perferendis aliquid mollitia! Quis repellat exercitationem sit.</p>
                    </div>


                    <div className="design-content">
                        {
                            allBlogs && allBlogs.map((b) => {
                                return <SingleCard blogData={b} />
                            })
                        }


                    </div>
                </div>

            </section>
        </div>



    )
}

export default Homepage