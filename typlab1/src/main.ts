import './style.css'
import type { CourseInfo } from "./course";
import { initialCourses } from "./course";

let courses: CourseInfo[] = [];

const saved = localStorage.getItem("courses");

if (saved) {
  courses = JSON.parse(saved) as CourseInfo[];
} else {
  courses = initialCourses;
}
