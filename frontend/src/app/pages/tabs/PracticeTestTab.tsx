
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react"
import { QuestionList } from "../../modules/courses/components/QuestionList"
import CreateAndEditTestModal from "../../modules/courses/modals/CreateAndEditTestModal"
import DeleteTestModal from "../../modules/courses/modals/DeleteTestModal"
import EditTestModal from "../../modules/courses/modals/EditTestModal"
import MultipleChoiceModal from "../../modules/courses/modals/MultipleChoiceModal"
import MultipleSelectModal from "../../modules/courses/modals/MultipleSelectModal"
import { getAllPracticeTestsByCourseId } from "../../modules/courses/services/practice-test.service"



const PracticeTestTab = (props:any) => {
const [allPracticeTests, setAllPracticeTests] = useState<any>([]);

useEffect(()=>{
  getAllPracticeTestsByCourseId(props.course.id).then((obj:any)=> {
    setAllPracticeTests(obj.data);
  });
  
},[props])
  return (
    <div className="card">
      <div className="card-header flex-wrap pb-0">
        <div className="card-title">
          <h3 className="card-label">Practice Tests
            <span className="text-muted">({allPracticeTests.length})</span></h3>
        </div>
        <div className="card-toolbar">
          <div className="mr-2">
            <button type="button" className="btn btn-sm btn-primary font-weight-bolder" data-bs-toggle="modal" data-bs-target="#add_test_modal_1">
              Add Test</button>
              <CreateAndEditTestModal id={'add_test_modal_1'} course={props.course}/>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className='row mb-10'>
          {allPracticeTests.length > 0 && allPracticeTests.map((test:any, index:number)=>
          (
            <div className="accordion accordion-icon-toggle" id={`kt_accordion_1${index}`} key={test.id}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`kt_accordion_1_header_${index}`}>
                <button className="accordion-button fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#kt_accordion_1_body_${index}`} aria-expanded="true" aria-controls={`kt_accordion_1_body_${index}`}>
                {test.testTitle} #{index+1} 
                
                </button>
              </h2>
              <div id={`kt_accordion_1_body_${index}`} className="accordion-collapse collapse" aria-labelledby={`kt_accordion_1_header_${index}`} data-bs-parent={`#kt_accordion_1${index}`}>
                <div className="accordion-body">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Add Questions</h4>
                      <div className="mt-2">
                        <button type="button" className="btn btn-sm btn-primary" name="button" data-bs-toggle="modal" data-bs-target={`#multiple_choice_modal_${index}`}>Multiple Choice</button>
                        <button type="button" className="btn btn-sm btn-primary" name="button" data-bs-toggle="modal" data-bs-target={`#multiple_select_modal_${index}`}>Multi-select</button>
                        
                      </div>
                      <div className="card-toolbar">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <span className="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
                              <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
                              <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
                              <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
                            </svg>
                          </span>

                        </button>
                        
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" >
                          <div className="menu-item px-3">
                            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Actions</div>
                          </div>
                          <div className="menu-item px-3">
                            <p  className="menu-link px-3" data-bs-toggle="modal" data-bs-target={`#edit_test_modal_${index}`}>Edit Test</p>
                            
                          </div>
                          
                          <div className="menu-item px-3">
                            <p className="menu-link px-3" data-bs-toggle="modal" data-bs-target={`#delete_test_modal_${index}`}>Delete Test</p>
                            
                          </div>
                          <div className="menu-item px-3">
                            <p className="menu-link px-3">Publish Changes</p>
                          </div>
                          <div className="menu-item px-3">
                            <p className="menu-link px-3">Preview</p>
                          </div>
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="1" />
                                <span className="form-check-label fw-bold text-muted">
                                  Save Card
                                </span>
                              </label>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                          <tbody>
                          <QuestionList practiceTestId={test.id}/>
                            
                          </tbody>
                        </table>
                        <MultipleChoiceModal id={`multiple_choice_modal_${index}`} courseId={props.course.id} practiceTestId={test.id} />
                        <MultipleSelectModal id={`multiple_select_modal_${index}`} courseId={props.course.id} practiceTestId={test.id}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <EditTestModal id={`edit_test_modal_${index}`} practiceTestId={test.id}/>
            <DeleteTestModal id={`delete_test_modal_${index}`} practiceTestId={test.id} index={index}/>
            
            
          </div>
          
          )
          )}
          

        </div>
      </div>
    </div>
  )
}

export default PracticeTestTab
