const person = {
  name: 'Mufassir Mahmud',
  age: 23,
  student: 'CSE'
}
const prop = 'name'
// console.log(person.name)
// console.log(person['name'])
console.log(person[prop]);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);