import { CKEditor } from "ckeditor4-react";
import { useEffect, useState } from "react";

import { createQuestion } from "../services/questions.service";

const MultipleChoiceModal = (props: any) => {
const {courseId, practiceTestId} = props;
    const [optionCount, setOptionCount] = useState(1);
    const [rightOption,setRightOption] = useState('');
    const [options,setOptions] = useState<object[]>([]);
    const [question,setQuestion] = useState('')
    const [explaination,setExplaination] = useState('');
    const [exhibit,setExhibit] = useState('')
    const [caseStudyId, setCasStudyId] = useState('');
    const saveQuestion =(evt:any)=> {
        setQuestion(evt.editor.getData());
      }
      const saveExplaination =(evt:any)=> {
        setExplaination(evt.editor.getData());
      }
      const saveExhibit =(evt:any)=> {
        setExhibit(evt.editor.getData());
      }

      const setRadioValue = (evt:any) => {
        const id = evt.target.id;
        const value = evt.target.value;
        setOptions((values:any)=>{
            for(let v in values) {
                if(id === v) {
                    evt.target.previousSibling.firstElementChild.value = values[v]
                }
            }
            return ({...values, [id]: value})
        })
        
      }
  

    const onSaveQuestionClickHandler = () => {
        const opt = Object.values(options);
createQuestion({
            question,explaination,exhibit,caseStudyId,practiceTestId,courseId,rightOption,questionType:'CHOICE',options:opt.join('$icertify$')
        });
    }
    switch(props.mode){
        case 'add':
            break;
            case 'edit':
                break;
    }

    return (<div className="modal bg-white fade" tabIndex={-1} id={props.id}>
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content multiple-choice-modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add new question</h5>
                    <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <span className="svg-icon svg-icon-2x"></span>
                    </div>

                </div>

                <div className="modal-body">
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Question:</label>
                        <div className='col-lg-12 col-xl-12'>
                            <CKEditor className='form-control form-control-solid'
                                initData={question}
                                onChange={(evt:any)=>saveQuestion(evt)} />
                        </div>
                    </div>
                    <div className="row mb-10">

                        <div className="col-md-12">
                            <div className="input-group input-group-solid">
                                <span className="input-group-text">A<input type="radio" name="radioRightOption" className="ms-2 form-check-input"  onChange={(evt:any)=>setRightOption(evt.target.value)}></input></span>
                                <textarea className="form-control" aria-label="With textarea"  onChange={(evt:any)=>
                        setRadioValue(evt)
                        } id="option_1"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-10">

                        <div className="col-md-12">
                            <div className="input-group input-group-solid">
                                <span className="input-group-text">B<input type="radio" name="radioRightOption" className="ms-2 form-check-input"  onChange={(evt:any)=>setRightOption(evt.target.value)}></input></span>
                                <textarea className="form-control" aria-label="With textarea" onChange={(evt:any)=>
                        setRadioValue(evt)
                        } id="option_2"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-10">

                        <div className="col-md-12">
                            <div className="input-group input-group-solid">
                                <span className="input-group-text">C<input type="radio" name="radioRightOption" className="ms-2 form-check-input"  onChange={(evt:any)=>setRightOption(evt.target.value)}></input></span>
                                <textarea className="form-control" aria-label="With textarea" onChange={(evt:any)=>
                        setRadioValue(evt)
                        } id="option_3"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-10">

                        <div className="col-md-12">
                            <div className="input-group input-group-solid">
                                <span className="input-group-text">D<input type="radio" name="radioRightOption" className="ms-2 form-check-input"  onChange={(evt:any)=>setRightOption(evt.target.value)}></input></span>
                                <textarea className="form-control" aria-label="With textarea" onChange={(evt:any)=>
                        setRadioValue(evt)
                        } id="option_4"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-10">

                        <div className="col-md-12">
                            <div className="input-group input-group-solid">
                                <span className="input-group-text">E<input type="radio" name="radioRightOption" className="ms-2 form-check-input"  onChange={(evt:any)=>setRightOption(evt.target.value)}></input></span>
                                <textarea className="form-control" aria-label="With textarea" onChange={(evt:any)=>
                        setRadioValue(evt)
                        } id="option_5"></textarea>
                            </div>
                        </div>

                    </div>
                    {/* {[...Array(optionCount)].map((_, i) => addMoreOptionsHandler(i + 64))} */}
                    <div className="row mb-10">
                        <div className="col-md-4"><button type="button" onClick={() => setOptionCount(optionCount <= 22 ? optionCount + 1 : optionCount)} className="btn btn-primary"><i className="la la-plus"></i>Add more options</button></div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Explanation:</label>
                        <div className='col-lg-12 col-xl-12'>
                            <CKEditor className='form-control form-control-solid'
                                initData={explaination}
                                onChange={(evt:any)=>saveExplaination(evt)} />
                        </div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Exhibit(s):</label>
                        <div className='col-lg-12 col-xl-12'>
                            <CKEditor className='form-control form-control-solid'
                                initData={exhibit}
                                onChange={(evt:any)=> saveExhibit(evt)} />
                        </div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Case Study:</label>
                        <div className='col-lg-12 col-xl-12'>
                            <select className="form-select" aria-label="Select example" onChange={(evt:any)=>setCasStudyId(evt.target.value)}>
                                <option>None</option>
                                <option value="Litware Inc">Litware Inc</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={()=>onSaveQuestionClickHandler()}>Save Question</button>
                </div>
            </div>
        </div>
    </div>);
}
export default MultipleChoiceModal;