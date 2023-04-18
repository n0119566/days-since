/**Calculates difference between today and a specified date*/

const calcDate = document.querySelector("#calcDate");
const isToday = document.querySelector("#today");
const date = document.querySelector("#date");

// When the Calcuate button is clicked button is clicked
calcDate.addEventListener("click", () => {
  // Get difference between entered dated and todays date in milliseconds
  let diff = calculateDays(date.value);

  // Figure out if its a future date or not
  let isFutureDate = diff < 0 ? true : false;

  // Convert the milliseconds to days - use this if you want to just display days
  let days = convertMiliseconds(diff, "d");

  // this returns array with days, weeks, years - doesnt use months because of variability
  let dates = altConvertMiliseconds(diff);

  // Convert the input date to mm/dd/yyyy
  let formattedDate = formatDate(date.value);

  // Display on page based on whether its a future or past date
  if (!isFutureDate) {
    document.querySelector(
      "#total"
    ).textContent = `It has been ${dates[0]} years, ${dates[1]} weeks, and ${dates[2]} days since ${formattedDate}`;
  } else {
    document.querySelector(
      "#total"
    ).textContent = `It is ${dates[0]} years, ${dates[1]} weeks, and ${dates[2]} days until ${formattedDate}`;
  }
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
  let days,
    hours,
    minutes,
    seconds,
    total_hours,
    total_minutes,
    total_seconds,
    weeks,
    years;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));
  weeks = parseInt(Math.floor(days / 7));
  years = parseInt(Math.floor(days / 365));

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
      return { y: years, w: weeks, d: days, h: hours, m: minutes, s: seconds };
  }
}

// Convert milliseconds to specific format
function altConvertMiliseconds(miliseconds) {
  // Account for future dates
  if (miliseconds < 1) {
    miliseconds *= -1;
  }
  let days,
    weeks,
    total_days,
    total_hours,
    total_minutes,
    total_seconds,
    total_weeks,
    years;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  total_days = parseInt(Math.floor(total_hours / 24));
  total_weeks = parseInt(Math.floor(total_days / 7));
  years = parseInt(Math.floor(total_days / 365));
  console.log(miliseconds);
  weeks = Math.floor((total_days - years * 365) / 7);
  days = total_days - years * 365 - weeks * 7;
  console.log(total_days);
  console.log(`${years} ${weeks} ${days}`);

  return [years, weeks, days];
}
