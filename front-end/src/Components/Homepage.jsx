import React from 'react'
import "./Homepage.css"

function Homepage() {
    return (

        <div className='main' >
            <header>
                <nav className="navbar">
                    <div className="container">
                        <h1 className='navbar-brand' >Art Design</h1>
                        <div className="navbar-nav">
                            <a href="">Home</a>
                            <a href="">Design</a>
                            <a href="">Blog</a>
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
                    </div>
                </div>
                <div className="design-cnt">
                    <div className="design-item">
                        <img src="https://wallpaperaccess.com/full/352112.jpg" alt="" />
                    </div>
                    <div className="design-title">
                        <a href="">Make an awesome art</a>
                    </div>
                </div>

            </section>
            <section className='design' id='design' >
                <div className="container-head">
                    <div className="title">
                        <h2>Arts</h2>
                    </div>
                </div>
                <div className="design-cnt">
                    <div className="design-item">
                        <img src="https://wallpaperaccess.com/full/352112.jpg" alt="" />
                    </div>
                    <div className="design-title">
                        <a href="">Make an awesome art</a>
                    </div>
                </div>

            </section>
            <section className='design' id='design' >
                <div className="container-head">
                    <div className="title">
                        <h2>Arts</h2>
                    </div>
                </div>
                <div className="design-cnt">
                    <div className="design-item">
                        <img src="https://wallpaperaccess.com/full/352112.jpg" alt="" />
                    </div>
                    <div className="design-title">
                        <a href="">Make an awesome art</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Homepage