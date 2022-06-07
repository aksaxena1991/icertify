/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes, Outlet } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_icertify/helpers'
import { CourseDetails } from './components/CourseDetails'
import { CourseList } from './components/CourseList'

const PageLayout = () => {
  return (
    <div className='d-flex flex-column flex-root'>
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{ backgroundImage: `url('${toAbsoluteUrl('/media/illustrations/progress-hd.png')}')` }}
      >
        <Outlet />
</div>
    </div>
  )
}

const CoursePage = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path='courses' element={<CourseList />} />
      <Route path='course-details/:slug' element={<CourseDetails />} />
      <Route index element={<CourseList />} />
    </Route>
  </Routes>
)

export { CoursePage }
