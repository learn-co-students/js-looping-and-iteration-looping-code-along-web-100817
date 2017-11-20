// Code your solutions in this file
function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names
}

function tailsNeverFails() {
  tails_count = 0
  while (Math.random() >= 0.5) {
    tails_count += 1;
  }
  return `You got ${tails_count} tails in a row!`
}
