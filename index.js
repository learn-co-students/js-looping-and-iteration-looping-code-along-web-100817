// Code your solutions in this file
function printBadges(namesArray){
  for (let i = 0; i < namesArray.length; i++)
    console.log('Welcome ' + namesArray[i] + '! You are employee #' + (parseInt(i) + 1) + '.')
  return namesArray
}

function tailsNeverFails() {
  let i = 0
  while (Math.random() >= 0.5) {
    i++
  }
  return ('You got ' + i.toString() + ' tails in a row!')
}
