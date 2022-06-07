import {FC, useEffect, useState} from 'react'
import { getCourses } from '../services/course.service';
import CourseCard from './CourseCard';

const CourseList: FC = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(()=>{
    getCourses().then((obj:any)=> {
setAllCourses(obj.data.results);
    })
  },[]);
  
  return (
    <>
      {(allCourses.map((course:any,id:number) => <CourseCard data={course} key={id}/>))}

    </>
  )
}

export {CourseList}
