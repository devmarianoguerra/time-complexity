//O(logn) - Logarithmic Time
//Binary Search

const names = [
  "Adrian",
  "Bella",
  "Charlotte",
  "Daniel",
  "Emma",
  "Hanna",
  "Isabella",
  "Jayden",
  "Kaylee",
  "Luke",
  "Mia",
  "Nora",
  "Olivia",
  "Paisley",
  "Riley",
  "Thomas",
  "Wyatt",
  "Xander",
  "Zoe",
];

function indexOF(array, element, offset = 0) {
  console.log("Element: ", element);
  //split array in half
  const halfArr = parseInt(array.length / 2);
  console.log("Half Array Position: ", halfArr);
  const currentPosition = array[halfArr];
  console.log("Current Position: ", currentPosition);

  if (currentPosition === element) {
    return offset + halfArr;
  } else if (element > currentPosition) {
    const right = array.slice(halfArr);
    console.log("right side: ", right);
    return indexOF(right, element, offset + halfArr);
  } else {
    const left = array.slice(0, halfArr);
    console.log("left side: ", left);
    return indexOF(left, element, offset);
  }
}

console.log(indexOF(names, "Thomas"));
