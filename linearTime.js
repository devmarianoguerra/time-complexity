// O(n) - Linear Time

function menorNum(arr) {
  let min = arr[0];

  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  return console.log(`El número menor del arreglo es ${min}`);
}

menorNum([3, 7, 2, 5]);
