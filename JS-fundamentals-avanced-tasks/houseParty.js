function houseParty(array) {
  let subArray = [];
  let guestList = [];

  for (let element of array) {
    subArray = element.split(' ');
    let name = subArray[0];

    if (!subArray.includes('not')) {
      if (!guestList.includes(name)) {
        guestList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (!guestList.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        guestList = guestList.filter((guest) => guest !== name);
      }
    }
  }
  console.log(guestList.join('\n'));
}
