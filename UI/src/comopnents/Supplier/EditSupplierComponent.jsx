import React, { useEffect, useState } from "react";
import { getSupplierById, updateSupplier } from "../../service/supplierService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSupplierComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState("");

  useEffect(() => {
    getSupplierData();
  }, []);

  const getSupplierData = async () => {
    const res = await getSupplierById(id);
    console.log(res.data);
    setSupplier(res.data);
  };

  const submit = (evt) => {
    evt.preventDefault();
    updateSupplier(supplier);
    navigate("/supplier");
  };
  const handleEdit = (evt) => {
    let updatedSupplier = { ...supplier };
    updatedSupplier[evt.target.name] = evt.target.value;
    setSupplier(updatedSupplier);
  };
  return (
    <div className="m-5">
      <h1 className="pt-1 pb-4">Modifier Fournisseur</h1>
      <form onSubmit={submit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Fournisseur</label>
            <input
              value={supplier.name}
              type="text"
              className="form-control"
              id="name"
              placeholder="Nom"
              name="name"
              onChange={handleEdit}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              value={supplier.email}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              name="email"
              onChange={handleEdit}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="address">Adress</label>
            <input
              value={supplier.address}
              type="text"
              className="form-control"
              id="address"
              placeholder="7 rue de paris, 75001, Paris, France"
              name="address"
              onChange={handleEdit}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone</label>
            <input
              value={supplier.phone}
              type="text"
              className="form-control"
              id="phone"
              placeholder="+3300124578"
              name="phone"
              onChange={handleEdit}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 p-1">
          Modifer
        </button>
      </form>
    </div>
  );
}
