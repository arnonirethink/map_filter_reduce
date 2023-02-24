//1 - Transforme os números em strings.
//function total(arr) {
// ...
//}

//resolução

const total = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(total([1, 2, 3])); // 6
