/*Вопрос об "if"
важность: 5
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)? */

if (-1 || 0) alert( 'first' ); 
if (-1 && 0) alert( 'second' ); 
if (null || -1 && 1) alert( 'third' );

/* Выполнятся 1 и 3
В первом результат (if) = -1, что равняется true и alert будет выведен
Во втором оператор "И" выведет первое значение false, а именно 0 и alert не будет выведен
В третьем выражении, вычисление -1 && 1 выполднится первым из-за приоритета оператора и будет равно -1, соответственно alert будет выведен */