/**Calculates difference between today and a specified date*/

const calcDate = document.querySelector("#calcDate");
const isToday = document.querySelector("#today");
const date = document.querySelector("#date");
const startDate = document.querySelector("#startDate");


// When the Calcuate button is clicked button is clicked
calcDate.addEventListener("click", () => {
  let end = date.value;
  let start = startDate.value;

  const exactTime = exactAge(start, end);

  // Get difference between entered dated and todays date in milliseconds
  let diff = calculateDays(date.value);

  // Figure out if its a future date or not
  let isFutureDate = diff < 0 ? true : false;

  // Convert the input string date to mm/dd/yyyy
  let formattedDate = formatDate(date.value);

  // Display on page based on whether its a future or past date
  if (!isFutureDate) {
    document.querySelector(
      "#total"
    ).textContent = `It has been ${exactTime.years} year(s), ${exactTime.months} month(s), and ${exactTime.days} day(s) since ${formattedDate}`;
  } else {
    document.querySelector(
      "#total"
    ).textContent = `It is ${exactTime.years} year(s), ${exactTime.months} month(s), and ${exactTime.days} day(s) until ${formattedDate}`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  startDate.value = "2023-03-27";
  date.value = new Date().toISOString().split('T')[0];
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