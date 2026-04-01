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

function renderCourses(): void {
  list.innerHTML = "";

  courses.forEach(course => {
    const div = document.createElement("div");

    div.innerHTML = `
      <strong>${course.code}</strong> - ${course.name} (${course.progression})
      <a href="${course.syllabus}" target="_blank">Kursplan</a>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Ta bort";

    btn.addEventListener("click", () => {
      removeCourse(course.code);
    });

    div.appendChild(btn);
    list.appendChild(div);
  });
}

renderCourses();