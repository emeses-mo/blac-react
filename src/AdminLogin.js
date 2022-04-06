import React,{useState} from 'react'
import { auth } from "./Firebase";
import './UserLogin.css'
import {Link, useHistory} from 'react-router-dom'
function AdminLogin() {
    const history = useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleAuth =(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
              history.push('/admin')
        }
          
        ).catch(
            error=> alert(error.message)
        )
        console.log("email",email)
    }
  return (
    <div className='userlogin_main'>
<div className="login_wrapper">
    <div className="login_box">
        <form action="">
            <h2>Email</h2>
            <input type="email" placeholder='Email goes here' value={email} onChange={e=>setEmail(e.target.value)} />
            <h2>Password</h2>
            <input type="password"  placeholder='Password goes here' value={password} onChange={e=>setPassword(e.target.value)}/>
            <div className="loginButton">
                 <button type='submit' onClick={handleAuth}>Login</button>
            </div>
           <h4>Not registered? <span className='change'> <Link className='no-dec' to='/user-register'>Register here</Link> </span> </h4>

        </form>
    </div>
</div>
    </div>
  )
}

export default AdminLogin