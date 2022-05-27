function buildAWall(wallHeight) {
  wallHeight = wallHeight.map(Number); //parse all the elements (from Strings) in the array to Numbers.
  let usedConcrete = [];

  while (true) {
    let isBuild = false;
    let dailyConcrete = 0;
    for (let i = 0; i < wallHeight.length; i++) {
      if (wallHeight[i] !== 30) {
        dailyConcrete += 195;
        wallHeight[i]++;
        isBuild = true;
      }
    }
    if (!isBuild) {
      break;
    } else {
      usedConcrete.push(dailyConcrete);
    }
  }
  
  let totalConcreteUsed = usedConcrete.reduce((a, b) => a + b); //to get the sum we are using .reduce
  
//Initially I used a for loop as didn't know the reduce metod yet.
//   let totalConcreteUsed = 0;
//   for (let index = 0; index < usedConcrete.length; index++) {
//     totalCost += usedConcrete[index];
//   }
  
  console.log(usedConcrete.join(', '));
  console.log(`${totalConcreteUsed * 1900} pesos`);
}

buildAWall([17, 22, 17, 19, 17])
