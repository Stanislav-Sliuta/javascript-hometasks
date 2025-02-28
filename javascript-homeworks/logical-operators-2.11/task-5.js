/* Проверка логина
важность: 3
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене или в случае если ничего не введено – «Отменено». */

let login = promt("Enter your login");
let pass;

if (login == "Admin") {
	pass = promt("Password?");

	if (pass == "I'm the boss") {
		alert("Hello!");
	} else if (pass == null || pass == "") {
		alert("Cancel");
	} else {
		alert("Wrong password");
	}
} else if (login == null) {
	alert("Cancel");
} else {
	alert("I don't know you");
}