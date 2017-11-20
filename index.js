// Code your solutions in this file
function printBadges(ar) {
  for(let i = 0; i < ar.length; i++){
    console.log(`Welcome ${ar[i]}! You are employee #${i+1}.`);
  }
  return ar;
}

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >=0.5){
    count++;
  }
  return `You got ${count} tails in a row!`;
}
