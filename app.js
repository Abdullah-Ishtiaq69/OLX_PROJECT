let motorPage = document.querySelectorAll(".motor");
let propertyPage = document.querySelectorAll(".property");
let homePage = document.querySelectorAll(".logo");

const navigationPage = (page , url) => {
    page.forEach((element) => {
        element.addEventListener("click" , () => {
            window.location.href = url
        });
    });
};

navigationPage(homePage , "index.html");
navigationPage(motorPage , "motor.html");
navigationPage(propertyPage , "property.html");