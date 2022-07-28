function deserialize(array) {
    let string = '';
    let lengthString = 0;

    array.forEach(element => {
        string = element.split(/[:/]/);
        string.shift();
        lengthString += string.length;
    });

    let finalString = new Array(lengthString).fill('*');

    array.forEach(line => {
        string = line.split(/[:/]/);
        let char = string.shift();

        if (line === 'end') {
            return;
        } else {
            for (let index = 0; index < string.length; index++) {
                finalString.splice(string[index], 1, char);
            }
        }
    });

    console.log(finalString.join(''));
}
