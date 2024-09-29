const players = [45,77,88,32,15,55,34,12];

// const result = players.filter(n => n > 50);
const result = players.filter(n => n % 2 == 0);

const friends = ['Mufassir', 'Mehedi', 'Arman', 'Topu', 'Ohin', 'Sabbir'];
const filter = friends.filter(f => f.length > 4)
console.log(filter);