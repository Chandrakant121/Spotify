import { useState } from 'react'
import Navbar from "./Navbar"
import "./Style.css"
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        let logininfo = {
            email: email
        }
        const data = await response.json()
        if (data.user) {
            localStorage.setItem("logindetail", JSON.stringify(logininfo))
            alert('Login successful')
            navigate("/artists")
        } else {
            alert('Please check your username and password')
        }

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='login'>
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <div>
                        <input
                            className='inputdiv'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className='inputdiv'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <input className='inputdivbtn' type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login