const numbers = [10,20,30,40,50,60];
const total = numbers.reduce((prev , curr) => prev + curr, 5);
console.log(total);