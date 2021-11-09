
// function superbowlWin(record) {
//     let result = record.find((record) => record.result === "W")
//     return superbowlWin(result) 
// }

let superbowlWin = (gameResult) => {
    const result = gameResult.find(gameResult => gameResult.result === "W")
    return !!result ? result.year : undefined
}