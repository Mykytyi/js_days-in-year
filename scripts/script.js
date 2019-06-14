'use strict';

function daysInYear(year) {
  if(year % 1 > 0 || typeof year !== 'number') {
    throw 'exception';
  }
    const getLastDayOfFeb = new Date(`${year}`, `2`, `0`).getDate();
    console.log(getLastDayOfFeb > 28 ? 366 : 365);
    return getLastDayOfFeb > 28 ? 366 : 365;
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
