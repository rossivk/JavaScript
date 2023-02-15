function charInRange(charOne, charTwo) {

    let asciiCodeOne = charOne.charCodeAt(0);
    let asciiCodeTwo = charTwo.charCodeAt(0);
    let differenceBtwnChar = 0;
    let charString = '';
    let arrayFromCharString = [];
    let arrayCharCode = [];

    if (asciiCodeOne > asciiCodeTwo) {

        differenceBtwnChar = asciiCodeOne - asciiCodeTwo;
        asciiCodeOne = asciiCodeTwo;
    } else {

        differenceBtwnChar = asciiCodeTwo - asciiCodeOne;
    }

    for (let index = 1; index < differenceBtwnChar; index++) {

        let charToPrint = (a, b) => a + b;
        charString += charToPrint(asciiCodeOne, index) + ',';
        let charStringSlice = charString.slice(0, -1);
        arrayFromCharString = charStringSlice.split(',');
    }

    for (let indexArray = 0; indexArray < arrayFromCharString.length; indexArray++) {

        arrayCharCode += String.fromCharCode(arrayFromCharString[indexArray]) + ' ';
    }

    console.log(arrayCharCode);
}


charInRange('C','#')
