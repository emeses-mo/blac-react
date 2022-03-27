import React ,{useState} from 'react'
import './Admin.css'
import { Link ,useHistory} from 'react-router-dom'
import { storage,db,auth } from './Firebase';
function Admin() {
    const history = useHistory()
    const [image,setImage]=useState(null)
    const [product,setProduct]=useState('')
    const [section,setSection]= useState('')
    const [price,setPrice]= useState('')
    const [url,setUrl]=useState('')
    const handleUpload =(e)=>{
e.preventDefault()

const uploadTask= storage.ref(`adminProducts/${section}/${image.name}`).put(image)
uploadTask.on("state_changed",
  snapshot =>{},  
  error =>{
    console.log("e>",error)
  },
  ()=>{
    storage.ref("adminProducts").child(image.name).getDownloadURL().then(url=>{
      setUrl(url)
     
      auth.onAuthStateChanged((authUser)=>{

       db.collection(section).doc().set({
         
         ProductName:product,
         Price:price,
         url:url,
         Section:section,
        
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
          <h2>Home</h2>
        </div>
        <div className="nav_items">
           <h2>Add Products</h2>
        </div>
       <div className="nav_items">
          <h2>Manage Sellers</h2>
       </div>
       
      </div>
        <div className="admin_form">
          <div className="form">
          <form action="">

<label htmlFor="">Product Name</label> <br />
<input type="text" value={product} onChange={e=>setProduct(e.target.value)}/> <br />
<label htmlFor="">Price</label>
<input type="number" value={price} onChange={e=>setPrice(e.target.value)}/>
<label htmlFor="">Section</label> <br />
<select name="" id=""  value={section} onChange={e=>setSection(e.target.value)}>
    <option value="" disabled selected>Select Section</option>
    <option value="Mens">Mens</option>
    <option value="Womens">Womens</option>
    <option value="Kids">Kids</option>
</select>
<br />
<label htmlFor="">Image</label>
<input type="file" accept="image/png, image/jpeg"   onChange={handleImage} />
<br />
<div className="product_button">
  <button onClick={handleUpload}>
    
    Add Item
</button>
</div>


</form>
          </div>
     

        </div>
        
    </div>
  )
}

export default Admin