// Code your solutions in this file


function printBadges(array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
  return array
}

function tailsNeverFails(){
  function coinflip () {
    return Math.random() >= 0.5;
  }
  counter = 0
  while (coinflip()){
    counter++
  }
  return 'You got '+counter+' tails in a row!'
}
