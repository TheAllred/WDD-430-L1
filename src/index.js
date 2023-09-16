var year = new Date().getFullYear().toString();
var yearDiv = document.querySelector("#year");
if (yearDiv) {
    yearDiv.textContent = year;
}
