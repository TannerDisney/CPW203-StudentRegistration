/**
 * Represents a CPTC Student.
 */
class Student
{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}
/*
    // Test Code
    let testStu:Student = new Student();
    testStu.firstName = "Tanner";
    testStu.lastName = "Disney";
    testStu.dateOfBirth = new Date(1999, 12, 9);
    // BirthDate: December 9th, 1999
    // Date Parameters (year, month, day, hours, minutes, seconds, milliseconds)
*/

window.onload = function()
{
    let regBtn = <HTMLElement>document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent()
{
    if(isValid())
    {
        let nextStudent:Student = getStudent();
        displayStudent(nextStudent);
    }
}

function isValid():boolean
{
    let reqElems = document.querySelectorAll("main > input[data-required]");
    let valid = true;
    for (let i = 0; i < reqElems.length; i++) 
    {
        let currInput = <HTMLInputElement>reqElems[i];
        if(currInput.value.trim() == "")
        {
            let span = currInput.nextElementSibling;
            let errMsg = span.getAttribute("data-msg");
            span.innerHTML = errMsg;
            valid = false;
        }
    }
    return valid;
}

function getStudent():Student
{
    let fetchStudent = new Student();

    fetchStudent.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    fetchStudent.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;
    // TODO: Get date of birth
    return fetchStudent;
}

function displayStudent(student:Student)
{
    // console.log(student.firstName + " " + student.lastName);
    // <li> </li>
    let studentLI:HTMLLIElement = document.createElement("li");
    // <li>J. Doe</li>
    studentLI.innerText = student.firstName + " " + student.lastName;

    studentLI.onclick = function()
    {
        let agree = confirm("Are you sure you want delete?");
        if(agree)
        {
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
    }
    
    //getting <ul> and appending the new <li>
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}