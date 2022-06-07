import  { useEffect, useState } from 'react'
import {useLayout} from '../../core/LayoutProvider'
import  * as _ from 'lodash'
import SubTopBar from './SubTopBar'
import { useLocation } from 'react-router-dom'

const Toolbar = () => {
  const {config} = useLayout()
  const location = useLocation();
  const [isCoursesPage, setIsCoursesPage] = useState(false);
  useEffect(() => {
    setIsCoursesPage(((location.pathname.indexOf('courses') >0) && !(location.pathname.indexOf('course-details') >0)))
      
  }, [location.pathname])
  if (config.toolbar.layout ==='toolbar1') {
    
      return(<>
      
      {isCoursesPage && (<SubTopBar  />)}
      
      
      </>);

    
  } else {
    return(<></>);
  }
}

export {Toolbar}
