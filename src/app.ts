// Arrow functions

console.log('Code goes here...')
type Admin ={
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}
// combination of Admin object and Employee object
type ElevatedEmployee = Admin & Employee

let admin : Admin = {
  name : 'name',
  privileges: []
}

let employee : Employee = {
  name : 'name1',
  startDate: new Date()
}



type Combinable = string | number // union
type Numeric = number | boolean;

//intersection type - only types that have intersection inside a unioin
type Universal = Combinable & Numeric //allows only number type

// overloaded function type : name must be the same name as in function signature
function add(a: number, b: number) : number
function add(str1: string, str2: string) : string

function add(a: Combinable, b: Combinable) {

  // type guards
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b;

}

const res = add('Marianna', 'Etelson')
//but we cannot write res.split(','), because we don't know what type returned number or string
//in order to make it enabled in TS, we need to define overloaded function
res.split(',')

const sum = add(1, 4)
sum.toFixed() //we can call Number function, because overloading function add
type UnknownEmployee = Employee | Admin

function printEmployeeInfo(empl: UnknownEmployee) {
  console.log('Name ' + empl.name)

  if ('privileges' in empl) {
    console.log('Privileges ' + empl.privileges)
  }

  if ('startDate' in empl) {
    console.log('Privileges ' + empl.startDate)
  }

}

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ', amount)
  }
}

type Vehicle = Car | Truck // union

const v1 = new Car()
const v2 = new Truck()


function useVehicle(vehicle :Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5)
  }

}
// Index properties
interface ErrorContainer { // {email: 'invalid email, username: 'must fill username}

 [key: string] : string

}

// function overloads - allows us to define multiple function signatures



