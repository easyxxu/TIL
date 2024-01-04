function solution(players, callings) {
    const playersObj = {};
    players.forEach((player, idx) => {
        playersObj[player] = idx + 1;
    })
    callings.forEach((player) => {
        const order = playersObj[player];
        playersObj[player] = order - 1;
        playersObj[players[order-2]] = order;
        
        const temp = players[order - 1];
        players[order - 1] = players[order - 2];
        players[order - 2] = temp;
    })
    
    const sortedPlayers = Object.keys(playersObj).sort((a, b) => playersObj[a] - playersObj[b]);
    return sortedPlayers;
}