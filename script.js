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

console.log(money);
console.log(time);

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

chooseExpenses();

/*
let i = 0;

while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
  appData.expenses[a] = b;
  console.log("done");
  i++;
}

do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
  appData.expenses[a] = b;
  console.log("done");
  i++;
} while (i < 2);
*/
console.log(appData.expenses);


appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("бюджет на день: " + appData.moneyPerDay);

console.log(appData.moneyPerDay);
/*
switch (appData.moneyPerDay) {
  case appData.moneyPerDay < 100: 
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

if (appData.moneyPerDay < 100) {
  console.log("Минимальный доход");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний доход");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий доход");
} else {
  console.log("something goes wrong");
}

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
    
    appData.monthIncome = save / 12 * percent / 100;
    alert("Доход в месяц с депозита: " + appData.monthIncome);
  }
}

checkSavings();