import {  useState } from "react";
import { deleteQuestion } from "../services/questions.service";

const DeleteQuestionModal = (props:any) => {
    const [isClicked, setIsClicked] = useState(false);
    const deleteQuestionHandler = ()=> {
        
        deleteQuestion(props.questionId).then(()=>{
                setIsClicked(true);
            })
        
    }
    return(<>
    		
		<div className="modal fade" id={props.id} tabIndex={-1} aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h2>Delete Question</h2>
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<span className="">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
								</svg>
							</span>
						</div>
					</div>
					<div className="modal-body py-lg-10 px-lg-10">
							<h4>Are you sure you want to delete this question?</h4>
							<h5 className="mt-4 text-primary"><span className="badge bg-secondary me-2">1</span>The company plans to migrate several servers to Azure virtual machines. You need to identify which administr..</h5>
					</div>
					<div className="modal-footer">
						 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
						 <button type="button" className="btn btn-danger" data-bs-dismiss={isClicked? "modal" :''} onClick={()=>deleteQuestionHandler()}>Yes, delete!</button>
					 </div>
				</div>
			</div>
		</div>
		
</>);
}
export default DeleteQuestionModal