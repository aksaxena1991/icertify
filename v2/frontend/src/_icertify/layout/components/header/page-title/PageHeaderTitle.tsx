import { memo, useEffect, useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import * as _ from 'lodash'
const PageHeaderTitleMain = (props: any) => {
    const { course, courses } = props;
    const [allCourses, setAllCourses] = useState<any>([]);
    const [oneCourse, setOneCourse] = useState<any>({});
    const [isDashboard, setIsDashboard] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setAllCourses(props.courses);
        setOneCourse({})
        setIsDashboard(false)
    }, [courses])
    useEffect(() => {
        setOneCourse(props.course);
        setAllCourses([])
        setIsDashboard(false)
    }, [
        course
    ])
    useEffect(() => {

        setIsDashboard(location.pathname.indexOf('dashboard') > 0);
        setAllCourses([])
        setOneCourse({})
    }, [location.pathname])

    return (<>
        {
            allCourses.length > 0 && (<Link className='text-muted text-hover-primary' to={'/courses'}>
                <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 mt-6">All Courses <span className="text-muted ms-2">({courses.length})</span></h1>
            </Link>)}
        {
            !_.isEmpty(oneCourse) && (<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_header_nav'}" className="page-title d-flex align-items-center me-3 mb-5 mb-lg-0">
                <Link className='text-muted text-hover-primary' to={'/courses'}>
                    <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.6 4L9.6 12L17.6 20H13.6L6.3 12.7C5.9 12.3 5.9 11.7 6.3 11.3L13.6 4H17.6Z" fill="black" />
                    </svg></span>
                </Link>
                <span className="h-20px border-gray-300 border-start mx-4"></span>
                <Link to={'/courses'} className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">{course.courseTitle}<span className="ms-5 text-muted fs-5">(Course details)</span> </Link>
            </div>)
        }
        {
            isDashboard && (
                <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 mt-6">Dashboard</h1>
            )
        }


    </>);
}
const PageHeaderTitle = memo(PageHeaderTitleMain);
export default PageHeaderTitle;