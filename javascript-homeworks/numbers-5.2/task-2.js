/* Почему 6.35.toFixed(1) == 6.3?
важность: 4
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4

Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3

Как правильно округлить 6.35? */

alert(Math.round(6.35 * 10) / 10);