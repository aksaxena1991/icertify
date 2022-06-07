import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_API_URL
const CREATE_QUESTION_URL = `${API_URL}/question-bank`;
const DELETE_QUESTIONS_URL = `${API_URL}/question-bank/deleteQuestion`;
const GET_QUESTIONS_URL = `${API_URL}/question-bank/allQuestionsByPracticeTestId`;
const UPDATE_QUESTION_URL = `${API_URL}/question-bank/updateQuestion`;
const GET_QUESTION_BY_QUESTION_ID_URL = `${API_URL}/question-bank`;

export const createQuestion = (obj:any) =>{
    return axios.post(CREATE_QUESTION_URL, obj)
  }

export const getQuestionsByPracticeTestId = (practiceTestId:string) => {
  return axios.get(`${GET_QUESTIONS_URL+'/'+practiceTestId}`);
}
export const getQuestionsByQuestionId = (questionBankId:string) => {
  return axios.get(`${GET_QUESTION_BY_QUESTION_ID_URL+'/'+questionBankId}`);
}
export const deleteQuestion = (questionId:string) => {
    return axios.delete(`${DELETE_QUESTIONS_URL+'/'+questionId}`);
  }
  export const updateQuestion = (questionId:string,body:any) => {
    return axios.put(`${UPDATE_QUESTION_URL+'/'+questionId}`,body);
  }
