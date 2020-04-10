let money, time;

let startBtn = document.getElementById('start'),
	budget = document.querySelector('.budget'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudget = document.querySelector('.daybudget'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	level = document.querySelector('.level'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	expensesItemInput = document.getElementsByClassName('expenses-item'),
	expensesItemBtn = document.querySelector('.expenses-item-btn'),
	countBudgetBtn = document.querySelector('.count-budget-btn'),
	optionalExpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	chooseIncome = document.querySelector('.choose-income'),
	checkbox = document.getElementById('savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');


startBtn.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () { 	// Обязательные расходы
	if (appData.budget == undefined || appData.budget == '') {
		expensesItemBtn.disabled = true;
	}

	let sum = 0;
	for (let i = 0; i < expensesItemInput.length; i++) {
		let a = expensesItemInput[i].value;
		let b = expensesItemInput[++i].value;

		if (typeof a === "string" && typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i = i - 1;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {  	// Необязательные расходы
	if (appData.budget == undefined || appData.budget == '') {
		optionalExpensesBtn.disabled = true;
	}

	for (let i = 0; i <= optionalExpensesItemInput.length - 1; i++) {
		let opt = optionalExpensesItemInput[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBudgetBtn.addEventListener('click', function () {		// Рассчитать бюджет кнопка на день
	if (appData.budget != undefined) {

		let num = expensesValue.textContent;  // сумма обязательных затрат
		appData.moneyPerDay = ((appData.budget - num) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "min";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "norm";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "good";
		} else {
			levelValue.textContent = "error";
		}
	} else {
		dayBudgetValue.textContent = 'Ошибка';
	}
});

chooseIncome.addEventListener('input', function () {
	let items = chooseIncome.value;
	appData.income = items.split(',');
	incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value;
		let percent = +choosePercent.value;

		appData.monthIncome = +sum / 100 / 12 * percent;
		appData.yearhIncome = +sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value;
		let percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};

