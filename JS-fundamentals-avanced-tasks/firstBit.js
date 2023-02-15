function firstBit(number) {
  
    const binNumber = Number(number).toString(2);
   
    console.log(binNumber.charAt(binNumber.length - 2));
}

firstBit(13)
