import React ,{useState} from 'react'
import './Admin.css'
import { v4 as uuidv4 } from "uuid";
import { Link ,useHistory} from 'react-router-dom'
import { storage,db,auth } from './Firebase';
import AddProducts from './AddProducts';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ManageOrders from './ManageOrders';
function Admin() {
    const history = useHistory()
    const [image,setImage]=useState(null)
    const [product,setProduct]=useState('')
    const [section,setSection]= useState('')
    const [price,setPrice]= useState('')
    const [url,setUrl]=useState('')
    const [desc,setDesc]= useState('')

    const handleUpload =(e)=>{
e.preventDefault()

const uploadTask= storage.ref(`adminProducts/${image.name}`).put(image)
uploadTask.on("state_changed",
  snapshot =>{},  
  error =>{
    console.log("e>",error)
  },
  ()=>{
    storage.ref("adminProducts").child(image.name).getDownloadURL().then(url=>{
      setUrl(url)
     
      auth.onAuthStateChanged((authUser)=>{
        const pid= uuidv4()
       db.collection(section).doc(pid).set({
         ProductID:pid,
         ProductName:product,
         Price:price,
         url:url,
         Section:section,
         desc:desc,
        
       })
       console.log("auth ",authUser)
     })
     setImage(null)
    
     setUrl('')
     
     history.push('/')
    })
  }
)
 




  



console.log("url",url)
    }
    const test =(e)=>{
        e.preventDefault()
        console.log('Selected',section)
    }
    const handleImage =(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
          
          }
         console.log(image)
    }   
  return (
    <div className='admin_main'>
      <div className="admin_nav">
        <div className="nav_items">
        <Link className='dec' to='/'> <h2>Home</h2></Link> 
        </div>
        <div className="nav_items">
        <Link className='dec' to='/admin/add-products'><h2>Add Products</h2></Link>   
        </div>
       <div className="nav_items">
       <Link className='dec' to='/admin/manage-orders'><h2>Manage Orders</h2></Link>   
       </div>
       
      </div>
        <div className="admin_form">
          <Switch>
            <Route path='/admin/add-products'>
              <div className="form">
                 <AddProducts />
              </div>
             
            </Route>
            <Route>
              <ManageOrders />
            </Route>
          </Switch>
          <div className="form">
            
         
          </div>
     

        </div>
        
    </div>
  )
}

export default Admin