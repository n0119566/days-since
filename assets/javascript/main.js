/**Calculates difference between today and a specified date*/

const calcDate = document.querySelector("#calcDate");
const isToday = document.querySelector("#today");
const date = document.querySelector("#date");

// When the Calcuate button is clicked button is clicked
calcDate.addEventListener("click", () => {
  // Get difference between entered dated and todays date
  let diff = calculateDays(date.value);

  // Convert the milliseconds to days
  let days = convertMiliseconds(diff, "d");

  // Convert the input date to mm/dd/yyyy
  let formattedDate = formatDate(date.value);

  // Display on page
  document.querySelector(
    "#total"
  ).textContent = `Days since ${formattedDate}: ${days}`;
});

// Calculate difference time difference between today and passed date
function calculateDays(date) {
  return new Date() - Date.parse(date);
}

// Format a date from yyyy-mm-dd to mm/dd/yyyy
function formatDate(date) {
  let values = [];
  values = date.split("-");
  return `${values[1]}/${values[2]}/${values[0]}`;
}

// Convert milliseconds to specific format
function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  switch (format) {
    case "s":
      return total_seconds;
    case "m":
      return total_minutes;
    case "h":
      return total_hours;
    case "d":
      return days;
    default:
      return { d: days, h: hours, m: minutes, s: seconds };
  }
}
