// Union Type Example
// Union Definition: type1 | type2 | type3

//Literal type: 'as-number' | 'as-string'

function combine(
  input1: number | string ,
  input2: number | string,
  resultConversion : 'as-number' | 'as-string') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  }
  else {
    result = input1.toString() + input2.toString()
  }

  if (resultConversion === 'as-number') {
    return +result //the same as parseFloat
  } else {
    return result.toString
  }

  return result

}

const combinedNumber = combine(5, 5, 'as-number') // return 10

const combinedStrings = combine('name1', 'name2', 'as-string') // name1name2

