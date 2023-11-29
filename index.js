const importAddDays = require("date-fns/addDays");
module.exports = function (days) {
  const addDays = importAddDays(new Date(2020, 7, 22), days);
  console.log(
    `${addDays.getDate()}-${addDays.getMonth() + 1}-${addDays.getFullYear()}`
  );
};
