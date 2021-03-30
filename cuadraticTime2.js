// O(n^2) - Quadratic Time
// Bubble sort

function ordenar(arr) {
  for (let o = 0; o < arr.length; o++) {
    let outer = arr[o];
    //console.log("outer: ", outer);

    for (let i = 0; i < arr.length; i++) {
      let inner = arr[i];
      //console.log("inner: ", inner);

      if (outer > inner) {
        arr[o] = inner;
        arr[i] = outer;

        outer = arr[o];
        inner = arr[i];
      }
    }
  }

  return arr;
}

ordenar([5, 7, 2, 1, 4]);
