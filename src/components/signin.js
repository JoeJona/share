import React from 'react'
import { Link } from 'react-router-dom'
import './signin.css'

export default function SignIn() {
    return (
        <div className="login">
            <span className="logintitle">LOGIN PAGE</span>
            <form className="formlogin">
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" />
                <button className="loginbtn">LOGIN</button>
            </form>
            <button className="regbtn"><Link className="link" to="/register">REGISTER</Link></button>
        </div>
    )
}