export interface CourseInfo {
    code: string;            
    name: string;             
    progression: 'A' | 'B' ; 
    syllabus: string;          
}

export const initialCourses: CourseInfo[] = [
    {
        code: "DT208G",
        name: "Programmering i TypeScript",
        progression: 'B',
        syllabus: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/"
    },
    {
        code: "DT207G",
        name: "Backend-baserad webbutveckling",
        progression: 'B',
        syllabus: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/"
    }
];