import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../helpers/const'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const {data} = await axios(API)
        console.log(data);
        setUsers(data.results);
    };
useEffect(() => {
    getUsers()
}, []);
    getUsers();
  return (
    <div>
        <h1>Rick and Morty</h1>
        {users.map((elem) => (
            <Link className='link' to={`/users/${elem.id}`} key={elem.id}>
            <li>{elem.name}</li>
            </Link>
        ))}
    </div>
  )
}

export default Users
