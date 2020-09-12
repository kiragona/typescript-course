//! at the end tells , that e know this value cannot be null
const button =  document.querySelector('button')!

function handleClick(message: string) {
  console.log('Clicked ', message)
}


button.addEventListener('click', handleClick.bind(null, 'Hello'))

