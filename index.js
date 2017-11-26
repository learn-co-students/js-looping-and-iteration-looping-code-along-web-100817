// Code your solutions in this file
function printBadges(blah){
  for (let i = 0; i < blah.length; i++){
    console.log(`Welcome ${blah[i]}! You are employee #${i+1}.`);
  }
  return blah;
}

function tailsNeverFails(){
  let coin = 0;
  while (Math.random() >= 0.5){
    coin ++;
  }
  return `You got ${coin} tails in a row!`;
}
