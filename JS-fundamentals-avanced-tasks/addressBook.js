function addressBook(array) {
    const addressBk = {};

    array.forEach(line => {
        const [name, address] = line.split(':');
        addressBk[name] = address;
    });

    const sortedAddresBk = Object.fromEntries(Object.entries(addressBk).sort());

    for (const key of Object.keys(sortedAddresBk)) {
        console.log(`${key} -> ${sortedAddresBk[key]}`);
    }

}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
