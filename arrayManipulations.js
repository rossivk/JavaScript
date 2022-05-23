function arrayManipulations(array) {
  let newArray = arrFromString((array[0]));

  for (let i = 1; i < array.length; i++) {
    let sub = arrFromString(array[i]);
    let command = sub[0];
    let firstNum = (sub[1]);
    let secondtNum = (sub[2]);

    switch (command) {
      case 'Add':
        newArray.push(firstNum);
        break;
      case 'Remove':
        if (newArray.includes(firstNum)) {
          newArray = newArray.filter(elements => elements !== firstNum);
        };
        break;
      case 'RemoveAt':
        newArray.splice(firstNum, 1);
        break;
      case 'Insert':
        newArray.splice(secondtNum, 0, firstNum);
        break;
    }
  }

  console.log(newArray.join(' '));

  function arrFromString(index) {
    return index.split(' ');
  }
}

arrayManipulations(['6 12 2 65 6 42',
  'Add 8',
  'Remove 12',
  'RemoveAt 3',
  'Insert 6 2']
)
