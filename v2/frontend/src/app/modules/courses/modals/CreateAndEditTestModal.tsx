import { useState } from "react"
import { createPracticeTest } from "../services/practice-test.service";

const CreateAndEditTestModal = (props: any) => {
const [testTitle, setTestTitle] = useState('')
const [duration, setDuration] = useState('')
const [percentage, setPercentage] = useState('');
const [isRandom, setIsRandom] = useState(false);
const {course} = props;

const createTestClickHandler = () => {
    
    createPracticeTest({
        testTitle,duration,percentage,isRandom,courseId:course.id
    })
}

    return (<div className="modal fade" tabIndex={-1} id={props.id}>
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Create New Test</h5>
                <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <span className="svg-icon svg-icon-2x"></span>
                </div>

            </div>

            <div className="modal-body py-lg-10 px-lg-10">
                <div className='row mb-10'>
                    <label className='col-md-12 col-form-label required fw-bold fs-4'>Test Title:</label>
                    <div className='col-md-12'>
                        <input
                            className='form-control form-control-solid '
                            type='text'
                            value={testTitle}
                            onChange={(evt:any)=> setTestTitle(evt.target.value)}
                        />
                    </div>
                </div>
                <div className='row mb-10'>
                    <div className="col-md-6">
                        <label className='col-md-12 col-form-label required fw-bold fs-4'>Duration (Mins):</label>
                        <div className='col-md-12'>
                            <input
                                className='form-control form-control-solid '
                                type='number'
                                min={0}
                                step={1}
                                value={duration}
                            onChange={(evt:any)=> setDuration(evt.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className='col-md-12 col-form-label required fw-bold fs-4'>Pass Percentage (%):</label>
                        <div className='col-md-12'>
                            <input
                                className='form-control form-control-solid '
                                type='number'
                                min={0}
                                step={1}
                                value={percentage}
                            onChange={(evt:any)=> setPercentage(evt.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="form-check  form-switch form-check-custom form-check-solid">
                            <span className="form-check-label col-form-label required fw-bold fs-4   ">
                                Randomize
                                <input className="form-check-input" type="checkbox" checked={isRandom} 
                            onChange={(evt:any)=> setIsRandom(evt.target.checked)} />
                            </span>
                            

                        </label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={()=>createTestClickHandler()}>Create Test</button>
            </div>
        </div>
    </div>
</div>)
}
export default CreateAndEditTestModal