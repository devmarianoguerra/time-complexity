//O(logn) - Logarithmic Time
//binary search

function linearSearch(arr, x) {
  const half = parseInt(arr.length / 2, 10);
  console.log(half);
  const mid = arr[half];
  console.log(mid);

  if (mid == x) {
    return half;
  } else if (x > mid) {
    return linearSearch(arr.slice(half), x);
  } else {
    return linearSearch(arr.slice(0, half), x);
  }
}

console.log("Respuesta: ", linearSearch([9, 6, 2, 5, 1], 1));
