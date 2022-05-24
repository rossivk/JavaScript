function sortingByTwo(arrayNames) {
  
  let sortByLength = arrayNames.sort(sorting);
  
  console.log(sortByLength.join('\n'));
  

  function sorting(a, b) {
    if (a.length === b.length) {
      return a.localeCompare(b);
    } else {
      return a.length - b.length;
    }
  }
}
