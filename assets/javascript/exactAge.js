/**
 * Exact Age
 *
 * Calculates the exact age for a given inputDate with JavaScript.
 * This solution accounts for leap years and various days in each month.
 * 
 * Base code courtesy of Kevin Leary - https://www.kevinleary.net/blog/javascript-age-birthdate-mm-dd-yyyy/
 */
function exactAge(inputStartDate, inputEndDate) {
  let startDate = new Date(new Date(inputStartDate).toISOString().substr(0, 10));
  let endingDate = new Date(new Date(inputEndDate).toISOString().substr(0, 10));

  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();

  // Leap years
  const february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  let dayDiff = endDate.getDate() - startDate.getDate();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  return {
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
  };
}
