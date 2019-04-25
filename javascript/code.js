class Student {
}
window.onload = function () {
    let regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    if (isValid()) {
        let nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    let reqElems = document.querySelectorAll("main > input[data-required]");
    let valid = true;
    for (let i = 0; i < reqElems.length; i++) {
        let currInput = reqElems[i];
        if (currInput.value.trim() == "") {
            let span = currInput.nextElementSibling;
            let errMsg = span.getAttribute("data-msg");
            span.innerHTML = errMsg;
            valid = false;
        }
    }
    return valid;
}
function getStudent() {
    let fetchStudent = new Student();
    fetchStudent.firstName = document.getElementById("first-name").value;
    fetchStudent.lastName = document.getElementById("last-name").value;
    return fetchStudent;
}
function displayStudent(student) {
    let studentLI = document.createElement("li");
    studentLI.innerText = student.firstName + " " + student.lastName;
    studentLI.onclick = function () {
        let agree = confirm("Are you sure you want delete?");
        if (agree) {
            let currItem = this;
            currItem.remove();
        }
    };
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
