let money = +prompt("Ваш бюджет на месяц?", "");
let time = +prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
let b = prompt("Во сколько это обойдётся?", "");

while (typeof a === 'string') {
  a = prompt('Введите обязательную статью расходов в этом месяце?', "");
  b = prompt("Во сколько это обойдётся?", "");
  console.log(a, b);
  appData.expenses[a] = b;
  if (typeof a === null || a === '' || typeof b === null || b === '') break;
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("min");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("norm");
} else if (appData.moneyPerDay > 2000) {
  console.log("good");
} else {
  console.log("error");
}
