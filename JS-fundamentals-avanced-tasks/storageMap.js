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

  for (const kvp of store.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)
