

function winningYear(game) {
    return game.result === "W";
}

function superbowlWin(array) {
    const winYear = array.find(function(game) { game['result'] === "W"})
    if (winYear) {
        return winYear.year
    } else {
        return undefined
    }
}