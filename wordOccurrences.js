function words(array) {
    const word = new Map();
    let count = 1;

    for (let i = 0; i < array.length; i++) {

        if (word.has(array[i])) {
            word.set(array[i], (word.get(array[i]) + count))

        } else {
            word.set(array[i], count)
        }
    }

    const wordSort = Array.from(word.entries()).sort((a, b) => b[1] - a[1]);

    for (const kvp of wordSort) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`)

    }
}

words(
    ["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
