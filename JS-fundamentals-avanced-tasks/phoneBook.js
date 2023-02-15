function phoneBook(array) {
    const contacts = {};

    for (const line of array) {
        const [name, phoneNum] = line.split(' ');
        contacts[name] = phoneNum;
    }
    
    //Option one
    // for (const key in contacts) {
    //     console.log(`${key} -> ${contacts[key]}`)
    // }
    
    //Option two
    Object.keys(contacts).forEach(key => {
        console.log(`${key} -> ${contacts[key]}`);
    });
}


phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
