const products = [
    {id: 1, name: 'lenevo', price: 50000},
    {id: 2, name: 'hp', price: 65000},
    {id: 1, name: 'dell', price: 55000},
    {id: 1, name: 'mac', price: 150000}
]
const price = products.map(product => product.price);
console.log(price);
const name = products.forEach(product => console.log(product.name));
const expense = products.filter(product => product.price > 60000 );
console.log(expense);
const affordable = products.find(product => product.price < 55000);
console.log(affordable);

const total = products.reduce((accum, curr) => accum + curr.price, 0);
console.log(total);