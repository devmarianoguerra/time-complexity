// O(n) - Linear Time

function maxNum(arr) {
  let max = 0;
  let count = 0;

  for (let n = 0; n < arr.length; n++) {
    count++;
    if (max < arr[n]) {
      max = arr[n];
    }
  }

  return console.log(`El número máximo es ${max}. Count: ${count}`);
}

maxNum([2, 8, 3, 6]);
