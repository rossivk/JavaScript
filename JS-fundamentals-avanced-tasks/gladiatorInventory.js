function gladiatorInventory(array) {
  let inventoryArray = array.shift().split(' ');

  for (let i = 0; i < array.length; i++) {
    let commands = array.slice()[i].split(' ');
    let command = commands[0];
    let equipment = commands[1];
    switch (command) {
      case 'Buy': buy(equipment); break;
      case 'Trash': trash(equipment); break;
      case 'Repair': repair(equipment); break;
      case 'Upgrade': upgrade(equipment); break;
    }

  }
  console.log(inventoryArray.join(' '));

  function buy(eqp) {
    if (!inventoryArray.includes(eqp)) {
      inventoryArray.push(eqp);
    }
    return inventoryArray;
  }
  function trash(eqp) {
    if (inventoryArray.includes(eqp)) {
      let toTrash = inventoryArray.indexOf(eqp);
      inventoryArray.splice(toTrash, 1);
    }
    return inventoryArray;
  }
  function repair(eqp) {
    if (inventoryArray.includes(eqp)) {
      let toMove = inventoryArray.indexOf(eqp);
      toMove = inventoryArray.splice(toMove, 1);
      inventoryArray.push(eqp);
    }
    return inventoryArray;
  }
  function upgrade(eqp) {
    let commandArray = eqp.split('-');
    if (inventoryArray.includes(commandArray[0])) {
      let toInsert = inventoryArray.indexOf(commandArray[0]);
      inventoryArray.splice(toInsert + 1, 0, `${commandArray[0]}:${commandArray[1]}`)
    }
    return inventoryArray;
  }
}
