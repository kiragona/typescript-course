// Arrow functions

console.log('Code goes here...')


//array of strings
// Array is a Generic type
const names : Array<string> = ['Marianna', 'Gregory']

// Promise is a generic type
const promise : Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done')
  }, 200)
})

// Build our own generic types

// generic function

//we want to define a function that merges 2 objects
function merge(objA : object, objB: object): Object {
  return Object.assign(objA, objB)
}

console.log(merge({name: 'Marianna'}, {age: 45}))

const mergedObject = merge({name: 'Marianna'}, {age: 45})
// now we cannot access mergedObject.name

// define Generic merge function
function genericMerge<T, U>(objA : T, objB: U): T & U {
  return Object.assign(objA, objB)
}

const mergedObject1 = genericMerge({name: 'Marianna'}, {age: 45})

console.log(mergedObject1.age)

//restrict your generic type T extends <type>
function genericMergeWithConstrains<T extends object, U extends object>(objA : T, objB: U): T & U {
  return Object.assign(objA, objB)
}

// genericMergeWithConstrains({name: 'marianna'}, 10) ==> error

// another example for Generic with Constrains
interface Lengthy {
  length: number
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if (element.length === 1) {
    descriptionText = 'Got one element'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText] //tuple
}

console.log(countAndPrint('Hi there'))
console.log(countAndPrint([]))

function extractAndConvert<T extends object, U extends keyof T>(obj : T, key: U) {
  return obj[key] //U extends keyof T to ensure that object has key property
}

extractAndConvert({name: 'M'}, 'name')

class MyStorage<T> {
  private data:T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [... this.data ]
  }
}

const textStorage = new MyStorage<string>()
textStorage.addItem('asd')
// textStorage.addItem(10) ==> error, since textStorage gets only string data type


const numberStorage = new MyStorage<number>()
