import React from 'react'
import { Link } from 'react-router-dom'
import './signin.css'

export default function HomePage() {
    return (
        <div className="home">
            <div className="register">
            <span className="registertitle">File Share Page</span>
            <form className="formregister">
                <label>Select File</label>
                <input type="file" placeholder="Select File" />
                <label>Enter Reciver User Name</label>
                <input type="text" placeholder="Send To" />
                <button className="registerbtn">Send</button>
            </form>
            {/* <button className="logbtn"><Link className="link" to="/login">Send</Link></button> */}
        </div>
        </div>
    )
}