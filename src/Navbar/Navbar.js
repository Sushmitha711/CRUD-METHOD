import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-warning navbar-expand-lg'>
            <Link to="/"><h1 className='navbar-brand'>CRUD OPERATION</h1></Link>
            <ul className='ml-auto'>
              <Link to="Add-User" className='btn btn-success'>Add Users</Link>
            </ul> 
        </div>
    );
}

export default Navbar;
