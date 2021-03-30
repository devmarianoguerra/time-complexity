//O(n!) - Factorial Time

function permutation(string, prefix = "") {
  if (string.length === 1) {
    return [prefix + string];
  }

  return Array.from(string).reduce((result, currentElement, index) => {
    const reminder = string.slice(0, index) + string.slice(index + 1);
    console.log("INDEX: ", index);
    console.log("RESULT: ", result);
    console.log("CURRENT ELEMENT: ", prefix + currentElement);
    console.log("REMINDER: ", reminder);

    return result.concat(permutation(reminder, prefix + currentElement));
  }, []);
}

console.log(permutation("art"));
