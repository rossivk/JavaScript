function loadingBar(number) {

    let symbolRepeat = '%';
    let dotsRepeat = '.';
    let singleNumber = Math.floor(number / 10);

    let repeatedSymbol = symbolRepeat.repeat(singleNumber);
    let repeatedDots = dotsRepeat.repeat(10 - (singleNumber));

    if (number === 100) {
        console.log(`${number}${symbolRepeat} Complete!`)
    } else {
        console.log(`${number}${symbolRepeat} [${repeatedSymbol}${repeatedDots}]`)
        console.log(`Still loading...`)
    }
}
