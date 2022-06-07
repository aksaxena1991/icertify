import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest, select} from 'redux-saga/effects'
import {CourseModel} from '../models/CourseModel'
import {createCourse} from "./CoursesCRUD";

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Create: '[Create Course] Action',
  
}
const initialCourseState: ICourseState = {
    courses: undefined,
}
export interface ICourseState {
  courses?: CourseModel
  }
export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},
  (state: ICourseState = initialCourseState, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case actionTypes.Create: {
        return {courses: action.payload?.data}
      }
default:
        return state
    }
  }
)

export const actions = {
  create: (data:any) => ({type: actionTypes.Create, payload:{data}}),
  
}

export function* saga() {
  yield takeLatest(actionTypes.Create, function* createSaga() {
    
  
    
    // const {data} = yield createCourse()
    // yield put(actions.create(data))
  })
}


