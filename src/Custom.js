import React,{useState} from 'react'
import './Custom.css'
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from './StateProvider';
import { storage,db,auth } from './Firebase'; 
import shirt from './images/shirt-temp.jpg' 
function Custom() {
    const [image,setImage]=useState(null)
    const [{user},dispatch] = useStateValue();
    const [url,setUrl]=useState('')
    const [productName,setProduct]=useState('')
    const [color,setColor]= useState('')
    const handleCustom =(e)=>{
e.preventDefault()
const uploadTask= storage.ref(`CustomOrders/${image.name}`).put(image)
uploadTask.on("state_changed",
  snapshot =>{},  
  error =>{
    console.log("e>",error)
  },
  ()=>{
    storage.ref("CustomOrders").child(image.name).getDownloadURL().then(url=>{
      setUrl(url)
     
      auth.onAuthStateChanged((authUser)=>{
        const pid= uuidv4()
       db.collection("CustomOrders").doc(pid).set({
         CustomID:pid,
         CustomerName: authUser.email,
         CustomerID: authUser.uid,
         imgurl:url,
         color: color,
         ProductName:productName,
        OrderStatus: "Pending Approval",
       })
       console.log("auth ",authUser)
     })
     setImage(null)
    
     setUrl('')
     setProduct('')
     
  alert("Custom Product Added")
    })
  }
)
    }
    const handleImage =(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
          
          }
         console.log(image)
    }   
  return (
    <div className='custom_main'>
        <h1>Custom Orders</h1>
        
          <form action=""><div className="custom_upload">
          <div className="custom_placeholderimg">
          {image == null ? <img src={shirt} alt="" />: <img src={URL.createObjectURL(image)} alt="" /> } 
          </div>
          <div className="custom_info">
            <div className="custom_inputs">
               <p>Product Name</p>
            <input type="text" value={productName} onChange={e=>setProduct(e.target.value)} /> <br />
            <p>Color</p>
            <input type="color" value={color} onChange={e=>setColor(e.target.value)}  />
            <br />
            <input type="file" name="" id="" onChange={handleImage} />
            </div>
           
            <br />
            <div className="custom_btn">
                 <button onClick={handleCustom}>Upload</button>
            </div>
         
          </div>
            
             </div>
        </form>
       
        
    </div>
  )
}

export default Custom