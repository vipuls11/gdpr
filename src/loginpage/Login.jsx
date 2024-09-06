import React from 'react'
import './Login.css'
const Login = () => {
    const image = "Assets/GDPR-Logo.png"
    return (
        <div className='main_container'>
            <div className="container">
                <div className="image">
                    <img src={image} alt="" className="image_logo" />
                </div>
                <form>
                    <div className="form-group">
                        <label>User Id</label>
                        <input type="text" id="user-id" name="" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" name="" placeholder="" />
                    </div>
                    <button type="button">LOGIN</button>
                    <div className='forget_password'><a href="#">Forgot Password</a></div>
                </form>
            </div>
        </div>
    )
}

export default Login