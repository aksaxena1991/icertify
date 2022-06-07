import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_API_URL
const CREATE_COURSE_URL = `${API_URL}/courses`;
const GET_COURSES_URL = `${API_URL}/courses/getCourses`;
const UPDATE_COURSE_URL = `${API_URL}/courses/updateCourse`;
const GET_COURSE_URL = `${API_URL}/courses/slug`;

export const createCourse = (obj:any) =>{
    return axios.post(CREATE_COURSE_URL, obj)
  }
export const getCourses = () => {
  return axios.get(GET_COURSES_URL);
}
export const getCourseBySlug = (slug:any) => {
  return axios.get(`${GET_COURSE_URL+'/'+slug}`);
}
export const updateCourse = (id:string, data:any) => {
return axios.put(`${UPDATE_COURSE_URL+'/'+id}`,data);
}