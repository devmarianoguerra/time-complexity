// O(1) - Constant Time
const dictionary = {
  the: 22038615,
  be: 12545825,
  and: 10741073,
  og: 10343885,
  a: 10144200,
  in: 6996437,
  to: 6332195,
};

function frecuenciaDePalabra(dictionary, palabra) {
  return `La palabra '${palabra}' se repite ${dictionary[palabra]}`;
}

console.log(frecuenciaDePalabra(dictionary, "the"));
console.log(frecuenciaDePalabra(dictionary, "in"));
