import axios from 'axios'
import {CourseModel} from '../models/CourseModel'

const API_URL = process.env.REACT_APP_BACKEND_API_URL

export const CREATE_COURSE_URL=`${API_URL}/course-details`



// Server should return CourseModel
export function createCourse(obj:CourseModel) {
  return axios.post(CREATE_COURSE_URL, obj)
}


