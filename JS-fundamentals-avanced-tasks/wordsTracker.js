function wordsTracker(array) {
    const firstSentence = array.shift().split(' ')
    const wordsToTrack = {};

    for (let i = 0; i < firstSentence.length; i++) {
        wordsToTrack[firstSentence[i]] = 0;
    }

    for (const key in wordsToTrack) {
        let count = 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] === key) {
                count++
            }
        }
        wordsToTrack[key] = count;
    }

    const wordsToTrackSorted = Object.entries(wordsToTrack).sort((a, b) => b[1] - a[1]);

    for (let j = 0; j < wordsToTrackSorted.length; j++) {
        console.log(`${wordsToTrackSorted[j][0]} - ${wordsToTrackSorted[j][1]}`);
    }
}
