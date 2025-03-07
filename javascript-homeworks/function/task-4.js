/* Функция pow(x,n)
важность: 4
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше. */

let x = prompt('Enter the number "x"');
let n = prompt('Enter the number "n"');

function pow(x, n) {
	let result = x;
	for (let i = 1; i < n; i++) {
		result = result * x;
	}
	return result;
}

if (n >= 1 && n % 1 == 0) {
	alert( pow(x, n) );
} else {
	alert(`Power ${n} is not supported, use a natural number`)
}