import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AsideDefault } from './components/aside/AsideDefault'
import { Footer } from './components/Footer'
import HeaderWrapper from './components/header/HeaderWrapper'
import { Toolbar } from './components/toolbar/Toolbar'
import { ScrollTop } from './components/ScrollTop'
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { useLocation } from 'react-router-dom'

import { MenuComponent } from '../assets/ts/components'
import CreateCourseModal from '../../app/modules/courses/modals/CreateCourseModal'
import { getCourses, getCourseBySlug } from '../../app/modules/courses/services/course.service'


const MasterLayout = () => {
  const location = useLocation()
  const [allCourses, setAllCourses] = useState<any>([]);
  const [course, setCourse] = useState<any>({});
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  useEffect(() => {
    const coursePageIndex = location.pathname.indexOf('courses');
    const courseDetailPageIndex = location.pathname.indexOf('course-details');
    const dashboardPageIndex = location.pathname.indexOf('dashboard');
    if (coursePageIndex > 0) {

      getCourses().then((obj: any) =>
        setAllCourses(obj.data.results)
      )
    } if(courseDetailPageIndex > 0) {
      const slug = location.pathname.substring(courseDetailPageIndex + 15, location.pathname.length)
      getCourseBySlug(slug).then((obj: any) => setCourse(obj.data));

    }
  }, [location])
  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <AsideDefault />
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper courses={allCourses} course={course} />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
            <Toolbar />
            <CreateCourseModal id={'create_course_modal'} />
            <div className='post d-flex flex-column-fluid' id='kt_post'>
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ScrollTop />
    </PageDataProvider>
  )
}

export { MasterLayout }
