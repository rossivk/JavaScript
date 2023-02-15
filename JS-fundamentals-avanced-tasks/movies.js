function movies(array) {
  const listMovies = [];

  array.forEach(line => {
    const info = line.split(' ');
    const addIndex = info.indexOf('addMovie');
    const directorIndex = info.indexOf('directedBy');
    const dateIndex = info.indexOf('onDate');

    if (addIndex > -1) {
      listMovies.push({ name: info.slice(addIndex + 1).join(' ') });
    }
    if (directorIndex > -1) {
      const name = info.slice(0, directorIndex).join(' ');
      const director = info.slice(directorIndex + 1).join(' ');
      listMovies.forEach(movie => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    }
    if (dateIndex > -1) {
      const name = info.slice(0, dateIndex).join(' ');
      const date = info.slice(dateIndex + 1).join(' ');
      listMovies.forEach(movie => {
        if (movie.name === name) {
          movie.date = date;
        }
      })
    }
  });
  listMovies.forEach(movie => {
    if (movie.name !== undefined
      && movie.director !== undefined
      && movie.date !== undefined) {
      console.log(JSON.stringify(movie))
    }
  });
}
