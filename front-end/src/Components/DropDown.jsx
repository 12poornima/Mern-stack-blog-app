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
                        <li><Link to="/category-blog/Arts" >Arts</Link></li>
                        <li><Link to="/category-blog/Tech" >Tech</Link></li>
                        <li><Link to="/category-blog/Sports" >Sports</Link></li>
                        <li><Link to="/category-blog/Others" >Others</Link></li>
                    </ul>
                </li>
            </ul  >
        </div>
    )
}

export default DropDown