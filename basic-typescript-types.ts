// To compile this file run: npx tsc basic-typescript-types.ts

// enum definition
enum Role {ADMIN, READ_ONLY}

// enum can be also initialized by specifying strings
enum EnumDefinition { ADMIN='ADMIN', READ_ONLY = 'READ_ONLY' }

type Person = {
  name: string;
  age: number;
  hobbies: string[]; //array of string
  tuple_role: [number, string]; // tuple
  role: Role.ADMIN; // enum example
}
const person: Person = {
  name: 'Marianna',
  age: 45,
  hobbies: ['1, 2'],
  tuple_role: [2, 'author'],
  role: Role.ADMIN
}


console.log(person)
