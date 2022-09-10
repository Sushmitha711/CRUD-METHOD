import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   
   const [users,setUsers]=useState([]);
   
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        setUsers(res.data);
       
       
      })
    }, []);
   
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        <div className='mt-5'>
            <h1>Home Page</h1>
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
                        <td>Batsman</td>
                        <td>25</td>
                        <td>
                            <Link to={`users/${data.id}`}className='btn btn-success'>View</Link> &nbsp;
                            <Link className='btn btn-primary'>Edit</Link> &nbsp;
                            <Link className='btn btn-danger'>Delete</Link> &nbsp;
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Home;
