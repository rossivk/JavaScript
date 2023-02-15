function pascalCaseSplitter(input) {
    let newInput = input.split('');
    let result = input[0];

    for (let i = 1; i < newInput.length; i++) {
        let replacement = `, ${newInput[i]}`
        result += newInput[i].replace(/[A-Z]/, replacement);
    }

    console.log(result);
}
