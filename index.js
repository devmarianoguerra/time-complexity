// O(1) - Constant Time
function pares(n) {
  console.log(n % 2);
  return n % 2 ? `El número ${n} es impar` : `El número ${n} es par`;
}

console.log(pares(12));
// console.log(pares(7));
