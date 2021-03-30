// O(n^c) - Polynomial Time
// Triple nested loops O(n^3)

// find the solution for 3x + 9y +8z = 79

function findXYZ(number) {
  const solution = [];

  for (let x = 0; x < number; x++) {
    for (let y = 0; y < number; y++) {
      for (let z = 0; z < number; z++) {
        if (3 * x + 9 * y + 8 * z === 79) {
          solution.push({ x, y, z });
        }
      }
    }
  }

  return solution;
}

console.log(findXYZ(10));
