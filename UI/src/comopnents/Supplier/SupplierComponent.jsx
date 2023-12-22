import React, { useEffect, useState } from "react";
import { getAllSupplier } from "../../service/supplierService";
import { Link } from "react-router-dom";

export default function SupplierComponent() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getAllSupplierData();
  }, []);

  const getAllSupplierData = async () => {
    const res = await getAllSupplier();
    console.log(res.data);
    setSuppliers(res.data);
  };

  return (
    <div className="m-5">
      <h1 className="pt-1 pb-4">Fournisseur</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fournisseur</th>
            <th scope="col">Adress</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, id) => {
            return (
              <tr key={id}>
                <th>{id + 1} </th>
                <td>{supplier.name}</td>
                <td>{supplier.address}</td>
                <td>{supplier.email}</td>
                <td>{supplier.phone}</td>
                <td>
                  <Link to={`/supplier/id=${supplier.id}`}>
                    <button className="btn btn-primary m-1 p-1">
                      Modifier
                    </button>
                  </Link>
                  <button className="btn btn-danger p-1">Supprimer</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
