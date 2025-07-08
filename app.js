// page navigation

let motorPage = document.querySelectorAll(".motor");
let propertyPage = document.querySelectorAll(".property");
let homePage = document.querySelectorAll(".logo");

const navigationPage = (page, url) => {
    page.forEach((element) => {
        element.addEventListener("click", () => {
            window.location.href = url
        });
    });
};

navigationPage(homePage, "index.html");
navigationPage(motorPage, "motor.html");
navigationPage(propertyPage, "property.html");

// login or signup text change

let loginHeading = document.getElementById("login-heading");
let loginText = document.getElementById("login-text");

let isChanged = false;

const changeText = () => {
    loginHeading.innerText = "Create a new OLX account";
    loginText.innerText = "Already have an account? Log in"
    isChanged = true
}

const resetText = () => {
    loginHeading.innerText = "Login into your OLX account";
    loginText.innerText = "New to OLX? Create an account";
    isChanged = false;
}

loginText.addEventListener("click", () => {
    if (!isChanged) {
        changeText();
    } else {
        resetText();
    }
})

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") || e.target.classList.contains("btn-close")) {
        resetText();
    }
})