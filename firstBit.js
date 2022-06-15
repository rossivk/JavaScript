function firstBit(number) {
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    const binNumber = dec2bin(number)
    console.log(binNumber.charAt(binNumber.length - 2));
}

firstBit(13)
