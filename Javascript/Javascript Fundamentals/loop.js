let condition = true;

while (condition) {
  // code
  break;
}

do {
  break;
} while (condition);

for (let i = 0; i < 3; i++) {}

// labels

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*), can be used with continue

    // do something with the value...
  }
}

alert('Done!');
