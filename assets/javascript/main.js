/**Calculates difference between today and a specified date*/

const calcDate = document.querySelector("#calcDate");
const isToday = document.querySelector("#today");
const endDate = document.querySelector("#endDate");
const startDate = document.querySelector("#startDate");

// When the Calcuate button is clicked button is clicked
calcDate.addEventListener("click", () => {
  let end = endDate.value;
  let start = startDate.value;

  // Get difference between entered dated and todays date in milliseconds
  const exactTime = exactAge(start, end);

  // Convert the input string date to mm/dd/yyyy
  end = formatDate(end);
  start = formatDate(start);

  // Print out the results
  document.querySelector(
    "#total"
  ).textContent = `It is ${exactTime.years} year(s), ${exactTime.months} month(s), and ${exactTime.days} day(s) between ${start} and ${end}`;
});

// Wait for page to load and set default dates of 3/27/2023 and today
document.addEventListener("DOMContentLoaded", () => {
  startDate.value = "2023-03-27";
  endDate.value = new Date().toISOString().split("T")[0];
});

// Calculate difference time difference between today and passed date
function calculateDays(startDate, endDate) {
  return Date.parse(startDate) - Date.parse(endDate);
}

// Format a date string from yyyy-mm-dd to mm/dd/yyyy
function formatDate(date) {
  let values = [];
  values = date.split("-");
  return `${values[1]}/${values[2]}/${values[0]}`;
}
