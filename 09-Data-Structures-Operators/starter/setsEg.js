const orderSet = new Set(['Pasta', 'Pizza', 'Risotta', 'Pizza', 'Pasta']);

console.log(orderSet);

console.log(new Set('Ashish'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
// orderSet.clear()
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);
