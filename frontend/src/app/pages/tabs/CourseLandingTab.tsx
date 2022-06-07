/* eslint-disable jsx-a11y/anchor-is-valid */

import { CKEditor } from "ckeditor4-react"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageUpload from "../../../setup/imageUploader/image-upload";
import { toAbsoluteUrl } from "../../../_icertify/helpers"
import { getCourseDetailByCourseId } from "../../modules/courses/services/course-details.service";

import { getCourseBySlug } from "../../modules/courses/services/course.service";
import { decodeEntities } from "../../utils/utils";



const CourseLandingTab = (props:any) => {
  
  
  const {slug} = useParams(); 
  const [course,setCourse]=useState<any>({});
  const [courseTitle, setCourseTitle] = useState('');
  const [courseSubTitle, setCourseSubTitle]=useState('');
  const [courseWelcomeNote, setCourseWelcomeNote] = useState('');
  const [courseDescription,setCourseDescription]=useState('');
  const [imageURLs, setImageURLs] = useState<any>('');
  const [courseDetail, setCourseDetail] = useState<any>({})
  const [knowledgeAreaList,setKnowledgeAreaList] = useState<object[]>([]);
  const [knowledgeArea,setKnowledgeArea] = useState('');
  
const saveCourseWelcomeNote = (evt:any)=> {
    setCourseWelcomeNote(evt.editor.getData());
  }
  const saveCourseDescription = (evt:any)=> {
    setCourseDescription(evt.editor.getData());
  }

  const saveKnowledgeArea = (evt:any) => {
    const id = evt.target.id;
    const value = evt.target.value;
    setKnowledgeAreaList(values => ({...values, [id]: value}))
const list = Object.values(knowledgeAreaList);
    setKnowledgeArea(list.join('$icertify$'))
}
  useEffect(()=>{
    getCourseBySlug(slug)
    .then((obj:any)=> {
      setCourse(obj.data);
      setCourseTitle(obj.data.courseTitle);

    })
    
  },[]);
  useEffect(()=>{
   if(course.id !== undefined && course.id !== '' && course.id !== null) {
    getCourseDetailByCourseId(course.id).then((obj:any)=>{
      setCourseDetail(obj.data);
    })
   }
  },[course]);

  useEffect(()=>{
    
    
    setCourseSubTitle(courseDetail.courseSubTitle);
    setCourseWelcomeNote(courseDetail.courseWelcomeNote);
    setCourseDescription(courseDetail.courseDescription);
    // setImageURLs(courseDetail.courseImage)
    
  },[courseDetail])

  useEffect(()=>{
    props.callback({
      course:course,courseTitle:courseTitle,courseSubTitle:courseSubTitle,courseWelcomeNote:courseWelcomeNote,courseDescription:courseDescription,knowledgeArea:knowledgeArea,tab:'CourseLandingTab', courseImage:imageURLs
    })
  },[course,courseTitle,courseSubTitle,courseWelcomeNote,courseDescription,knowledgeArea, imageURLs]);

const callbackHandler = (data:any) => {
  
  setImageURLs(data[0]);
  
}
  
  return (
    <div className="card">
      <div className="card-body">
        <div className='row mb-10'>
          <label className='col-lg-12 col-form-label required fw-bold fs-4'>Course Title:</label>
          <div className='col-lg-12 col-xl-12'>
            <input
            
              className='form-control form-control-solid'
              type='text'
              value={courseTitle}
              onChange={(e:any)=>setCourseTitle(e.target.value)}
              
            />
          </div>
        </div>
        <div className='row mb-10'>
          <label className='col-lg-12 col-form-label required fw-bold fs-4'>Course Sub Title:</label>
          <div className='col-lg-12 col-xl-12'>
            <input
              className='form-control form-control-solid '
              type='text'
              value={courseSubTitle}
              onChange={(e:any)=>setCourseSubTitle(e.target.value)}
            />
          </div>
        </div>

        <div className='row mb-10'>
          <label className='col-lg-12 col-form-label required fw-bold fs-4'>Welcome to the course:</label>
          <div className='col-lg-12 col-xl-12'>
            <CKEditor className='form-control form-control-solid'
              initData={decodeEntities(courseWelcomeNote)}
              onChange={saveCourseWelcomeNote} />
          </div>
        </div>

        <div className='row mb-10'>
          <label className='col-lg-12 col-form-label required fw-bold fs-4'>Course Description:</label>
          <div className='col-lg-12 col-xl-12'>
            <CKEditor className='form-control form-control-solid'
              initData={decodeEntities(courseDescription)}
              onChange={saveCourseDescription} />
          </div>
        </div>
        <div className='row mb-10'>
          <label className='col-lg-12 col-form-label required fw-bold fs-4'>Knowledge Area:</label>
          <div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_1"
              placeholder={`Skill Measured 1`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div><div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_2"
              placeholder={`Skill Measured 2`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div>
        </div>
        <div className='row mb-10'>
          <div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_3"
              placeholder={`Skill Measured 3`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div><div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_4"
              placeholder={`Skill Measured 4`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div>
        </div>
        <div className='row mb-10'>
          <div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_5"
              placeholder={`Skill Measured 5`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div><div className='col-lg-6 col-xl-6'>
            <input
              className='form-control form-control-solid '
              type='text'
              id="knowledgeArea_6"
              placeholder={`Skill Measured 6`}
              onChange={(evt:any)=> saveKnowledgeArea(evt)}
            />
          </div>
        </div>

        <div className='row mb-10'>

          <label className='col-lg-12 col-form-label fw-bold required fs-4'>Course Image:</label>
          <div className='col-lg-12'>
            <div className="image-input image-input-circle" data-kt-image-input="true">
																					 <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: `url(${imageURLs ? imageURLs : toAbsoluteUrl('/media/avatars/blank.png')})` }}></div>
																					 <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																							data-kt-image-input-action="change"
																							data-bs-toggle="tooltip"
																							data-bs-dismiss="click"
																							title="Change avatar">
																							 <i className="bi bi-pencil-fill fs-7"></i>
																							 <ImageUpload callback={callbackHandler}/>
																					 </label>
																					 <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																							data-kt-image-input-action="cancel"
																							data-bs-toggle="tooltip"
																							data-bs-dismiss="click"
																							title="Cancel avatar">
																							 <i className="bi bi-x fs-2"></i>
                                               <input type="hidden" name="avatar_remove" />
																					 </span>
																					 <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																							data-kt-image-input-action="remove"
																							data-bs-toggle="tooltip"
																							data-bs-dismiss="click"
																							title="Remove avatar">
																							 <i className="bi bi-x fs-2"></i>
																					 </span>
																			 </div>
                                       
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseLandingTab
