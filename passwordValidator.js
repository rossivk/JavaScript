function passwordValidator(password) {
    let arrayPassword = Array.from(password)
    let lettersCount = 0;
    let digitsCount = 0;
    let notAllowedSymbols = 0;

    for (let i = 0; i < arrayPassword.length; i++) {

        let lettersDigits = arrayPassword[i].charCodeAt(0);

        if (lettersDigits >= 48 && lettersDigits <= 57) {
            digitsCount++;
        } else if (lettersDigits >= 65 && lettersDigits <= 90) {
            lettersCount++;
        } else if (lettersDigits >= 97 && lettersDigits <= 122) {
            lettersCount++;
        } else {
            notAllowedSymbols++;
        }
    }

    let sumAll = arrayPassword.length;

    if (sumAll < 6 || sumAll > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (notAllowedSymbols !== 0) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (sumAll >= 6 && sumAll <= 10 && notAllowedSymbols === 0 && digitsCount >= 2) {
        console.log('Password is valid');
    }
}
