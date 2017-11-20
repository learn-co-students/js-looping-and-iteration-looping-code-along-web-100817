// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }

  return names;
}


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}

// function tailsNeverFails(){
//   let num = Math.random() >= .5);
//
//   let tails = 0;
//
//   while (num >= 0){
//     tails ++;
//   }
//   return 'You got ${tails}';
// }

//console.log(tailsNeverFails());

// console.log(printBadges(['mimi','joe']))
