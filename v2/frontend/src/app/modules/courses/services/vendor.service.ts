import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_API_URL
const ADD_VENDOR_URL = `${API_URL}/vendor`;
const GET_VENDOR_URL = `${API_URL}/vendor/getVendors`
const DELETE_VENDOR_URL = `${API_URL}/vendor/deleteVendor`

export const createVendor = (obj:any) =>{
    return axios.post(ADD_VENDOR_URL, obj)
  }
  export const allVendors = ()=> {
      return axios.get(GET_VENDOR_URL);
  }
  export const deleteVendor = (id:any) => {
      return axios.delete(DELETE_VENDOR_URL+'/'+id)
  }