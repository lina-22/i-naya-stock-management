import httpService from "./httpService";

const { REACT_APP_SERVER_URL } = process.env;
const API_EXT = "/suppliers";

export const addSupplier = (supplier) => {
  return httpService.post(
    REACT_APP_SERVER_URL + API_EXT + "/supplier",
    supplier
  );
};
export const getAllSupplier = () => {
  return httpService.get(REACT_APP_SERVER_URL + API_EXT);
};
export const getSupplierById = (id) => {
  return httpService.get(REACT_APP_SERVER_URL + API_EXT + `/supplier/${id}`);
};

export const updateSupplier = (supplier) => {
  return httpService.put(
    REACT_APP_SERVER_URL + API_EXT + `/supplier`,
    supplier
  );
};
export const deleteSupplier = (id) => {
  return httpService.delete(REACT_APP_SERVER_URL + API_EXT + `/supplier/${id}`);
};
