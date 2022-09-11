import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   
   const [users,setUsers]=useState([]);
  
   const loadUsers=()=>{
    axios.get("http://localhost:3003/user")
    .then((res)=>{
      setUsers(res.data.reverse());
    })
}
   useEffect(() => {
    loadUsers()
    }, []);

    function Delete(id){
        axios.delete(`http://localhost:3003/user/${id}`)
        .then(loadUsers());
    }
    
    const HandlerFilter=(value)=>{
      return (
        axios.get(`http://localhost:3003/user?email=${value}`)
        .then((res)=>{setUsers(res.data)})
      )
    }
   
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        <div className='mt-5'>
            <h1>HOME PAGE</h1><br/>
            <Link to={"/AddUsers"} className='btn btn-success'>ADD USERS</Link><br/>
            <table className='table table-hover mt-2'>
                <thead className='bg-info text-white'>
                    <tr>
                        <th>Sl.No</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>AGE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
              
                <tbody>
                    {users.map((data, index)=>(

                   
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                            <Link to={`users/${data.id}`}className='btn btn-success'>View</Link> &nbsp;
                            <Link to={`/Edit/${data.id}`} className='btn btn-primary'>Edit</Link> &nbsp;
                            <Link to={"#"} onClick={()=>Delete(data.id)} className='btn btn-danger'>Delete</Link> &nbsp;
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>
            <h2>Filter the Players:</h2>
            <button className='btn btn-info' onClick={()=>{HandlerFilter("Bowler")}} >Bowler</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-info' onClick={()=>{HandlerFilter("Batsman")}} >Batsman</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-info' onClick={()=>{HandlerFilter("All Rounder")}}>All Rounder</button>
            <Link to={"users"} className='btn btn-info' >All</Link>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Home;
