import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

export default function SignUp() {
    return (
        <div className="register">
            <span className="registertitle">REGISTER PAGE</span>
            <form className="formregister">
                <label>User Name</label>
                <input type="text" placeholder="Enter Your User Name" />
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" />
                <button className="registerbtn">REGISTER</button>
            </form>
            <button className="logbtn"><Link className="link" to="/login">LOGIN</Link></button>
        </div>
    )
}