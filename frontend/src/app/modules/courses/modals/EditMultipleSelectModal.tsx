import { CKEditor } from "ckeditor4-react";
import {  useEffect, useState } from "react";
import { decodeEntities } from "../../../utils/utils";
import { updateQuestion } from "../services/questions.service";
const EditMultipleSelectModal = (props: any) => {
const {practiceTest} = props;
const {practiceTestId,courseId}=practiceTest
const [optionCount, setOptionCount] = useState(1);
    const [rightOption,setRightOption] = useState<any>([]);
    const [options,setOptions] = useState<object[]>([]);
    const [question,setQuestion] = useState(practiceTest.question)
    const [explaination,setExplaination] = useState(practiceTest.explaination);
    const [exhibit,setExhibit] = useState(practiceTest.exhibit)
    const [caseStudyId, setCasStudyId] = useState(practiceTest.caseStudyId);
    const [allOptionList, setAllOptionList] = useState<object[]>([]);

    useEffect(()=>{
        
        const opt = practiceTest.options.split('$icertify$');
        
        for(let i in opt) {
            setAllOptionList((op:any)=> [...op,{["option_"+i]:opt[i]}])
        }
    },[practiceTest]);
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
                    evt.target.previousSibling.firstElementChild.value = values[v];
                }
            }
            return ({...values, [id]: value})
        })
        
      }
      const rightOptionHandler = (evt:any)=>{
        const id = evt.target.id;
        const value = evt.target.value;
        setRightOption((values:any)=>{
            
            return ({...values, [id]: value})
        })
      }
  

    const onUpdateQuestionClickHandler = () => {
        const opt = Object.values(options);

        updateQuestion(practiceTest.id,{question,explaination,exhibit,caseStudyId,practiceTestId,courseId,rightOption:Object.values(rightOption).join('$icertify'),options:opt.join('$icertify$')})


    }

    const addAlphabet = (value: number) => {

        const charCode = value + 65;
        
            return String.fromCharCode(charCode)
        
    }
    

    return (<div className="modal bg-white fade" tabIndex={-1} id={props.id} key={props.practiceTest.id}>
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
                            
                            <CKEditor 
                            className='form-control form-control-solid'
                            initData={decodeEntities(practiceTest.question)}
                            onChange={(evt:any)=> saveQuestion(evt)}
                                />
                        </div>
                    </div>
                    
                    {allOptionList.map((el:any,index:number)=> {
                        const key = Object.keys(el)[0];
                        const value = el[key];
                        return ( 
                            <div className="row mb-10">
        
        <div className="col-md-12">
            <div className="input-group input-group-solid">
                <span className="input-group-text">{addAlphabet(index)}<input type="checkbox" name="radioRightOption" id={`${key}`} className="ms-2 form-check-input" value={value} onChange={(evt:any)=>rightOptionHandler(evt)}></input></span>
                <textarea className="form-control" aria-label="With textarea" value={value} onChange={(evt:any)=>
        setRadioValue(evt)
        } id={`${key}`}></textarea>
            </div>
        </div>
        
        </div>)
                    }
)}


                    {/* {[...Array(optionCount)].map((_, i) => addMoreOptionsHandler(i + 64))} */}
                    <div className="row mb-10">
                        <div className="col-md-4"><button type="button" onClick={() => setOptionCount(optionCount <= 22 ? optionCount + 1 : optionCount)} className="btn btn-primary"><i className="la la-plus"></i>Add more options</button></div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Explanation:</label>
                        <div className='col-lg-12 col-xl-12'>
                            <CKEditor className='form-control form-control-solid'
                                initData={decodeEntities(practiceTest.explaination)}
                                onChange={(evt:any)=>saveExplaination(evt)} />
                        </div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Exhibit(s):</label>
                        <div className='col-lg-12 col-xl-12'>
                            <CKEditor className='form-control form-control-solid'
                                initData={decodeEntities(practiceTest.exhibit)}
                                onChange={(evt:any)=> saveExhibit(evt)} />
                        </div>
                    </div>
                    <div className='row mb-10'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-4'>Case Study:</label>
                        <div className='col-lg-12 col-xl-12'>
                            <select className="form-select" aria-label="Select example" onChange={(evt:any)=>setCasStudyId(evt.target.value)}>
                                <option>None</option>
                                <option value="Litware Inc" selected={practiceTest.caseStudyId === "Litware Inc"}>Litware Inc</option>
                                <option value="2" selected={practiceTest.caseStudyId === "2"}>Two</option>
                                <option value="3" selected={practiceTest.caseStudyId === "3"}>Three</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={()=>onUpdateQuestionClickHandler()}>Update Question</button>
                </div>
            </div>
        </div>
    </div>);
}
export default EditMultipleSelectModal;