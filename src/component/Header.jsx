import React from 'react'
import './Header.css'
const Header = () => {
    const image = "Assets/GDPR-Logo.png"
    const user = "Assets/user.svg"
    const text = "Welcome Jon Doe"
    return (
        <div className='main_header'>
            <div className="header_logo">
                <img src={image} alt="" className="" />
            </div>
            <div className="User_logo">
                <p>{text}</p>
                <img src={user} alt="" />
            </div>
        </div>
    )
}

export default Header