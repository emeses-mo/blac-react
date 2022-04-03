import React,{useState} from 'react'
import './Checkout.css'
import { storage,db,auth } from './Firebase';
import { useHistory} from 'react-router-dom'
function Checkout() {
    const history = useHistory()
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [address,setAddress]= useState('')
    const [password,setPassword]= useState('')
    const createUser =(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then(auth=>{
            auth.user.updateProfile({
                displayName:name,
                
            })
            db.collection(email).doc("UserDetails").set({
                CustomerName:name,
                CustomerEmail:email,
                Address:address,

            })
            history.push('/place-order')
        }).catch(
            error=>alert(error.message)
        )
    }
  return (
    <div className='checkout_main'>
        <h2>Delivery Address</h2>
        <p>Complete your purchase by providing your address.  </p>
            <div className="delivery_form">
        <form action="">
            <div className="dl_fitem">
                <p>Name</p>
                <input type="text" placeholder='Name goes here' value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="dl_fitem">
                <p>Email</p>
                <input type="email" placeholder='Email goes here'  value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="dl_fitem">
                <p>Address</p>
                <textarea name="" id="" cols="30" rows="10" value={address} onChange={e=>setAddress(e.target.value)}></textarea>
            </div>
            <div className="dl_fitem">
                <p>Set a password</p>
                <input type="password" placeholder='Password goes here' value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div className="dl_next">
                  <button onClick={createUser}>Next</button>
            </div>
          
        </form>
        </div>

    </div>
  )
}

export default Checkout