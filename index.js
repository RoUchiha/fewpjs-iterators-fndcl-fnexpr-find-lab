

function winningYear(game) {
    return game.result === "W";
}

function superbowlWin(array) {
    const winYear = array.find(winningYear)
    if (winYear) {
        return winYear.year
    } else {
        return undefined
    }
}