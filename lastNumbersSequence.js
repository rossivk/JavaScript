function numSequence(n,k) {
    let seq=[1];

    for (let i = 1; i < n; i++) {
       let startNum = Math.max(0,i-k);
       let currentElement = seq.slice(startNum, startNum + k).reduce((acc, el) => acc + el, 0);
       seq.push(currentElement);
    }

  console.log(seq.join(' '));
}
numSequence(8,3)
