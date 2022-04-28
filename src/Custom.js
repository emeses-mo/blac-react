import React,{useState} from 'react'
import './Custom.css'
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from './StateProvider';
import { storage,db,auth } from './Firebase';   
function Custom() {
    const [image,setImage]=useState(null)
    const [{user},dispatch] = useStateValue();
    const [url,setUrl]=useState('')
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
         
        
       })
       console.log("auth ",authUser)
     })
     setImage(null)
    
     setUrl('')
     
  alert("Product Added")
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
    <div>
        <h1>Custom Orders</h1>
        <form action="">
            <p>Title</p>
            <input type="text" />
            <input type="file" name="" id="" onChange={handleImage} />
            <button onClick={handleCustom}>Upload</button>
        </form>
    </div>
  )
}

export default Custom