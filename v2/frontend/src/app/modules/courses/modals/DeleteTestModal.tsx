import { useEffect, useState } from "react";
import { deletePracticeTestById, getPracticeTestById } from "../services/practice-test.service";
import { getQuestionsByPracticeTestId } from "../services/questions.service";

const DeleteTestModal = (props: any) => {
const {practiceTestId,id,index} = props;
const [questions, setQuestions] = useState<any>([])
const [practiceTest, setPracticeTest] = useState<any>({})
useEffect(()=>{
    getPracticeTestById(practiceTestId).then((obj:any)=>{
        setPracticeTest(obj.data)
    })
    getQuestionsByPracticeTestId(practiceTestId).then((obj:any)=>{
        setQuestions(obj.data);
    })
},[])

const onDeleteClickHandler =()=> {
    deletePracticeTestById(practiceTestId);

}
    return (<div className="modal fade" tabIndex={-1} id={id}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete Test</h5>
                    <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <span className="svg-icon svg-icon-2x"></span>
                    </div>

                </div>

                <div className="modal-body py-lg-10 px-lg-10">
                    <h4>Are you sure you want to delete this test?</h4>
                    <h5 className="mt-4 text-primary">{practiceTest.testTitle} #{index+1} (
                        {questions.length} questions)</h5>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger" onClick={()=>onDeleteClickHandler()}>Yes, delete!</button>
                </div>
            </div>
        </div>
    </div>)
}
export default DeleteTestModal