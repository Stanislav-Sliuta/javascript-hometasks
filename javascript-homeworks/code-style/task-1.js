/* Плохой стиль
важность: 4
Какие недостатки вы видите в стиле написания кода этого примера?

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
} */

function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
	alert(`Power ${n} is not supported,
		enter an integer power greater than 0`);
} else {
	alert( pow(x, n) );
}