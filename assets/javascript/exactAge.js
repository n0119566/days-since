/**
 * Exact Age
 *
 * Calculates the exact age for a given inputDate with JavaScript.
 * This solution accounts for leap years and various days in each month.
 * 
 * Base code courtesy of Kevin Leary - https://www.kevinleary.net/blog/javascript-age-birthdate-mm-dd-yyyy/
 */

/**
 * Determines if a given year is a leap year
 * @param {number} year - The year to check
 * @returns {boolean} - True if the year is a leap year, false otherwise
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Gets the number of days in a specific month for a given year
 * @param {number} year - The year (needed for February in leap years)
 * @param {number} month - The month (0-11, where 0 = January)
 * @returns {number} - Number of days in the month
 */
function getDaysInMonth(year, month) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // February in leap years has 29 days
  if (month === 1 && isLeapYear(year)) {
    return 29;
  }
  
  return daysInMonth[month];
}

/**
 * Normalizes a date string to a Date object at midnight UTC
 * @param {string} dateString - Date string in various formats
 * @returns {Date} - Normalized Date object
 */
function normalizeDate(dateString) {
  return new Date(new Date(dateString).toISOString().substr(0, 10));
}

function exactAge(inputStartDate, inputEndDate) {
  // Normalize input dates to ensure consistent behavior
  let startDate = normalizeDate(inputStartDate);
  let endDate = normalizeDate(inputEndDate);

  // Ensure startDate is always before endDate by swapping if necessary
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  // Calculate initial differences
  let yearDifference = endDate.getFullYear() - startDate.getFullYear();
  let monthDifference = endDate.getMonth() - startDate.getMonth();
  let dayDifference = endDate.getDate() - startDate.getDate();

  // Adjust for negative month difference
  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  // Adjust for negative day difference
  if (dayDifference < 0) {
    if (monthDifference > 0) {
      monthDifference--;
    } else {
      // No months to borrow from, so borrow from years
      yearDifference--;
      monthDifference = 11;
    }
    // Add the days from the previous month
    dayDifference += getDaysInMonth(startDate.getFullYear(), startDate.getMonth());
  }

  return {
    years: yearDifference,
    months: monthDifference,
    days: dayDifference,
  };
}
