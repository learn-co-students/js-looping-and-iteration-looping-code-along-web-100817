// Code your solutions in this file
function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
 
  return names;
}

function tailsNeverFails() {
	let isTails = true;
	let counter = 0
	while (isTails) {
		rand = Math.random();
		if (rand >= 0.5) {
			counter++
		} else {
			isTails = false;
		}
	}
	return `You got ${counter} tails in a row!`
}
