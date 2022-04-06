import React ,{useState} from 'react'
import './Admin.css'
import { v4 as uuidv4 } from "uuid";
import { Link ,useHistory} from 'react-router-dom'
import { storage,db,auth } from './Firebase';
function AddProducts() {
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
    
        const handleImage =(e)=>{
            if(e.target.files[0]){
                setImage(e.target.files[0])
              
              }
             console.log(image)
        }   
    
  return (
    <div className='ap_main'>
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
<textarea maxLength='250' name="" id="" cols="30" rows="10" value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
<div className="product_button">
  <button onClick={handleUpload}>
    
    Add Item
</button>
</div>


</form>
    </div>
  )
}

export default AddProducts