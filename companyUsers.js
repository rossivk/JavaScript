function companyUsers(array) {
    const users = {};
    let usersId = [];

    array.forEach(line => {
        let arrayLine = line.split(' -> ');

        if (users.hasOwnProperty(arrayLine[0])) {
            usersId = users[arrayLine[0]];
            usersId.push(arrayLine[1]);
            users[arrayLine[0]] = usersId;
        } else {
            usersId = [];
            usersId.push(arrayLine[1]);
            users[arrayLine[0]] = usersId;
        }
    });

    for (const key in users) {
        let setUsers = new Set(users[key]);
        users[key] = (new Array(...setUsers).join(' '));
    }

    const unsortedUsers = Array.from(Object.entries(users)); // = [...Object.entries(users)];
    const sortedUsers = unsortedUsers.sort((a, b) => a[0].localeCompare(b[0]));

    sortedUsers.forEach(line => {
        console.log(`${line[0]}`);

        let arrayIds = line[1].split(' ');

        for (let i = 0; i < arrayIds.length; i++) {
            console.log(`-- ${arrayIds[i]}`);
        }
    });
}
