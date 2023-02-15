function train(array) {
  let copy = array.slice();
  let wagons = copy[0].split(' ').map(makeMeNumber);
  let maxCapacityWagon = Number(array[1]);
  let commands = copy.slice(2);

  for (let command of commands) {
    let comandInfo = command.split(' ');

    if (comandInfo.length === 2) {
      wagons.push(Number(comandInfo[1]));
    } else {
      for (let wagon in wagons) {
        let passangers = Number(comandInfo[0]);
        if ((passangers + wagons[wagon]) <= maxCapacityWagon) {
          wagons[wagon] += passangers;
          break;
        }
      }
    }
  }

  console.log(wagons.join(' '));

  function makeMeNumber(element) {
    return Number(element);
  }


}
