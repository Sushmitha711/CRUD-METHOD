import React from "react"
import {useParams,useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

function Edit(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const { id } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:3003/user/${id}`).then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      });
    }, []);
  
    const navigate = useNavigate();
  
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
  
    function Update(e) {
      e.preventDefault();
      axios.put(`http://localhost:3003/user/${id}`, data)
      .then(navigate("/"));
    }

    return(
        <div >
        <div className='container mt-5'>
           <div className='col-md-8'>
           <h1> Add user  </h1>
             <form>
               <div className='form-group'>
                 <input value={name}
                 onChange={(e)=>setName(e.target.value)}
                  type="text" placeholder="Enter Name" className='form-control'/>
               </div>
               <div className='form-group'>
                 <input
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}} 
                 type="text" placeholder="Enter Role" className='form-control'/>
               </div>
               <div className='form-group'>
                 <input value={phone}
                 onChange={(e)=>{setPhone(e.target.value)}} type="number" placeholder="Enter Age" className='form-control'/>
               </div>
               <div className='form-group'>
               <button type='submit' onClick={Update} className='btn btn-success'>Update</button>
               </div>
             </form>
           </div>
        </div>
        
       </div>
      
    )
}
export default Edit