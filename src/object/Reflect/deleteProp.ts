const user = {
  name: 'user-name',
  email: 'any email',
  password: 'any password',
  about: {
    age: 80,
    team: 'any_team'
  }
};

Reflect.deleteProperty(user, 'password');

console.log(user);

Reflect.deleteProperty(user.about, 'age');

console.log(user);
