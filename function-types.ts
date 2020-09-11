
function add(n1: number, n2: number) : number {
  return n1 + n2
}

let myAdd : (n1: number, n2: number) => number

myAdd = add

myAdd(1, 2)

// myAdd(1, 'str') //error
