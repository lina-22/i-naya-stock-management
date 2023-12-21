import React, { useEffect, useState } from "react";
import { getAllSupplier } from "../../service/SupplierService";
import { Table, Form, Button } from "react-bootstrap";

export default function SupplierComponent() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getAllSupplierData();
  }, []);

  const getAllSupplierData = async () => {
    const res = await getAllSupplier();
    console.log(res);

    setSuppliers(res.data);
  };

  return (
    <div>
      <h1>SupplierComponent</h1>

      <div>
        <h2>Form For Add Supplier</h2>
        <Form>
          <input  placeholder="name" type="text"></input>
          <input  placeholder="address" type="text"></input>
          {/* <input onChange={(e)=>handle(e)} placeholder="email" type="text"></input> */}
          {/* <input placeholder="phone number" type="text"></input> */}
        </Form>
        <Button variant="info">Info</Button>{' '}
      </div>
      
      
      <div  style={{ textAlign: "center" }}>
        <h3>Show Supplier</h3>
        <Table
        
          style={{ backgroundColor: "black", color: "white" }}
        >
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier?.id}>
                <td>{supplier?.id}</td>
                <td>{supplier?.name}</td>
                <td>{supplier?.address}</td>
                <td>{supplier?.email}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
