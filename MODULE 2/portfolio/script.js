/* =========================
   VARIABLES AND DATA TYPES
========================= */

let studentName = "Purani";
const course = "B.Tech AIDS";
let age = 19;

console.log("Student Name:", studentName);
console.log("Course:", course);
console.log("Age:", age);


/* =========================
   ARRAY
========================= */

let skills = [
    "Python",
    "Java",
    "C",
    "Full Stack Development",
    "Data Analysis"
];

console.log("Skills:", skills);


/* =========================
   OBJECT
========================= */

let student = {
    name: "Purani",
    course: "B.Tech AIDS",
    interest: "Data Science"
};

console.log("Student:", student);


/* =========================
   FUNCTION
========================= */

function showWelcomeMessage() {
    alert("Welcome to my Portfolio!");
}


/* =========================
   DOM MANIPULATION
========================= */

const heading = document.querySelector("h1");

if (heading) {
    heading.addEventListener("click", function () {
        heading.style.color = "#007bff";
    });
}


/* =========================
   EVENT HANDLING
========================= */

const image = document.querySelector("img");

if (image) {

    image.addEventListener("click", function () {
        alert("You clicked the project image!");
    });

}


/* =========================
   FORM VALIDATION
========================= */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject === "") {
            alert("Please enter a subject.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Form submitted successfully!");

        form.reset();
    });

}