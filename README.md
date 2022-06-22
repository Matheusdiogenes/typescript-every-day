# Features

## Reflect

Reflect é um objeto interno que fornece métodos para operações JavaScript interceptáveis.

- deleteProperty(): Deleta uma propriedade de um objeto. Exemplo em `src/object/Reflect/deleteProp.ts`

## Array

- every() : O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Exemplo em `src/array/every.ts`

Ideal para fazer uma condição conjunta, onde todos os elementos do array tem que passar pela condição fornecida. Caso um elemento do array não passe pela condição o resultado será `false`. O famoso "Por causa de um, todos pagam".

## Object

- Object.is(): Comara somente o valor da chave de dois objetos. Retornará `false` se o valor não for igual, ou quando comparar o objeto completo. Exemplo em `src/object/is.ts`