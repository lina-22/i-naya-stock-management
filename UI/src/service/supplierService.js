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
