function oddOccurrences(string) {
    const stringLowerCase = string.toLowerCase();
    const words = stringLowerCase.split(' ');
    const wordsMap = new Map();
    const count = 0;

    words.forEach(element => {
        if (!wordsMap.has(element)) {
            wordsMap.set(element, count);
        }
    });

    let wordsMapArray = Array.from(wordsMap.entries())

    for (let i = 0; i < words.length; i++) {
        for (let kvp of wordsMapArray) {
            if (kvp[0] === words[i]) {
                kvp[1]++;
            }
        }
    }
    let result = [];

    for (const kvp of wordsMapArray) {
        if (kvp[1] % 2 !== 0) {
            result.push(kvp[0]);
        }
    }

    console.log(result.join(' '));
}
