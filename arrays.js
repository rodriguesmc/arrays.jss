//
let array1 = [1, 2, 3, 4];
array1.push(5);
console.log(array1); // [1, 2, 3, 4, 5]

let array2 = [10, 20, 30, 40];
array2.pop();
console.log(array2); // [10, 20, 30]

let array3 = [5, 10, 15, 20];
array3.shift();
console.log(array3); // [10, 15, 20]

let array4 = [1, 2, 3];
array4.unshift(0);
console.log(array4); // [0, 1, 2, 3]

let array5 = [10, 20, 30, 40];
array5[2] = "novo";
console.log(array5); // [10, 20, "novo", 40]

let array6 = [10, 20, 30, 40];
let novoArray = array6.slice(1, 3);
console.log(novoArray); // [20, 30]

let array7 = [1, 2, 3];
let array8 = [4, 5, 6];
let novoArray2 = array7.concat(array8);
console.log(novoArray2); // [1, 2, 3, 4, 5, 6]

let array9 = [10, 20, 30];
array9.forEach(num => console.log(num)); // 10, 20, 30

let array10 = [2, 4, 6];

let novoArray3 = array10.map(num => num * 3);
console.log(novoArray3); // [6, 12, 18]

let array11 = [1, 2, 3, 4, 5, 6];
let pares = array11.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6]

let array12 = [1, 2, 3, 4];
let soma = array12.reduce((acc, num) => acc + num, 0);
console.log(soma); // 10

let array13 = [5, 10, 15, 20];
let maiorQue10 = array13.find(num => num > 10);
console.log(maiorQue10); // 15

let algumMaiorQue3 = array14.some(num => num > 3);
console.log(algumMaiorQue3); // true

let array15 = [2, 4, 6];
let todosPares = array15.every(num => num % 2 === 0);
console.log(todosPares); // true

let array16 = [10, 20, 30, 40];
let indice20 = array16.indexOf(20);
console.log(indice20); // 1

let contem5 = array17.includes(5);
console.log(contem5); // false

let array18 = [4, 2, 3, 1];
array18.sort((a, b) => a - b);
console.log(array18); // [1, 2, 3, 4]

let array19 = [1, 2, 3, 4, 5, 6];
let quadradosPares = array19.filter(num => num % 2 === 0).map(num => num * num);
let somaQuadrados = quadradosPares.reduce((acc, num) => acc + num, 0);
console.log(quadradosPares); // [4, 16, 36]
console.log(somaQuadrados); // 56