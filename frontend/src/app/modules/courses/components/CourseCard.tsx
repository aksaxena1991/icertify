import {  useNavigate } from "react-router-dom";

const CourseCard = (props:any) => {
  const navigate = useNavigate();
  
  const onCourseClickHandler =(data:any) =>{
    
    navigate(`course-details/${props.data.slug}`,{
state: data
    })
  }
  return(<>
  <div className='card mb-10'>
      <div className='card-body d-flex align-items-center py-8'>

        <div className="d-flex flex-wrap flex-sm-nowrap">
          <div className="d-flex flex-center flex-shrink-0 me-7">
            <img
              src={'/media/courses/az-900.webp'}
              className='mw-50px mw-lg-75px'
              alt='image1'
            />
          </div>
          <div className="flex-grow-1">
            <div className="justify-content-between align-items-start flex-wrap mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-1">
                  <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3" onClick={()=>onCourseClickHandler(props.data)} style={{cursor:'pointer'}}>{props.data.courseTitle}</span>
                  <span className="badge badge-light-success me-auto">Live</span>
                </div>
              </div>
              <div className="course-stats-cont">
                <div className="d-flex flex-wrap">
                  
                    <div className="course-stats border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"></rect>
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"></path>
                          </svg>
                        </span>
                        <div className="fs-4 fw-bolder text-gray-800">$1560</div>
                      </div>
                      <div className="fw-bold fs-6 text-gray-400 text-center">Revenue</div>
                    </div>
                  
                  
                    <div className="course-stats border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black"></rect>
                            <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black"></path>
                          </svg>
                        </span>
                        <div className="fs-4 fw-bolder text-gray-800 counted" data-kt-countup="true" data-kt-countup-value="75">140/34</div>
                      </div>
                      <div className="fw-bold fs-6 text-gray-400 text-center">Enrollments</div>
                    </div>
                  
                    <div className="course-stats border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black"></rect>
                            <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black"></path>
                          </svg>
                        </span>
                        <div className="fs-4 fw-bolder text-gray-800 counted" data-kt-countup="true" data-kt-countup-value="75">10.5%</div>
                      </div>
                      <div className="fw-bold fs-6 text-gray-400 text-center">Conversion</div>
                    </div>
                  
                    <div className="course-stats border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"></rect>
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"></path>
                          </svg>
                        </span>
                        <div className="fs-4 fw-bolder text-gray-800 counted" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">4.5</div>
                      </div>
                      <div className="fw-bold fs-6 text-gray-400 text-center">Ratings</div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div></>);
}

export default CourseCard