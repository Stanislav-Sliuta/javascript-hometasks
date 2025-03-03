/* Название JavaScript
важность: 2
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

let question = prompt("What is the «official name» of JavaScript?")

if (question == "ECMAScript") {
	alert("Correctly!");
} else {
	alert("You don't know? ECMAScript!");
}