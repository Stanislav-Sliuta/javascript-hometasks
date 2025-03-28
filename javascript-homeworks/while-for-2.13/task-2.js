/* Какие значения выведет цикл while?
важность: 4
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет? */

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert( i ); // от 1 до 4

// Постфиксный вариант i++:

let s = 0;
while (s++ < 5) alert( s ); // от 1 до 5, так как в этом случае сначала происходит проверка условия, а потом увеличение на 1