function valueOfString(array) {
    const string = array[0];
    let total = 0;

    switch (array[1]) {
        case 'LOWERCASE':
            for (let index = 0; index < string.length; index++) {
                if (string.charCodeAt(index) >= 97 && string.charCodeAt(index) <= 122) {
                    total += string.charCodeAt(index);
                }
            } break;
        case 'UPPERCASE':
            for (let index = 0; index < string.length; index++) {
                if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {
                    total += string.charCodeAt(index);
                }
            } break;

        default:
            break;
    }

    console.log(`The total sum is: ${total}`);
}
