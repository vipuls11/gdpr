import React from 'react'
import './Minimenu.css'
const Minimenu = (props) => {
    return (
        <div className="menu_Dashboard">
            <ul className='ul_dashboard'>
                <li className='li_lists'>
                    <p className='content'>{props.dashboard}</p>
                    <img src={props.icon} alt="" className="" />
                </li>
            </ul>
        </div>
    )
}

export default Minimenu