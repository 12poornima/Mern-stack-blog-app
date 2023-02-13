import React from 'react'

function CateSingleCard({ blogCate }) {
    return (
        <div>
            <div className="cont-cate">
                <div className="cate-card">
                    <h1 className='cate-head' >{blogCate.title}</h1>
                    <p>{blogCate.discription}</p>
                    <img src={blogCate.imageurl} className='img-sprts' alt="" />

                </div>
            </div>
        </div>
    )
}

export default CateSingleCard