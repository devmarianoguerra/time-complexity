// O(n log n) - Linearithmic Time
//Mergesort

function sort(array = []) {
  const arrSize = array.length;

  if (arrSize < 2) {
    return array;
  }

  if (arrSize === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
  }

  //const mid = parseInt(arrSize / 2);
  const mid = arrSize / 2;
  console.log("SORT 1: ", sort(array.slice(0, mid)));
  console.log("SORT 2:", sort(array.slice(mid)));
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}

function merge(array1 = [], array2 = []) {
  const merged = [];
  let array1Index = 0;
  let array2Index = 0;

  while (array1Index < array1.length || array2Index < array2.length) {
    if (
      array1Index >= array1.length ||
      array1[array1Index] > array2[array2Index]
    ) {
      merged.push(array2[array2Index]);
      array2Index = array2Index + 1;
    } else {
      merged.push(array1[array1Index]);
      array1Index = array1Index + 1;
    }
  }
  return `el arreglo ordenado es [${merged}]`;
}

console.log(sort([4, 2, 3, 1]));
