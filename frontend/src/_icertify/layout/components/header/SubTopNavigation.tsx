const SubTopNavigation = (props:any) =>{
    
    return (<>
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid p-0">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <div className="position-relative my-1">
                            <span
                                className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ps-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                        transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                                    <path
                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                        fill="black"></path>
                                </svg>
                            </span>
                            <input type="text" className="form-control ps-10 w-300px" name="Search course"
                                placeholder="Search course" />
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className=" nav-group nav-group-outline mx-auto btn-group" role="group"
                            aria-label=" toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"
                                checked />
                            <label className=" btn btn-sm btn-active btn-active-secondary btn-color-gray-400"
                                htmlFor="btnradio1">March'21</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                                autoComplete="off" />
                            <label className="btn btn-sm btn-active btn-active-secondary btn-color-gray-400"
                                htmlFor="btnradio2">All Time</label>

                        </div>
                    </li>
                    <li className="nav-item dropdown mt-2">
                        <div className="d-flex align-items-center">
                            <select className="form-select form-select-sm w-125px me-6 select2-hidden-accessible"
                                data-control="select2" data-placeholder="Latest" data-hide-search="true"
                                data-select2-id="select2-data-7-hd95" tabIndex={-1} aria-hidden="true">
                                <option value="" data-select2-id="select2-data-117-z9an"></option>
                                <option value="1" selected>Newest</option>
                                <option value="2">Oldest</option>
                                <option value="3">Published</option>
                                <option value="4">Unpublished</option>
                                <option value="4">Highest Revenue</option>
                                <option value="4">Lowest Revenue</option>
                                <option value="4">Highest Enrollments</option>
                                <option value="4">Lowest Enrollments</option>
                            </select>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className=" align-items-center">
                            <button type="button" className="btn btn-sm btn-primary" name="button"
                                data-bs-toggle='modal' data-bs-target='#create_course_modal'
                                id='create_course_modal_button'>Create course</button>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</>)
}
export default SubTopNavigation