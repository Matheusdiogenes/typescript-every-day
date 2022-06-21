
{
  interface IAnimal {
  name: string
  }

  interface IBear extends IAnimal {
  honey: boolean
  }

  const bear : IBear = {
    name: 'any name',
    honey: true
  }
}

{
  type Animal = {
    name: string
  }

  type Bear = Animal & { 
    honey: boolean 
  }

  const bear : Bear = {
    name: 'any name',
    honey: true
  }
}

// Enum
{
  enum E {
    X = 1,
    Y = 2,
    Z = 3,
  }
   
  function f(obj: { X: number }) {
    return obj.X;
  }
   
  // Works, since 'E' has a property named 'X' which is a number.
  console.log(f(E))
}