/* Перепишите 'if..else' в '?'
важность: 5
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let massage;

massage = (login == "Employee")
	? "Hello"
	: (login == "Director")
	? "Hello"
	: (login == "")
	? "No login"
	: "";