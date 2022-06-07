
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_icertify/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'

import { CoursePage } from "../modules/courses/CoursesPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='courses/*' element={<CoursePage />} />
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}
export {PrivateRoutes}
