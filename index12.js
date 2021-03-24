//O(2^n) - Exponential Time
//Power Set

function pizzaFlavors(arr) {
  return arr.reduce(
    (results, elements) => {
      const concatArr = results.map((item) => `${elements}${item}`);
      return results.concat(concatArr);
    },
    [""]
  );
}

console.log(
  pizzaFlavors(["pepperoni ", "aceituna ", "jamon ", "cebolla ", "salchicha "])
);
