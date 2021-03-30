// O(n log n) - Linearithmic Time
//Mergesort

function sort(arr) {
  const length = arr.length;
  if (length == 1) {
    return a;
  } else if (length == 2) {
    // si hay 2 elementos o más los ordena según el tamaño del elemento
    // si la pos 0 del arr es mayor a la pos uno, los invierte,
    // sino los deja así
    return arr[0] > arr[1] ? [arr[1], arr[0]] : [a[0], arr[1]];
  } else {
    const halfArr = parseInt(length / 2);
    return merge(sort(arr.slice(0, halfArr)), sort(arr.slice(halfArr)));
  }
}

function merge(leftArr, rightArr) {
  const mergedArr = [];

  for (let a = 0, b = 0; a < leftArr.length || b < rightArr.length; ) {
    if (a >= leftArr || leftArr[a] > rightArr[b]) {
      mergedArr.push(rightArr[b++]);
    } else {
      mergedArr.push(leftArr[a++]);
    }
  }

  return mergedArr;
}

console.log(sort([4, 3, 2, 1]));

/*
Master Method for Recursive Algoritms
T(n) = 2T(n/2) + cn

T(n/2) = 2T(n/4) + cn/2

T(n/4) = 2T(n/8) + cn/4 

Remplazamos T(n/2) en la formula original y simplificamos
T(n) = 2[2T(n/4) + cn/2] + cn -> T(n) = 4T(n/4) + cn + cn -> T(n) = 4T(n/4) + 2cn

Remplazamos T(n/4) en la formula resultante de arriba [T(n) = 4T(n/4) + 2cn] y simplificamos.
T(n) = 4[2T(n/8) + cn/4] +2cn -> T(n) = 8T(n/8) + cn + 2cn -> T(n) = 8T(n/8) + 3cn

Esta formula [8T(n/8) + 3cn] podría seguir pero ya podemos indetificar un patrón
La variable T incrementa por 2 cada que hacemos la sustitución por lo que podríamos asignarlo como 2^K
entendiendo que podría aumentar k numero de veces
La variable (n/2) también incrementa por 2 cada vez
La variable cn incrementa por 1 cada vez y podemos asignarlo como kcn

Esto lo podems sustituir en la última formula resultante [8T(n/8) + 3cn] quedando así:
2^kT(n/2^k) + kcn

[2^kT(n/2^k)] es la parte de la función en donde dividimos el array a la mitad
[kcn] es la parte en donde hacemos el merge

Por lo tanto n = 2^k
Esto lo podemos igualar en ambos lados
log2n = log2^2^k
Si simpificamos vemos que log2^2^k al tener la misma base se elimina el numero 2 quedando
log2n = k
Y podemos replazar la k en la última ecuación resultante [2^kT(n/2^k) + kcn]
T(n)= 2^log2n T(n/2^log2n) + log2n(cn)

Simplificamos eliminando la misma base como en la formula pasada [log2n = k] quedando
T(n) = n T(n/n) + log2n(cn) -> T(n) = n T(1) + log2n(cn)

Aplicando los principios de Big O Notation a la ecuación pasada [T(n) = n T(1) + log2n(cn)] quedando
O(n log2n) - Linearithmic Time

*/
