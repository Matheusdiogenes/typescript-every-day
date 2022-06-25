class Email {
  constructor(public email: string) { }

  static create(email: string) {
    if (email.length < 4) {
      return new Error('email invalid.')
    }
    return new Email(email).value
  }

  public get value(): string {
    return this.email
  }
}

abstract class User {
  constructor(public name: string, public email: string) { }
}

class UserEntity {
  id: number
  props: Required<User>

  constructor(id: number, user: User) {
    this.id = id
    this.props = user
  }  
  create(id: number, user: User){
    return new UserEntity(id, user)
  }
}
// Create
const user1 = {
  name: 'user 1',
  email: 'use'
}

const user1exist = new UserEntity(1, user1)

// user1exist.setEmail('ma@email.com')
console.log(user1exist);
