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

const form = document.querySelector<HTMLFormElement>("#courseForm")!;
const codeInput = document.querySelector<HTMLInputElement>("#code")!;
const nameInput = document.querySelector<HTMLInputElement>("#name")!;
const progressionInput = document.querySelector<HTMLSelectElement>("#progression")!;
const syllabusInput = document.querySelector<HTMLInputElement>("#syllabus")!;
const list = document.querySelector<HTMLDivElement>("#courseList")!;