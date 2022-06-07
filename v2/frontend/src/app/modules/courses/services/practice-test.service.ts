import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_API_URL
const CREATE_PRACTICE_TEST_URL = `${API_URL}/practice-test`;
const GET_PRACTICE_TEST = `${API_URL}/practice-test`
const UPDATE_PRACTICE_TEST = `${API_URL}/practice-test/updatePracticeTest`
const GET_ALL_PRACTICE_TEST_URL = `${API_URL}/practice-test/getPracticeTest`;
const GET_ALL_PRACTICE_TEST_BY_COURSE_ID_URL = `${API_URL}/practice-test/getPracticeTestByCourseId`;
const DELETE_PRACTICE_TEST_URL = `${API_URL}/practice-test/deletePracticeTest`;
export const createPracticeTest = (obj:any) =>{
    return axios.post(CREATE_PRACTICE_TEST_URL, obj)
  }
  export const getAllPracticeTests = () => {
    return axios.get(`${GET_ALL_PRACTICE_TEST_URL}`);
  }
  export const getAllPracticeTestsByCourseId = (id:string) => {
    return axios.get(`${GET_ALL_PRACTICE_TEST_BY_COURSE_ID_URL}/${id}`);
  }
  export const getPracticeTestById = (id:string) => {
    return axios.get(`${GET_PRACTICE_TEST}/${id}`)
  }
  export const updatePracticetest = (id:string,body:object) => {
    return axios.put(`${UPDATE_PRACTICE_TEST}/${id}`,body)
  }
  export const deletePracticeTestById = (id:string) => {
    return axios.delete(`${DELETE_PRACTICE_TEST_URL}/${id}`)
  }
