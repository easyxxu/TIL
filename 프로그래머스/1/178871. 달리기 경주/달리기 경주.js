function solution(players, callings) {
    const playersObj = {};
    players.forEach((player, idx) => {
        playersObj[player] = idx + 1;
    })
    callings.forEach((player) => {
        const order = playersObj[player];
        playersObj[player] = order - 1;
        playersObj[player[order-2]] = order + 1; 
    })
    const sortedPlayers = Object.keys(playersObj).sort((a, b) => playersObj[a] - playersObj[b]);
    return sortedPlayers;
}