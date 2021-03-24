// O(n^2) - Quadratic Time
function duplicados(arr) {
  const duplicates = [];
  let count = 0;

  for (let o = 0; o < arr.length; o++) {
    for (let i = 0; i < arr.length; i++) {
      count++;
      if (o === i) continue;

      if (arr[o] === arr[i]) {
        return true;
      }
    }
  }
  console.log(`arr: ${arr.length}, count: ${count}`);
  return false;
}

duplicados([1, 2, 3, 4]);
duplicados([1, 2, 3, 4, 5]);
duplicados([1, 2, 3, 4, 5, 6, 7, 8, 9]);
