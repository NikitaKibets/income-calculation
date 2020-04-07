let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
};
// start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
      let b = prompt("Во сколько это обойдётся?", "");

      if (typeof a === "string" && typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50) {
        console.log(a, b);
        appData.expenses[a] = b;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("min");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("norm");
    } else if (appData.moneyPerDay > 2000) {
      console.log("good");
    } else {
      console.log("error");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let z = prompt("Введите статью необязательных расходов в этом месяце?", "");

      if (typeof z === "string" && typeof z != null && z != "" && z.length < 50) {
        console.log(z);
        appData.optionalExpenses[i] = z;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую без пробелов)', '');
    while (items === '' || items === 'string' || items === null) {
      items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую без пробелов)', "");
    }
    appData.income = items.split(',');
    appData.income.push(prompt('может что то ещё?'));
    appData.income.sort();
    appData.income.forEach(element => alert('Способы доп. заработка: ' + element));
  },

};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key);
}
