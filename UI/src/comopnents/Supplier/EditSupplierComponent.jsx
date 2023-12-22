import React, { useEffect, useState } from "react";
import { getSupplierById } from "../../service/supplierService";
import { useParams } from "react-router-dom";

export default function EditSupplierComponent() {
  const { id } = useParams();
  const [supplier, setSupplier] = useState("");

  useEffect(() => {
    getSupplierData();
  }, []);

  const getSupplierData = async () => {
    const res = await getSupplierById(id);
    console.log(res.data);
    setSupplier(res.data);
  };

  return (
    <div className="m-5">
      <h1 className="pt-1 pb-4">Modifier Fournisseur</h1>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="name">Fournisseur</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nom"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="address">Adress</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="7 rue de paris, 75001, Paris, France"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+3300124578"
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
