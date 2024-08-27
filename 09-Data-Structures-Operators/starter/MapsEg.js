const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Florence', 'Italy');
console.log(rest.set(2, 'Lisbon', 'Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
