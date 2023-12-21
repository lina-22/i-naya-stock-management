import axios from "axios";

const SUPPLIER_ADD_API_URL = "http://localhost:8080/v1/api/suppliers/supplier";
const SUPPLIER_GETALL_API_URL = "http://localhost:8080/v1/api/suppliers";

const SUPPLIER_GETBYID_API_URL = "http://localhost:8080/v1/api/suppliers/supplier/1";

const SUPPLIER_UPDATE_API_URL = "";
const SUPPLIER_DELETE_API_URL = "http://localhost:8080/v1/api/suppliers/supplier/5";

export const getAllSupplier =()=>{
   return axios.get(SUPPLIER_GETALL_API_URL);
}

export const addSupplier=()=>{
    
};