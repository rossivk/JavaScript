
function serialize(array) {
    let chars = array[0].split('');
    let obj = {};

    for (let char = 0; char < chars.length; char++) {
        let charName = chars[char];
        if (obj.hasOwnProperty(charName)) {
            obj[charName].push(char);
        } else {
            obj[charName] = [char];
        }
    }

    for (const key in obj) {
        console.log(`${key}:${obj[key].join('/')}`);
    }
}
