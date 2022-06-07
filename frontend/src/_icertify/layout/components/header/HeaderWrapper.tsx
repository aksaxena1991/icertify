/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCourseBySlug, getCourses } from '../../../../app/modules/courses/services/course.service'

import {useLayout} from '../../core'
import Header from './Header'

import Topbar from './Topbar'

const HeaderWrapperMain= (props:any)=> {
  const { classes, attributes} = useLayout()
  const {courses, course} = props;
  
  
  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          <div className='d-flex align-items-stretch' id='kt_header_nav'>
            <Header courses={courses} course={course} />
          </div>
          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar  />
          </div>
        </div>
        
      </div>
    </div>
  )
}
const HeaderWrapper = memo(HeaderWrapperMain)
export default HeaderWrapper