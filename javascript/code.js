class Student {
}
window.onload = function () {
    let regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    let nextStudent = getStudent();
    displayStudent(nextStudent);
}
function getStudent() {
    let s = new Student();
    s.firstName = document.getElementById("first-name").value;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(student) {
    console.log(student.firstName + " " + student.lastName);
}
