function rageQuit(input) {
    const regex = /[^0-9]+\d+/gm;
    let result = [];
    let m;

    while ((m = regex.exec(input)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match) => {
            let numRepeat = match.match(/\d+/);
            let strReapeat = match.match(/[^0-9]+/);
            result.push(strReapeat[0].repeat(+numRepeat[0]));
        });

    }
    result = result.join('').toUpperCase();
    let uniqueSymbols = '';
    for (let index = 0; index < result.length; index++) {
        if (uniqueSymbols.includes(result[index]) === false) {
            uniqueSymbols += result[index];
        }
    }
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(result);
}
