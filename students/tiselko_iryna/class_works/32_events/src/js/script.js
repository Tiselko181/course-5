import createFormValidation from './formValidation/createFormValidation.js';

const addStudentForm = document.querySelector('.add-student-form')

createFormValidation(addStudentForm, createCourse);

function createCourse(data) {
    const courseData = Object.fromEntries([...data]);
    console.log(createCourse);
}
