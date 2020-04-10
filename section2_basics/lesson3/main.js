let money, time;


function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
};
start();


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};


function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
    let b = prompt("Во сколько это обойдётся?", "");

    if (typeof a === "string" && typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50) {
      console.log(a, b);
      appData.expenses[a] = b;
    }
  }
}
chooseExpenses();


function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let z = prompt("Введите статью необязательных расходов в этом месяце?", "");

    if (typeof z === "string" && typeof z != null && z != "" && z.length < 50) {
      console.log(z);
      appData.optionalExpenses[i] = z;
    }
  }
}
chooseOptExpenses();


function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
  return appData.moneyPerDay;
}
detectDayBudget();


function detectLevel(a) {
  if (a < 100) {
    console.log("min");
  } else if (a > 100 && a < 2000) {
    console.log("norm");
  } else if (a > 2000) {
    console.log("good");
  } else {
    console.log("error");
  }
}
detectLevel(detectDayBudget);


function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с депозита: ' + appData.monthIncome);
  }
}
checkSavings();

