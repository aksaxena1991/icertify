import { OptionModel } from "./OptionModel";

export interface QuestionModel {
    courseId: number,
      practiceTestId: number,
      questionType: string,
      question:string,
      rightOption:string,
    explaination:string,
  caseStudyId:number,
  questionStatus:string,
    exhibit:string,
    answerOptions: OptionModel[]
    
}