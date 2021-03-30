//O(2^n) - Exponential Time
//Power Set

function powerSet(n = "") {
  const arr = Array.from(n);
  console.log("ARRAY: ", arr);
  const base = [""];

  const options = arr.reduce((acumArr, item) => {
    console.log("Accummulated array: ", acumArr);
    console.log("ITEM: ", item);
    const nextElement = acumArr.map((element) => {
      return `${element}${item}`;
    });
    console.log("NEXT ELEMENT: ", nextElement);
    return acumArr.concat(nextElement);
  }, base);

  return options;
}

console.log(powerSet("abc"));
