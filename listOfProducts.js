function listOfProducts(products) {

  products.sort();
//   products.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}.${products[i]}`);
  }
  
}
