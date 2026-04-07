/* ----- Basketball Game info Buton ------------------------*/
const btn = document.getElementById("basketBtn");
const details = document.getElementById("basketDetails");

btn.addEventListener("click", function() {
    if (details.style.display === "none") {
        details.style.display = "block";
        btn.textContent = "Hide Details";  
    } else {
        details.style.display = "none";
        btn.textContent = "View Details"
    }

});

/* ----- Study Night info Buton ------------------------*/
const studyBtn = document.getElementById("studyBtn");
const studyDetails = document.getElementById("studyDetails");

studyBtn.addEventListener("click", function() {
    if (studyDetails.style.display === "none") {
        studyDetails.style.display = "block";
        studyBtn.textContent = "Hide Details";
    } else {
        studyDetails.style.display = "none";
        studyBtn.textContent = "View Details";
    }
});

/* ---- Make your own Piza info Buton --------------------*/
const pizzaBtn = document.getElementById("pizzaBtn");
const pizzaDetails = document.getElementById("pizzaDetails");

pizzaBtn.addEventListener("click", function() {
    if (pizzaDetails.style.display === "none") {
        pizzaDetails.style.display = "block";
        pizzaBtn.textContent = "Hide Details";
    } else {
        pizzaDetails.style.display = "none";
        pizzaBtn.textContent = "View Details";
    }
});