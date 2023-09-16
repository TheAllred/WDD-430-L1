let year: string = new Date().getFullYear().toString();

let yearDiv = document.querySelector("#year");

if (yearDiv) {
  yearDiv.textContent = year;
}
