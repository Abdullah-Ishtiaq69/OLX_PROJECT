let motorPage = document.querySelectorAll(".motor");
let propertyPage = document.querySelectorAll(".property");
let homePage = document.querySelectorAll(".logo");

// Page Navigation function
const navigationPage = (page , url) => {
    page.forEach((element) => {
        element.addEventListener("click" , () => {
            window.location.href = url
        });
    });
};

// Page Navigation function
navigationPage(homePage , "index.html");
navigationPage(motorPage , "motor.html");
navigationPage(propertyPage , "property.html");