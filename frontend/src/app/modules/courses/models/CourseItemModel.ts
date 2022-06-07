import { CourseDetailsModel } from "./CourseDetailsModel";
import { CourseModel } from "./CourseModel";
import { PracticeTestModel } from "./PracticeTestModel";

export interface CourseItemModel {
    course: CourseModel,
    details:CourseDetailsModel,
    test:PracticeTestModel[],
}