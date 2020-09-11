function add(n1: number, n2: number, showResult: boolean) {
  //always fail in runtime
  /*if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect Input')
  }*/
  const result = n1 + n2
  return showResult ? console.log('res ', result) :result

}


const number1 = 5;
const number2 = 2.8


const result = add(number1, number2, true)

