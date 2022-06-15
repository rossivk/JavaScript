function pThBit(number, position) {

    const binNumber = Number(number).toString(2);
    console.log(binNumber);
    if (binNumber.length <= position) {
        console.log(0);
    } else {
        console.log(binNumber.charAt(binNumber.length - position - 1));
    }
}

firstBit(255, 7)
