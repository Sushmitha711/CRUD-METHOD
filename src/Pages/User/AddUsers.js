import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddUsers(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const navigate=useNavigate();
  
 
  const data={
    name:name,
    email:email,
    phone:phone,
  };

  function Submit(e){
    e.preventDefault();
   axios.post("http://localhost:3003/user",data)
  .then(navigate("/"))

}
   
  return (
        <div>
        
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
                <button type='submit' onClick={Submit} className='btn btn-success'>Add Users</button>
                </div>
              </form>
            </div>
         </div>
         
        </div>
    );
}

export default AddUsers;
