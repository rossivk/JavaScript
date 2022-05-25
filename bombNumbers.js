function bombNumbers(numbers, bombInfo) {
  let bomb = bombInfo[0];
  let bombeRange = bombInfo[1];
  let index = numbers.indexOf(bomb);

  while (index > -1) {
    numbers.splice(Math.max((index - bombeRange), 0), Math.min(bombeRange, index));
    index = numbers.indexOf(bomb);
    numbers.splice(index, (bombeRange + 1));
    index = numbers.indexOf(bomb);
  }

  let sum = 0;

  for (let j = 0; j < numbers.length; j++) {
    sum += numbers[j];
  }
  console.log(sum);
}
