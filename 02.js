//exercicio
//function stringConcat(arr) {
// ...
//}

//resolução

const stringConcat = (arr) =>
  arr.reduce((acc, num) => acc + num.toString(), "");

console.log(stringConcat([1, 2, 3])); // "123"
