import { useEffect, useState} from 'react'
import { getQuestionsByPracticeTestId } from '../services/questions.service';

import { Ques } from './Ques';

const QuestionList = (props:any) => {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  useEffect(()=>{
    getQuestionsByPracticeTestId(props.practiceTestId).then((obj:any)=> {
        setAllQuestions(obj.data)
    })
  },[]);
  
  return (
    <>
      {(allQuestions.map((question:any,index:number) => <Ques question={question} serial={index} key={index+1}/>))}
      
</>
  )
}

export {QuestionList}
