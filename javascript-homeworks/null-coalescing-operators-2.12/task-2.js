/* Какой будет результат выполнения этого кода?
важность: 3
Что будет выведено в итоге? */

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); // Берлин, в первом присваивается Берлин и далее все действия не имеют смысла