function songs(array) {
  class Song {
    constructor(typeList, songName, songLength) {
      this.typeList = typeList;
      this.songName = songName;
      this.songLength = songLength;
    }
  }
  let songs = [];
  let songsCount = array.shift();
  let listType = array.pop();

  for (let i = 0; i < songsCount; i++) {
    let [typeList, songName, songLength] = array[i].split('_');
    let song = new Song(typeList, songName, songLength);
    songs.push(song);
  }
  if (listType === 'all') {
    songs.forEach((i) => console.log(i.songName));
  } else {
    let filtered = songs.filter((i) => i.typeList === listType);
    filtered.forEach((i) =>
      console.log(i.songName));
  }
}

