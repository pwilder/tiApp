
const getNextIndex = (currentIndex, playerLength) => ((currentIndex + 1) % playerLength);

module.exports = (players, currentIndex) => {
    let nextIndex = getNextIndex(currentIndex, players.length);
    let checked = 0;
    while (checked++ < players.length) {
        if (!players[nextIndex].passed) {
            return nextIndex;
        }
        nextIndex = getNextIndex(nextIndex, players.length);
    }
    return 0;
};