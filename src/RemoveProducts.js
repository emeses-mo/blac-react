import React,{useState} from 'react'
import { storage,db,auth } from './Firebase';
import './RemoveProducts.css'
import shirt from './images/shirt-temp.jpg' 
function RemoveProducts() {
    const [section,setSection]= useState('')
    const [pname,setPname]=useState('')
    const [dp,setDelp]=useState([])
    const del =()=>{

       db.collection(section).where('ProductName',"==",pname).onSnapshot((qs)=>{
           const p=[]
           qs.forEach((doc)=>{
               p.push(doc.data())
           })
           setDelp(p)
       })
    }
    const remv =(id)=>{
        db.collection(section).doc(id).delete()
        alert("Product Removed")
    }
    console.log("Rmv",dp)
  return (
    <div className='rmv_main'>
        <div className="rmv_search">
           
            <label htmlFor="">Product Name</label>
                <input type="text" value={pname} onChange={e=>setPname(e.target.value)}/>
                <label htmlFor="">Section</label>
                <select name="" id=""  value={section} onChange={e=>setSection(e.target.value)}>
    <option value="" disabled selected>Select Section</option>
    <option value="Mens">Mens</option>
    <option value="Womens">Womens</option>
    <option value="Kids">Kids</option>
</select>
    <button onClick={del}>Search</button>
        
        </div>
        <div className="rmv_del">
            {
                dp.map((prd)=>(
                    <div className="dp_disp" id={prd.ProductID}>
                             {dp.length == 0 ? <img src={shirt} alt="" /> : <img src={prd.url} alt="" /> }
                             <button onClick={()=>remv(prd.ProductID)}>Remove Product</button>
                    </div>
                ))
            }
          
        </div>
        
    </div>
  )
}

export default RemoveProducts