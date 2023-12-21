import React, { useEffect, useState } from 'react'
import { getAllUser } from '../service/UserService';
import Table from 'react-bootstrap/Table';

export default function UserComponent() {

    const [users, setUsers]=useState([]);
    
    useEffect(()=>{
      getAllUserData();
    },[])

    const getAllUserData = async() => {
       const res = await getAllUser();
       setUsers(res.data);
       console.log(res.data);
    }
   
  return (
    <div style={{}}>
        <h1>User-List For the E-commerce Site</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>       
        </tr>
      </thead>
      <tbody>
      
        {users.map((user) => (
            <tr key={user?.id}>
                 <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
      </tbody>
    </Table>

    </div>
  )
}
