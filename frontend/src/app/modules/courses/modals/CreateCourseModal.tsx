import React,{ useCallback, useEffect, useState } from "react"
import { createCourse } from "../services/course.service";
import { allVendors, createVendor, deleteVendor } from "../services/vendor.service";

const CreateCourseModal = (props: any) => {
	const [courseTitle,setCourseTitle] = useState('');
	const [vendorId,setVendorId] = useState('');
	const [vendorName,setVendorName] = useState('');
	const [isDisabled,setIsDisabled] = useState(true);
	const [addVendorBtnDisabled,setAddVendorBtnDisabled] = useState(true);
	const [allVendorList, setAllVendorList] = useState([]);
	// const [isDeleteVendorClicked,setIsDeleteVendorClicked ] = useState(false);
	// const [isAddVendorClicked,setIsAddVendorClicked ] = useState(false);
	// const [isCreatedClicked,setIsCreatedClicked ] = useState(false);
	

	
useEffect(()=>{
	const disabled = ((courseTitle !== '' && courseTitle !== undefined && courseTitle !== null) && (vendorId !== '' && vendorId !== undefined && vendorId !== null)) ? false : true
setIsDisabled(disabled);

},[courseTitle,vendorId]);

useEffect(()=>{
	const disabled = ((vendorName !== '' && vendorName !== undefined && vendorName !== null)) ? false : true
	setAddVendorBtnDisabled(disabled)
	
},[vendorName]);

useEffect(()=>{
	vendorList();
	
},[]);




const vendorList = useCallback(()=>{
	allVendors().then((obj:any)=> {
		setAllVendorList(obj.data.results);
		
	});
},[allVendorList])

const addVendorNameClickHandler = useCallback(() =>{
	if(!addVendorBtnDisabled){
		createVendor({vendorName:vendorName})
		setVendorName('');
		setAddVendorBtnDisabled(true);
	}
},[vendorName])

const createCourseClickHandler = useCallback(() => {
	createCourse({vendorId:vendorId, courseTitle:courseTitle});
	setCourseTitle('');
		setVendorId('')
},[vendorId,courseTitle])

const deleteVendorClickHandler = useCallback((id:any) => {
	// setIsDeleteVendorClicked(true);
	deleteVendor(id);
	
	
},[deleteVendor])


    return (<div className="modal fade" tabIndex={-1} id={props.id}>
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Create New Course</h5>
                <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <span className="svg-icon svg-icon-2x"></span>
                </div>

            </div>
            <div className="modal-body py-lg-10 px-lg-10">
						<div className="row mb-10">
							<div className="col-md-12">
								<label className="d-flex align-items-center fs-5 fw-bold mb-2">
									<span className="required">Course Title</span>
								</label>
								<input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" value={courseTitle} onChange={(e:any)=> setCourseTitle(e.target.value)}/>
							</div>
						</div>
						<div className="row mb-10">
							<div className="col-md-6">
								<label className="d-flex align-items-center fs-5 fw-bold mb-2">
									<span className="required">Vendor</span>
								</label>
								
								{
									allVendorList.map((el:any)=> (<div className="input-group mb-5" key={el.id}>
									<div className="input-group-text">
									  <input className="form-check-input" type="radio" value={el.id} onChange={(e:any)=> setVendorId(e.target.value)} name="vendorId" aria-label="Radio button for following text input"/>
									</div>
									
									<label className="form-control" style={{backgroundColor: "#eff2f5"}}>{el.vendorName}</label>
									  <button className="btn btn-light-danger" type="button" onClick={()=>deleteVendorClickHandler(el.id)}>
										  <span className="svg-icon svg-icon-3">
											  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												  <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
												  <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
												  <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
											  </svg>
										  </span>
									  </button>
								  </div>))
								}
								
								
							</div>
							<div className="col-md-6">
								<label className="d-flex align-items-center fs-5 fw-bold mb-2">
									<span>&nbsp;</span>
								</label>
								
							</div>
						</div>

						<div className="row mb-3">
							<div className="col-md-12">
								<label className="d-flex align-items-center fs-5 fw-bold mb-2">
									<span className="">Add new vendor</span>
								</label>
								<div className="input-group mb-3">
								  <input type="text" className="form-control" placeholder="Vendor name" aria-label="Vendor name" value={vendorName} onChange={(e:any)=> setVendorName(e.target.value)} aria-describedby="button-addon2"/>
								  <button className="btn btn-secondary" type="button" id="button-addon2" onClick={()=>addVendorNameClickHandler()} disabled={addVendorBtnDisabled}>Add Vendor</button>
								</div>
							</div>
						</div>

							
					</div>
					
					<div className="modal-footer">
		         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		         <button type="button" className="btn btn-primary" disabled={isDisabled} onClick={()=>createCourseClickHandler()}>Create Course</button>
		       </div>
        </div>
    </div>
</div>)
}
export default CreateCourseModal