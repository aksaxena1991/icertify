import { QuestionModel } from "./QuestionModel";

export interface PracticeTestModel {
    courseId: number,
      testTitle: string,
      duration: number,
      percentage:number,
      isRandom:boolean,
    testStatus:string,
    isPublished:boolean,
    isLive:boolean,
    questions: QuestionModel[]
    
}