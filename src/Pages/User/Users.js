import React from 'react';
import {useEffect,useState} from "react"
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Users(){
    const [user,setUser]=useState([]);
   
   useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=>{
        setUser(res.data);
       
       
      })
    }, []);
   
   const {id}=useParams()
   
   
    return (
        <div className='container mt-5'>
            <div className='col-md-8'>
            <table className='table table-hover border-black'>
                <thead className='bg-secondary text-white'>
                    <th><h2>PLAYER DETAILS</h2></th>
                </thead>
                <tbody className='bg-primary text-white'>
          {user && (
           <>
           <tr> <td> <h4>id:{user.id}</h4>  </td></tr>
           <tr> <td> <h4>Name:{user.name}</h4></td></tr>
           <tr> <td><h4>Role:{user.email}</h4></td></tr>
           <tr> <td><h4>Age:{user.name}</h4></td></tr>
           </>
           
           
          )}
          </tbody>
          </table>
          </div>
        </div>
    );
}

export default Users;
