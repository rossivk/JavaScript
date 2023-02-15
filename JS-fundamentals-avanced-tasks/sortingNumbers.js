function sorting(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let lengthArray = sortedArray.length;
  let newArray = []

  for (let i = 0; i < lengthArray / 2; i++) {
    let lastElement = sortedArray.pop();
    let firstElement = sortedArray.shift();
    newArray.push(lastElement, firstElement);
  }
  console.log(newArray.join(' '));
}
