function factorialDivision(numberOne, numberTwo) {

    let result = factorial(numberOne) / factorial(numberTwo);

    function factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    console.log(result.toFixed(2));
}

factorialDivision(6, 2)
