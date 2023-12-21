import axios from "axios";

const API_URL="http://localhost:8080/v1/api/categories";
//const API_URL=
//Key: process.env.React_App_Category_Api

export const getAllCategory=()=>{
    return axios.get(API_URL);
}