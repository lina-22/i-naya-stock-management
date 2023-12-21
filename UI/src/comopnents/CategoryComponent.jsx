import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../service/CategoryService';
import Table from 'react-bootstrap/Table';

export default function CategoryComponent() {
const [categories, setCategories]=useState([]);
useEffect(()=>{
  getAllCategoryData();
},[])

const getAllCategoryData=async()=>{
    
    const res = await getAllCategory();
    console.log(res);
    setCategories(res.data)
    }
  

  return (
    <div>
        <div style={{backgroundColor: 'salmon'}}>
        
        <h1>CategoryComponentUI</h1>
        </div> 
        <Table striped bordered hover style={{backgroundColor: 'black', color:'white'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>                
        </tr>
      </thead>
      <tbody>     
        {categories.map((cat) => (
            <tr key={cat?.id}>
                 <td>{cat?.id}</td>
              <td>{cat?.name}</td>            
            </tr>
          ))}
      </tbody>
    </Table>
    
    </div> 
  )
}