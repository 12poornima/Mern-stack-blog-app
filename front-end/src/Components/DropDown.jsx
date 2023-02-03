import React from 'react'
import "./DropDown.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function DropDown() {
    return (
        <div>
            <ul className='gory'>
                <li className='cateeee' > <a href=""  >Category</a> <ArrowDropDownIcon />
                    <ul className='drop' >
                        <li><Link to="/category-blog" >Arts</Link></li>
                        <li><a href="">Tech</a></li>
                        <li><a href="">Science</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Others</a></li>
                    </ul>
                </li>
            </ul  >
        </div>
    )
}

export default DropDown