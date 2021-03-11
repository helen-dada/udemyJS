let time, 
    money;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a.length < 50 && a != '' && b != '') {
        appData.expenses[a] = b;
        console.log("done");
    } else {
        console.log("пользователь упрямится");
        alert("Введите обязательную статью расходов!");
        i--;
    } 
  }
}

function detectDayBudget() {
  appData.moneyPerDay = appData.budget / 30;
  alert("бюджет на день: " + appData.moneyPerDay.toFixed());
}

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный доход");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний доход");
  } else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий доход");
  } else {
    console.log("something goes wrong");
  }
}

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
    
    appData.monthIncome = save / 12 * percent / 100;
    alert("Доход в месяц с депозита: " + appData.monthIncome);
  }
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let a = prompt("Статья необязательных расходов?", '');
    appData.optionalExpenses[i + 1] = a;
  }
}

detectDayBudget();
detectLevel();
/*
switch (appData.moneyPerDay) {
  case appData.moneyPerDay < 100: //не работает, потому что условие должно быть (true), а не переменная
    console.log("Минимальный доход");
    break;
  case appData.moneyPerDay > 100: 
    console.log("Средний доход");
    break;    
  default:
    console.log('something wrong');
    break;
}
*/