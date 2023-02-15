function schoolGrades(array) {
    const grades = {};

    array.forEach(line => {
        let studentGrades = line.split(' ');
        let firstName = personArray.splice(0, 1);

        if (grades.hasOwnProperty(firstName)) {
            const studentGrades = grades[firstName];
            grades[firstName] = previousGrades.concat(studentGrades);
        } else {
            grades[firstName] = studentGrades;
        }
    });

    const sortedGrades = Object.fromEntries(Object.entries(grades).sort());

    for (const kvp of Object.entries(sortedGrades)) {
        let totalGrades = 0;
        let avarageGrade = 0;
        for (let index = 0; index < kvp[1].length; index++) {
            totalGrades += Number((kvp[1])[index]);
            avarageGrade = totalGrades / kvp[1].length;
        }
        console.log(`${kvp[0]}: ${avarageGrade.toFixed(2)}`);
    }

}



schoolGrades(
    ['Steven 3 5 6 4',
        'George 4 6',
        'Tammy 2 5 3',
        'Steven 6 3']

)
