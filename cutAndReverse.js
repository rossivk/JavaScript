function cutAndReverse(input) {
    let inputFirstHalf = input.substring(0, input.length / 2);
    let inputSecondHalf = input.substring(input.length / 2, input.length);

    console.log(reverseString(inputFirstHalf));
    console.log(reverseString(inputSecondHalf));

    function reverseString(str) {
        let splitString = str.split('');
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join('');
        return joinArray
    }
}
