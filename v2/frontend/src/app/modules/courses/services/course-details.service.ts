import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_API_URL
const CREATE_COURSE_DETAIL_URL = `${API_URL}/course-details`;
const UPDATE_COURSE_DETAILS_URL = `${API_URL}/course-details/updateCourseDetail`;
const GET_COURSE_DETAIL_URL = `${API_URL}/course-details/getCourseDetails`;
const GET_COURSE_DETAIL_BY_COURSE_ID_URL = `${API_URL}/course-details/getCourseDetailByCourseId`;

export const createCourseDetail = (obj:any) =>{
    return axios.post(CREATE_COURSE_DETAIL_URL, obj)
  }
export const getCourseDetails = () => {
  return axios.get(GET_COURSE_DETAIL_URL);
}
export const getCourseDetailByCourseId = (Id:string) => {
  return axios.get(`${GET_COURSE_DETAIL_BY_COURSE_ID_URL}/${Id}`);
}
export const updateCourseDetail = (id:string, data:any) => {
    return axios.put(`${UPDATE_COURSE_DETAILS_URL+'/'+id}`,data);
    }