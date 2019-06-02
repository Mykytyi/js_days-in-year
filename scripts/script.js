'use strict';

function daysInYear(year) {
  try {
    if(year % 1 > 0 || typeof year !== 'number') {
      throw 'exception';
    } else {
      const getLastDayOfFeb = new Date(`${year}`, `2`, `-1`).getDate();
      return getLastDayOfFeb > 27 ? 366 : 365;
    }
  }
  catch(error) {
    console.log(error);
  }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
