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

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const newCourse: CourseInfo = {
    code: codeInput.value,
    name: nameInput.value,
    progression: progressionInput.value as "A" | "B" | "C",
    syllabus: syllabusInput.value
  };

  if (courses.some(c => c.code === newCourse.code)) {
    alert("Kurskod finns redan!");
    return;
  }

  courses.push(newCourse);
  saveCourses();
  renderCourses();
  form.reset();
});

function removeCourse(code: string): void {
  courses = courses.filter(c => c.code !== code);
  saveCourses();
  renderCourses();
}

function saveCourses(): void {
  localStorage.setItem("courses", JSON.stringify(courses));
}

renderCourses();