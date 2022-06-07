import { useEffect, useState } from "react"
import {  getPracticeTestById, updatePracticetest } from "../services/practice-test.service";

const EditTestModal = (props: any) => {
const [practiceTest,setPracticeTest]= useState<any>({});
const [isRandom,setIsRandom] = useState(false);
const {practiceTestId} = props;

const UpdateTestClickHandler = () => {
    let test = practiceTest;
    delete test.id;

    setPracticeTest(test)
updatePracticetest(practiceTestId,practiceTest);
}
useEffect(()=>{
    setIsRandom(practiceTest.isRandom)
    
},[practiceTest])
const setUpdateFormValues = (evt:any)=> {
    
    setPracticeTest((values:any)=>  ({...values, [evt.target.name]: evt.target.value}))
    
}
const isRandomChangeHandler = (evt:any) => {
        setPracticeTest((values:any)=>  ({...values, isRandom: evt.target.checked}))
    setIsRandom(evt.target.checked);
    
}


useEffect(()=>{
    getPracticeTestById(practiceTestId).then((obj:any)=>{
        setPracticeTest(obj.data);
    })
},[])


    return (<div className="modal fade" tabIndex={-1} id={props.id}>
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Edit Test</h5>
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
                            name='testTitle'
                            value={practiceTest.testTitle}
                            onChange={(evt:any)=> setUpdateFormValues(evt)}
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
                                value={practiceTest.duration}
                                name="duration"
                                onChange={(evt:any)=> setUpdateFormValues(evt)}
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
                                name='percentage'
                                value={practiceTest.percentage}
                                onChange={(evt:any)=> setUpdateFormValues(evt)}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="form-check  form-switch form-check-custom form-check-solid">
                            <span className="form-check-label col-form-label required fw-bold fs-4   ">
                                Randomize
                                <input className="form-check-input" type="checkbox"
                                data-checked={isRandom}
                                 name="isRandom"
                                
                                 onChange={(evt:any)=> isRandomChangeHandler(evt)}
                             />
                            </span>
                            

                        </label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={()=>UpdateTestClickHandler()}>Update Test</button>
            </div>
        </div>
    </div>
</div>)
}
export default EditTestModal