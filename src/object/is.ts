const obj1 = {
  name: 'name 1',
  age: 18,
}

const obj2 = {
  info: {
    name: 'name 1',
    age: 18,
  }
}

console.log(Object.is(obj1.age, obj2.info.age));
// true

console.log(Object.is(obj1.name, obj2.info.name));
// true

console.log(Object.is(obj1, obj2));
// false

