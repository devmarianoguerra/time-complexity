function primo(n) {
  for (x = 2; x * x <= n; x++) {
    console.log("N: ", n);
    console.log("X: ", x);
    if (n % x == 0) {
      return "falso";
    } else {
      return "verdadero";
    }
  }
}

console.log(primo(5));
