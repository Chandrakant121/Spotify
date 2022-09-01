import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const logout = () => {
        localStorage.clear("logindetail");
    }
    return (
        <div>
            <div className='homepage'>
                <Link className='text' to="/artists">Artists</Link>
                <Link className='text' to="/addartist">Add artist</Link>
                <Link className='text' to="/songs">Songs</Link>
                <Link className='text' to="/addsong">Add song</Link>
                <Link className='text' onClick={logout} to="/login">{datastore ? "Logout" : "Login"}</Link>
                <Link className='text' to="/register">{datastore ? "" : "Register"}</Link>
            </div>
        </div>
    )
}

export default Navbar