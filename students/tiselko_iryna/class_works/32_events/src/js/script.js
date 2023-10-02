import changeSpeakers from './changeSpeakers.js';
import createTemplate from './createTemplate.js';
import createFormValidation from './formValidation/createFormValidatio.js';
import { addStudentClassName, removeCourseClassName } from './vars/variabels.js';
import addStudent from './addStudent.js';

const addStudentForm = document.querySelector('.add-student-form');
const courseListElement = document.querySelector('.course-list tbody');
let courseList = [];
let courseId = 0;

changeSpeakers(addStudentForm);

createFormValidation(addStudentForm, createCourse);

function createCourse(data) {
    const courseData = Object.fromEntries([...data]);

    courseData.id = ++courseId;
    courseData.studentsList = [];
    courseList.push(courseData);

    courseListElement.insertAdjacentHTML('beforeend', createTemplate(courseData));

    console.log(courseList);
}

courseListElement.addEventListener('click', function (e) {
    const addStudentBtn = e.target.closest(`.${addStudentClassName}`);
    const removeCourseBtn = e.target.closest(`.${removeCourseClassName}`);

    if (addStudentBtn) {
        addStudents(addStudentBtn);
    }

    if (removeCourseBtn) {
        removeCourse(removeCourseBtn);
        removeCourseHtml(removeCourseBtn);
    }


});

function removeCourse(removeCourseBtn) {
    const couseId = getDataAttrIdCourse(removeCourseBtn);

    courseList = courseList.filter((course) => course.id !== couseId);

    console.log(courseList);
}

function removeCourseHtml(removeCourseBtn) {
    const courseWrapper = removeCourseBtn.closest('tr.inner-box');

    if (courseWrapper) courseWrapper.remove();
}

function addStudents(addStudentBtn) {
    const courseId = getDataAttrIdCourse(addStudentBtn);
    const course = findCourseById(courseId);
    const student = prompt('Add students', 'Petya');

    course.studentsList.push(student);

    const studentHtml = addStudent(student, course.studentsList.length - 1, courseId);

    addStudentHtml(studentHtml, addStudentBtn);
}

function addStudentHtml(html, addStudentBtn) {
    const studentsListUl = addStudentBtn.closest('td')?.querySelector('.students-list');

    studentsListUl.insertAdjacentHTML('beforeend', html);
}

function findCourseById(id) {
    return courseList.find((course) => course.id === id);
}

function getDataAttrIdCourse(element) {
    return +element.dataset.courseId;
}
