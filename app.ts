let userInput : unknown
let userName : string

userInput = 5;

// userName = userInput ===> Error

// type never - indicates that function NEVER returns a value

function generateError(msg: string, errorCode: number) : never {
  throw {message: msg, code: errorCode}
}
