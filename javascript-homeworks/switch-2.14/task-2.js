/* Переписать условия "if" на "switch"
важность: 4
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */

const number = +prompt("Please enter a number between 0 and 3");

switch (number) {
	case 0:
		alert("You entered the number 0");
		break;
	case 2:
	case 3:
		alert("You entered the number 2, or maybe 3");
}