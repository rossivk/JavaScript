function storage(array) {
    const store = new Map();

    array.forEach(line => {
        const products = line.split(' ');
        let product = products[0];
        let quantity = Number(products[1]);

        if (store.has(product)) {
            quantity += store.get(product);
            store.set(product, quantity);
        } else {
            store.set(product, quantity);
        }
    });

    const storeArray = Array.from(store.entries());

    for (const array1 of storeArray) {
        console.log(`${array1[0]} -> ${array1[1]}`);
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)
