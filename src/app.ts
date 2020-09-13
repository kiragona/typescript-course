// Classes and Interface

console.log('Code goes here...')

interface Greetable {
  name: string;
  greet(phrase: string) : void
}

class Person implements Greetable {
  name: string = ''

  greet(phrase: string) {
    console.log(phrase + ', ' + name)
  }

}

class Department {
  //private id: string
  //private name: string
  private employees: string[] = []

  constructor(private id:number, public name: string) {
    // will create a public member name on this class and init it to name value
    // will create a private member id and init it with passed value

  }

  // method function
  describe() {
    console.log('Department: ', this.name)
    console.log('Department id: ', this.id)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployee() {
    console.log('Employees length :', this. employees.length)
    console.log('Employees :', this. employees)

  }

}


const accounting = new Department(1,'Accounting')

console.log('d is', accounting)
accounting.describe()

accounting.addEmployee('Marianna')
accounting.printEmployee()
