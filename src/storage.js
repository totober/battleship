import {Player} from "./player"

export {storeData, retrieveData}


function storeData(mode, playerOne, playerTwo) {

    let state = {
        mode: mode,
        players: [playerOne, playerTwo]
    }

    console.log("STATE", state)
    console.log("PLAYERS", state.players)
    console.log("p1", state.players[0])

    localStorage.setItem("state", JSON.stringify(state)) 
}


function retrieveData() {

   let state = JSON.parse(localStorage.getItem("state"))

   console.log("a ver ahora", state)

   let playerOne  = new Player(state.players[0].name)
   let playerTwo  = new Player(state.players[1].name)

   let players = [playerOne, playerTwo]

   let i = 0

   for(let player of players) {

        player.gameBoard.setProperties(state.players[i].gameBoard)

        let j = 0

        for(let ship of player.gameBoard.ships) {

            ship.setProperties(state.players[i].gameBoard.ships[j])

            j++
        }

        i++
   }

   console.log("ARRAY OF PLAYERS", players)
   console.log("inst p1", playerOne )
   console.log("inst p2", playerTwo )

   return players
}