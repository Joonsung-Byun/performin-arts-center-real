console.log('Im connected')
const rightNow = new Date()
console.log(rightNow.getFullYear())

document.querySelector('#year').textContent = rightNow.getFullYear();